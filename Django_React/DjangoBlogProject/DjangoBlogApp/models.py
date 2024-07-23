from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    author = models.CharField(max_length=255)
    published_date = models.DateTimeField()
    objects = models.Manager()

    class Meta:
        db_table = "Post_Table"

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    author = models.CharField(max_length=255)
    text = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    objects = models.Manager()

    class Meta:
        db_table = "Comment_Table"
