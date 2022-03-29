from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.shortcuts import render, get_object_or_404, redirect

# Create your views here.
from django.urls import reverse

from blog.models import Post, Comment


def index(request):
    all_posts = Post.objects.all()
    # if len(posts) >= 3:
    #     latest3Posts = posts[:3]
    # elif len(posts) == 2:
    #     latest3Posts = posts[:2]
    # else:
    #     latest3Posts = posts[:1]

    paginator = Paginator(all_posts, 6, 0)
    page = request.GET.get("page")
    try:
        posts = paginator.page(page)
    except PageNotAnInteger:
        posts = paginator.page(1)
    except EmptyPage:
        posts = paginator.page(paginator.num_pages)

    part_num = 3
    p = int(page or 1)
    if paginator.num_pages <= part_num:
        part_pages = [i for i in range(1, paginator.num_pages + 1)]
    elif p <= int(part_num / 2) + 1:
        part_pages = [i for i in range(1, part_num + 1)]
    elif p + int((part_num - 1) / 2) >= paginator.num_pages:
        part_pages = [i for i in range(paginator.num_pages - part_num + 1, paginator.num_pages + 1)]
    else:
        part_pages = [i for i in range(p - int(part_num / 2), p + int((part_num - 1) / 2) + 1)]

    return render(request, 'blog_templates/blogs.html', {
        'posts': posts,
        'part_pages': part_pages
        # 'latest3Posts': latest3Posts,
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
    return render(request, 'blog_templates/blog-details.html', {
        'post': post,
        'latest3Posts': latest3Posts,
        'comments': comments,
    })
