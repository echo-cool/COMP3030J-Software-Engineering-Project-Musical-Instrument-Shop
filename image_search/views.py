import numpy as np
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from image_search.forms import ImageSearchForm
from image_search.ml.core import ResNetFeatureExtractor, distance
from image_search.models import ImageSearchData
from shop.models import Instrument
import warnings

warnings.filterwarnings("ignore", category=DeprecationWarning)


def index(request):
    return render(request, 'image_search/index.html')


def generate_database_index(request):
    instrument_search_data = ImageSearchData.objects.all()
    instruments = Instrument.objects.all()
    for search_item in instrument_search_data:
        search_item.delete()
    for instrument in instruments:
        instrument_search_data.create(instrument=instrument)
    instrument_search_data = ImageSearchData.objects.all()
    return HttpResponse(f"""
    Generate Database Index, Need to train.
    {instrument_search_data.count()} items in database instrument_search_data.
    """)


extractor = None


def generate_hist_data(request, item_id):
    print(f"generate_hist_data({item_id})")
    instrument_search_data = ImageSearchData.objects.get(id=item_id)
    instrument = instrument_search_data.instrument
    global extractor
    if extractor is None:
        extractor = ResNetFeatureExtractor()
    image = instrument.image
    hist_data = extractor.extract_feature(image.path)
    hist_data = hist_data.tolist()
    instrument_search_data.data = str(hist_data)
    instrument_search_data.save()
    return HttpResponse(f"""
    Generate Hist Data for {instrument.name}
    Hist Data: {hist_data}
    """)


def generate_all_hist_data(request):
    instrument_search_data = ImageSearchData.objects.all()
    global extractor
    if extractor is None:
        extractor = ResNetFeatureExtractor()
    counter = 0
    for item in instrument_search_data:
        print(f"generate_hist_data({item.id})")
        print(f"item.instrument.name: {item.instrument.name}")
        print(f"Total: {instrument_search_data.count()}, Current: {counter}")
        instrument = item.instrument
        image = instrument.image
        image_path = image.path
        hist_data = extractor.extract_feature(image_path)
        hist_data = hist_data.tolist()
        item.data = ",".join(str(x) for x in hist_data)
        item.save()
        counter += 1
        print(f"Generate Hist Data for {instrument.name}")
    instrument_search_data = ImageSearchData.objects.all()
    return HttpResponse(f"""
    Generate Hist Data for all items<br>
    There are {instrument_search_data.count()} items in database instrument_search_data.
    """)


def image_search(request):
    form = ImageSearchForm()
    if request.method == 'POST':
        form = ImageSearchForm(request.POST, request.FILES)
        if form.is_valid():
            res = {}
            image = form.cleaned_data['image']
            print(f"image: {image}")
            # save image
            with open("content/media/uploads/tmp/tmp.jpg", 'wb') as f:
                f.write(image.read())
            global extractor
            if extractor is None:
                extractor = ResNetFeatureExtractor()
            hist_data = extractor.extract_feature("content/media/uploads/tmp/tmp.jpg")
            print(hist_data)
            all_image_search_data = ImageSearchData.objects.all()
            for item in all_image_search_data:
                item_hist_data = item.data
                item_hist_data = item_hist_data.split(",")
                item_hist_data = [float(x) for x in item_hist_data]
                item_hist_data = np.array(item_hist_data)
                res[item.id] = distance(hist_data, item_hist_data)

            sorted_res = sorted(res.items(), key=lambda x: x[1])
            print(sorted_res)
            instruments = []
            for id in sorted_res:
                instruments.append(ImageSearchData.objects.get(id=id[0]).instrument)
            print(instruments)
            return render(request, 'image_search/index.html', {'form': form, 'instruments': instruments})
    return render(request, 'image_search/index.html', {
        'form': form,
    })
