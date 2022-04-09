# -*- coding: utf-8 -*-
"""
@Time : 4/9/2022 7:13 PM
@Auth : Wang Yuyang
@File : trans.py.py
@IDE  : PyCharm
"""
import time

import requests
from bs4 import BeautifulSoup
from bs4.element import Comment
import random
import json

token = '【调用鉴权接口获取的token】'
url = 'https://aip.baidubce.com/rpc/2.0/mt/texttrans/v1?access_token=' + token
base_urls = [
    'http://127.0.0.1:8000/'
]
visited_urls = []
apiKey = "XUcrx0T41dXQRtPY0wYng6uQ"
secretKey = 'g59xudpCSZyj1XLvV5Gjl0y9WdRx4rpN'
translated = {

}


def getToken(apiKey, secretKey):
    # client_id 为官网获取的AK， client_secret 为官网获取的SK
    host = 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=' + apiKey + '&client_secret=' + secretKey
    response = requests.get(host)
    if response:
        print(response.json())
        return response.json()['access_token']


token = getToken(apiKey, secretKey)
print("token:", token)
time.sleep(1)


def get_translation(text, token):
    url = 'https://aip.baidubce.com/rpc/2.0/mt/texttrans/v1?access_token=' + token

    q = text  # example: hello
    from_lang = 'en'  # example: en
    to_lang = 'zh'  # example: zh
    term_ids = ''  # 术语库id，多个逗号隔开

    # Build request
    headers = {'Content-Type': 'application/json'}
    payload = {'q': q, 'from': from_lang, 'to': to_lang, 'termIds': term_ids}

    # Send request
    r = requests.post(url, params=payload, headers=headers)
    result = r.json()

    # Show response
    # print(json.dumps(result, indent=4, ensure_ascii=False))
    return result['result']['trans_result'][0]['dst']


def tag_visible(element):
    if element.parent.name in ['style', 'script', 'head', 'title', 'meta', '[document]']:
        return False
    if isinstance(element, Comment):
        return False
    return True


def text_from_html(body):
    soup = BeautifulSoup(body, 'html.parser')
    texts = soup.findAll(text=True)
    visible_texts = filter(tag_visible, texts)
    return [t.strip().replace("\n", "").replace("  ", "") for t in visible_texts if t.strip().replace("\n", "") != ""]


def main():
    for url_tmp in base_urls:
        print(url_tmp)
        r = requests.get(url_tmp)
        res = text_from_html(r.text)
        for i in res:
            if i not in translated.keys():
                # time.sleep(0.05)
                try:
                    translated[i] = get_translation(i, token)
                except:
                    print("error")
                    continue
                print(i, translated[i])
                with open("django-tmp.po", "a") as f:
                    try:
                        f.write("msgid \"" + i + "\"\n")
                        f.write("msgstr \"" + translated[i] + "\"\n")
                        f.write("\n")
                    except Exception as e:
                        print(e)


if __name__ == '__main__':
    main()
