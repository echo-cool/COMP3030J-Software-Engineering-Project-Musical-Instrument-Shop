from django.shortcuts import render, get_object_or_404, redirect

# Create your views here.
from django.urls import reverse

from blog.models import Post, Comment


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
    comments = Comment.objects.filter(post=post)
    if len(posts) >= 3:
        latest3Posts = posts[:3]
    elif len(posts) == 2:
        latest3Posts = posts[:2]
    else:
        latest3Posts = posts[:1]
    if request.method == 'POST':
        comment_text = request.POST.get('comments')
        comment = Comment(body=comment_text, post=post, author=request.user)
        comment.save()
        return redirect(reverse('blog:view', args=(post_id,)))
    return render(request, 'blog_templates/view.html', {
        'post': post,
        'latest3Posts': latest3Posts,
        'comments': comments,
    })
