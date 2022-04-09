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
    'http://127.0.0.1:8000/',
    'http://127.0.0.1:8000/personal_profile/',
    "http://127.0.0.1:8000/category/1",
    "http://127.0.0.1:8000/wishlist/",
    "http://127.0.0.1:8000/cart/",
    "http://127.0.0.1:8000/home",
    "http://127.0.0.1:8000/product_details/8"

]
visited_urls = []
apiKey = "XUcrx0T41dXQRtPY0wYng6uQ"
secretKey = 'g59xudpCSZyj1XLvV5Gjl0y9WdRx4rpN'
translated = {

}
cookies = {
    'sessionid': '0roa6pevgob5lug6stcv487gm09qzbrp'
}


def getToken(apiKey, secretKey):
    # client_id 为官网获取的AK， client_secret 为官网获取的SK
    host = 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=' + apiKey + '&client_secret=' + secretKey
    response = requests.get(host)
    if response:
        print(response.json())
        return response.json()['access_token']





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


def write_to_wordlist():
    for url_tmp in base_urls:
        print(url_tmp)
        r = requests.get(url_tmp, cookies=cookies)
        res = text_from_html(r.text)
        for i in res:
            if i not in translated.keys():
                with open("wordlist.txt", "a", encoding='utf8') as f:
                    try:
                        f.write(i + "\n")
                    except Exception as e:
                        print(e)


def main():
    token = getToken(apiKey, secretKey)
    print("token:", token)
    time.sleep(1)
    for url_tmp in base_urls:
        print(url_tmp)
        r = requests.get(url_tmp, cookies=cookies)
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
    # with open("wordlist.txt", "w", encoding='utf8') as f:
    #     f.write("")
    # write_to_wordlist()
