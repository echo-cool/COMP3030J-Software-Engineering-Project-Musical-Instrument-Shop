from django.contrib import admin
from django.contrib.auth.models import User
from django.db import models
from django.contrib.auth.models import User


class Comment(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey('Post', on_delete=models.CASCADE)

    def __str__(self):
        return self.author


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('author', 'body', 'created_on')


class Tag(models.Model):
    tag = models.CharField(max_length=60)
    post = models.ForeignKey('Post', on_delete=models.CASCADE)

    def __str__(self):
        return self.tag


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('tag',)


class Category(models.Model):
    category = models.CharField(max_length=60)
    image = models.ImageField(default='default.jpg', upload_to='uploads/blog/image/category')

    def __str__(self):
        return self.category


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('category',)


# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    main_image = models.ImageField(default='default.jpg', upload_to='uploads/blog/image/')
    created_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1, related_name='posts')

    def __str__(self):
        return self.title


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'body', 'created_on', 'last_modified', 'category')

