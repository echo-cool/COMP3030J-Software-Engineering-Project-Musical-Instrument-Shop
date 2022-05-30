from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.shortcuts import render, get_object_or_404, redirect

# Create your views here.
from django.urls import reverse

from blog.forms import PostForm
from blog.models import Post, Comment, Category


def index(request):
    all_posts = Post.objects.all()
    category_id = request.GET.get("category", None)
    if category_id and category_id != "0":
        all_posts = all_posts.filter(category_id=category_id)
    # if len(posts) >= 3:
    #     latest3Posts = posts[:3]
    # elif len(posts) == 2:
    #     latest3Posts = posts[:2]
    # else:
    #     latest3Posts = posts[:1]

    paginator = Paginator(all_posts, 12, 0)
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

    categories = Category.objects.all()
    category_number = {}
    for category in categories:
        category_number[category] = all_posts.filter(category=category).count()

    return render(request, 'blog_templates/blogs.html', {
        'index_posts': posts[:3],
        'posts': posts,
        'part_pages': part_pages,
        'category_number': category_number
        # 'latest3Posts': latest3Posts,
    })


def view(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    posts = Post.objects.all()
    all_comments = Comment.objects.filter(post=post)
    paginator = Paginator(all_comments, 12, 0)
    page = request.GET.get("page")
    try:
        comments = paginator.page(page)
    except PageNotAnInteger:
        comments = paginator.page(1)
    except EmptyPage:
        comments = paginator.page(paginator.num_pages)

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
    if len(posts) >= 3:
        latest3Posts = posts[:3]
    elif len(posts) == 2:
        latest3Posts = posts[:2]
    else:
        latest3Posts = posts[:1]
    if request.method == 'POST':
        comment_text = request.POST.get('comment')
        comment = Comment(body=comment_text, post=post, author=request.user)
        comment.save()
        return redirect(reverse('blog:view', args=(post_id,)))
    return render(request, 'blog_templates/blog-details.html', {
        'post': post,
        'latest3Posts': latest3Posts,
        'comments': comments,
        'part_pages': part_pages
    })

@login_required
def post(request):
    if request.method == "POST":
        f = PostForm(request.POST, request.FILES)
        if f.is_valid():
            new_post = Post(
                title=f.cleaned_data['title'],
                body=f.cleaned_data['body'],
                category=f.cleaned_data['category'],
                main_image=f.cleaned_data['main_image'],
                author=request.user
            )
            new_post.save()
        else:
            return render(request, 'blog_templates/post-blogs.html', {
                'form': f
            })
        return redirect(reverse('blog:post'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        f = PostForm()
        return render(request, 'blog_templates/post-blogs.html', {
            'form': f
        })

