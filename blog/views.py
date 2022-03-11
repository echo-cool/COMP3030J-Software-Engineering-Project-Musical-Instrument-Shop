from django.shortcuts import render, get_object_or_404

# Create your views here.
from blog.models import Post


def index(request):
    posts = Post.objects.all()
    return render(request, 'blog_templates/index.html', {
        'posts': posts,
    })


def view(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    return render(request, 'blog_templates/view.html', {
        'post': post,
    })
