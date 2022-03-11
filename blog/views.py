from django.shortcuts import render, get_object_or_404

# Create your views here.
from blog.models import Post


def index(request):
    posts = Post.objects.all()
    if len(posts) >= 3:
        latest3Posts = posts[:3]
    elif len(posts) == 2:
        latest3Posts = posts[:2]
    else:
        latest3Posts = posts[:1]

    return render(request, 'blog_templates/index.html', {
        'posts': posts,
        'latest3Posts': latest3Posts,
    })


def view(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    posts = Post.objects.all()
    if len(posts) >= 3:
        latest3Posts = posts[:3]
    elif len(posts) == 2:
        latest3Posts = posts[:2]
    else:
        latest3Posts = posts[:1]

    return render(request, 'blog_templates/view.html', {
        'post': post,
        'latest3Posts': latest3Posts,
    })
