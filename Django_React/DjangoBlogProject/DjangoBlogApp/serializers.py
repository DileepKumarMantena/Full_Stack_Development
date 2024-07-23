from rest_framework import serializers
from .models import Post,Comment

class CreatePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"

    def create(self, validated_data):
        post = Post.objects.create(
            title=validated_data['title'],
            content=validated_data['content'],
            author=validated_data['author'],
            published_date=validated_data['published_date']
        )
        post.save()
        return post

class RetrievePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'post', 'author', 'text', 'created_date']
        read_only_fields = ['id', 'post', 'created_date']