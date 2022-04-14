from django.contrib.auth.decorators import login_required
from django.db.models import QuerySet, Count
from django.shortcuts import render

# Create your views here.
from chat.models import MessageModel


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
