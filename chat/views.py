import json

from asgiref.sync import sync_to_async
from django.contrib.auth.decorators import login_required
from django.db.models import QuerySet, Count
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import csrf_exempt

from chat.models import MessageModel
import requests


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


@csrf_exempt
def rasa_chat(request):
    if request.method == "POST":
        message = request.POST.get('message')
        message: str = str(message)
        print(message)
        url = 'http://127.0.0.1:18888/webhooks/rest/webhook'
        data = {
            'sender': request.user.username,
            'message': message
        }
        print(data)
        try:
            response = requests.post(url, json=data)
            print(response.text)
            print(response.json())
            return JsonResponse(response.json(), safe=False, json_dumps_params={'ensure_ascii': False})
        except Exception as e:
            print("RASA NOT STARTED")
            data = [{
                "recipient_id": request.user.username,
                "text": "RASA NOT STARTED!"
            }]
            return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})
    return "Please send a POST request"


# rasa_chat = sync_to_async(_rasa_chat)

@csrf_exempt
def ai_chat_test(request):
    return render(request, 'chat/ai_chat_test.html')


@csrf_exempt
@login_required
def ai_chat_test2(request):
    return render(request, 'chat/ai_chat_test_2.html')
