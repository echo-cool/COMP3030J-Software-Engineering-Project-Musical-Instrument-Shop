import json
import time

from asgiref.sync import sync_to_async
from django.contrib.auth.decorators import login_required
from django.db.models import QuerySet, Count
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import csrf_exempt

from chat.models import MessageModel
import requests

from shop.models import Order


@login_required
def index(request):
    # query = MessageModel.objects.all().query
    # query.group_by = ['user']
    message_list = MessageModel.objects.values('user').annotate(total=Count('id'))
    print([item['user'] for item in message_list])
    return render(request, 'chat/index.html')


@login_required
def index_new(request, to=-1):
    # query = MessageModel.objects.all().query
    # query.group_by = ['user']
    message_list = MessageModel.objects.values('user').annotate(total=Count('id'))
    print([item['user'] for item in message_list])
    return render(request, 'chat/index_new.html', {
        'to': to
    })


def get_order_list(request) -> JsonResponse:
    user = request.user
    order_list = user.orders.all()
    if len(order_list) > 3:
        order_list = order_list[:3]
    data = []
    for order in order_list:
        data.append({
            "recipient_id": request.user.username,
            "text": "Order ID: " + str(order.id)
        })
        data.append({
            "recipient_id": request.user.username,
            "text": "Order created_at: " + str(order.created_at)
        })
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})


action_list = {
    "GET_ORDER_LIST": get_order_list,
}


@csrf_exempt
def _rasa_chat(request):
    if request.method == "POST":
        message = request.POST.get('message')
        message: str = str(message)
        print(message)
        url = 'http://comp3030j_software_engineering_project_musical_instrument_shop_rasa:5005/webhooks/rest/webhook'
        if request.user.is_authenticated:
            data = {
                'sender': request.user.username,
                'message': message
            }
        else:
            data = {
                'sender': 'Anonymous_' + request.get_host(),
                'message': message
            }
        print(data)
        try:
            response = requests.post(url, json=data, timeout=2)
            print(response.text)
            print(response.json())
            action = response.json()[0]['text']
            print(action)
            time.sleep(0.8)
            if action in action_list.keys():
                return action_list[action](request)
            return JsonResponse(response.json(), safe=False, json_dumps_params={'ensure_ascii': False})
        except Exception as e:
            print(e)
            print("RASA NOT STARTED")
            data = [{
                "recipient_id": request.user.username,
                "text": "RASA NOT STARTED!"
            }]
            return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})
    return "Please send a POST request"


rasa_chat = sync_to_async(_rasa_chat)


@csrf_exempt
def ai_chat_test(request):
    return render(request, 'chat/ai_chat_test.html')


@csrf_exempt
@login_required
def ai_chat_test2(request):
    return render(request, 'chat/ai_chat_test_2.html')
