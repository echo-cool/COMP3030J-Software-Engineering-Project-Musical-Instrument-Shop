from asgiref.sync import sync_to_async
from django.contrib.auth.decorators import login_required
from django.db.models import QuerySet, Count
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
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


@login_required
def _rasa_chat(request, message):
    message: str = str(message)
    print(message)
    url = 'http://localhost:18888/webhooks/rest/webhook'
    data = {
        'sender': request.user.username,
        'message': message
    }
    response = requests.post(url, json=data)
    print(response.json())
    return HttpResponse(response.json())


rasa_chat = sync_to_async(_rasa_chat)
