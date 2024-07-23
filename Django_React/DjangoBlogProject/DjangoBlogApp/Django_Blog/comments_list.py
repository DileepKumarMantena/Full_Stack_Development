from rest_framework import generics
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from ..models import Post, Comment
from ..serializers import CommentSerializer

class CommentListView(generics.GenericAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        try:
            post_id = self.kwargs['post_id']
            post = Post.objects.get(id=post_id)
            return Comment.objects.filter(post=post)
        except Post.DoesNotExist:
            raise NotFound('Post not found')

    def get(self, request, *args, **kwargs):
        comments = self.get_queryset()
        serializer = self.get_serializer(comments, many=True)
        return Response(serializer.data)
