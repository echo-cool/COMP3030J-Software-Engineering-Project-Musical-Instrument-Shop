# -*- coding: utf-8 -*-

from __future__ import print_function

import imageio
import torch
from scipy import spatial
from torchvision.models.resnet import Bottleneck, BasicBlock, ResNet
import torch.utils.model_zoo as model_zoo
import numpy as np
import os

# configs for histogram
RES_model = 'resnet152'  # model type
pick_layer = 'avg'  # extract feature of this layer
d_type = 'd1'  # distance type

depth = 3  # retrieved depth, set to None will count the ap for whole database

''' MMAP
     depth
      depthNone, resnet152,avg,d1, MMAP 0.78474710149
      depth100,  resnet152,avg,d1, MMAP 0.819713653589
      depth30,   resnet152,avg,d1, MMAP 0.884925001919
      depth10,   resnet152,avg,d1, MMAP 0.944355078125
      depth5,    resnet152,avg,d1, MMAP 0.961788675194
      depth3,    resnet152,avg,d1, MMAP 0.965623938039
      depth1,    resnet152,avg,d1, MMAP 0.958696281702

      (exps below use depth=None)

      resnet34,avg,cosine, MMAP 0.755842698037
      resnet101,avg,cosine, MMAP 0.757435452078
      resnet101,avg,d1, MMAP 0.764556148137
      resnet152,avg,cosine, MMAP 0.776918319273
      resnet152,avg,d1, MMAP 0.78474710149
      resnet152,max,d1, MMAP 0.748099342614
      resnet152,fc,cosine, MMAP 0.776918319273
      resnet152,fc,d1, MMAP 0.70010267663
'''

# use_gpu = torch.cuda.is_available()
use_gpu = False
means = np.array([103.939, 116.779, 123.68]) / 255.  # mean of three channels in the order of BGR

# cache dir
cache_dir = 'cache'
if not os.path.exists(cache_dir):
    os.makedirs(cache_dir)


def distance(v1, v2, d_type='d1'):
    assert v1.shape == v2.shape, "shape of two vectors need to be same!"

    if d_type == 'd1':
        return np.sum(np.absolute(v1 - v2))
    elif d_type == 'd2':
        return np.sum((v1 - v2) ** 2)
    elif d_type == 'd2-norm':
        return 2 - 2 * np.dot(v1, v2)
    elif d_type == 'd3':
        pass
    elif d_type == 'd4':
        pass
    elif d_type == 'd5':
        pass
    elif d_type == 'd6':
        pass
    elif d_type == 'd7':
        return 2 - 2 * np.dot(v1, v2)
    elif d_type == 'd8':
        return 2 - 2 * np.dot(v1, v2)
    elif d_type == 'cosine':
        return spatial.distance.cosine(v1, v2)
    elif d_type == 'square':
        return np.sum((v1 - v2) ** 2)


# from https://github.com/pytorch/vision/blob/master/torchvision/models/resnet.py
model_urls = {
    'resnet18': 'https://download.pytorch.org/models/resnet18-5c106cde.pth',
    'resnet34': 'https://download.pytorch.org/models/resnet34-333f7ec4.pth',
    'resnet50': 'https://download.pytorch.org/models/resnet50-19c8e357.pth',
    'resnet101': 'https://download.pytorch.org/models/resnet101-5d3b4d8f.pth',
    'resnet152': 'https://download.pytorch.org/models/resnet152-b121ed2d.pth',
}


class ResidualNet(ResNet):
    def __init__(self, model=RES_model, pretrained=True):
        if model == "resnet18":
            super().__init__(BasicBlock, [2, 2, 2, 2], 1000)
            if pretrained:
                self.load_state_dict(model_zoo.load_url(model_urls['resnet18']))
        elif model == "resnet34":
            super().__init__(BasicBlock, [3, 4, 6, 3], 1000)
            if pretrained:
                self.load_state_dict(model_zoo.load_url(model_urls['resnet34']))
        elif model == "resnet50":
            super().__init__(Bottleneck, [3, 4, 6, 3], 1000)
            if pretrained:
                self.load_state_dict(model_zoo.load_url(model_urls['resnet50']))
        elif model == "resnet101":
            super().__init__(Bottleneck, [3, 4, 23, 3], 1000)
            if pretrained:
                self.load_state_dict(model_zoo.load_url(model_urls['resnet101']))
        elif model == "resnet152":
            super().__init__(Bottleneck, [3, 8, 36, 3], 1000)
            if pretrained:
                self.load_state_dict(model_zoo.load_url(model_urls['resnet152']))

    def forward(self, x):
        x = self.conv1(x)
        x = self.bn1(x)
        x = self.relu(x)
        x = self.maxpool(x)
        x = self.layer1(x)
        x = self.layer2(x)
        x = self.layer3(x)
        x = self.layer4(x)  # x after layer4, shape = N * 512 * H/32 * W/32
        max_pool = torch.nn.MaxPool2d((x.size(-2), x.size(-1)), stride=(x.size(-2), x.size(-1)), padding=0,
                                      ceil_mode=False)
        Max = max_pool(x)  # avg.size = N * 512 * 1 * 1
        Max = Max.view(Max.size(0), -1)  # avg.size = N * 512
        avg_pool = torch.nn.AvgPool2d((x.size(-2), x.size(-1)), stride=(x.size(-2), x.size(-1)), padding=0,
                                      ceil_mode=False, count_include_pad=True)
        avg = avg_pool(x)  # avg.size = N * 512 * 1 * 1
        avg = avg.view(avg.size(0), -1)  # avg.size = N * 512
        fc = self.fc(avg)  # fc.size = N * 1000
        output = {
            'max': Max,
            'avg': avg,
            'fc': fc
        }
        return output


def get_hist(img_path, model):
    d_img = img_path
    res_model = model
    if use_gpu:
        print("Using GPU")
    else:
        print("Using CPU")
    if use_gpu:
        res_model = res_model.cuda()
    img = imageio.v3.imread(d_img)
    # if have 4 channels, then convert to 3 channels
    if img.shape[2] == 4:
        img = img[:, :, :3]
    img = img[:, :, ::-1]  # switch to BGR
    img = np.transpose(img, (2, 0, 1)) / 255.
    img[0] -= means[0]  # reduce B's mean
    img[1] -= means[1]  # reduce G's mean
    img[2] -= means[2]  # reduce R's mean
    img = np.expand_dims(img, axis=0)
    try:
        if use_gpu:
            inputs = torch.autograd.Variable(torch.from_numpy(img).cuda().float())
        else:
            inputs = torch.autograd.Variable(torch.from_numpy(img).float())
        d_hist = res_model(inputs)[pick_layer]
        d_hist = d_hist.data.cpu().numpy().flatten()
        d_hist /= np.sum(d_hist)  # normalize
        res = {
            'img': d_img,
            'hist': d_hist
        }
        print(res)
        return res
    except Exception as e:
        print(e)


def main():
    model = ResidualNet(model=RES_model)
    model.eval()
    images = ['data/test.jpg', 'data/test1-1.png', 'data/test1-2.png', 'data/test2-1.png']
    res = {}
    for i in range(len(images)):
        print("Processing image: " + images[i])
        data: dict = get_hist(images[i], model)
        hist_data: np.ndarray = data['hist']
        res[images[i]] = data
        np_data_list = hist_data.tolist()
        np_data = np.array(np_data_list)
        # print(np_data.shape)
    # print(res)
    for key1 in res:
        for key2 in res:
            print(f"{key1} and {key2} -> {distance(res[key1]['hist'], res[key2]['hist'], 'd1')}")


class ResNetFeatureExtractor(object):
    def __init__(self):
        self.model = ResidualNet(model=RES_model)
        self.model.eval()

    def extract_feature(self, img_path) -> np.ndarray:
        print("Processing image: " + img_path)
        data: dict = get_hist(img_path, self.model)
        hist_data: np.ndarray = data['hist']
        # np_data_list = hist_data.tolist()
        # np_data = np.array(np_data_list)
        return hist_data


if __name__ == "__main__":
    main()
