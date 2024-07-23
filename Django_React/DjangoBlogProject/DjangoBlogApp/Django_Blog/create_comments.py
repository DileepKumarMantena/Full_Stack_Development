from rest_framework import generics
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from ..models import Post, Comment
from ..serializers import CommentSerializer

class CommentCreateView(generics.GenericAPIView):
    serializer_class = CommentSerializer

    def post(self, request, *args, **kwargs):
        try:
            post_id = self.kwargs['post_id']
            post = Post.objects.get(id=post_id)
            serializer = self.get_serializer(data=request.data)
            if serializer.is_valid():
                serializer.save(post=post)
                return Response({
                    'message': f'Comment successfully created for post with ID {post.id}',
                    'Result': serializer.data,
                    'HasError': False,
                    'status': 200
                })
            return Response({
                'message': 'Failed to create comment',
                'Result': serializer.errors,
                'HasError': True,
                'status': 400
            })
        except Post.DoesNotExist:
            return Response({
                'message': f'Post with ID {self.kwargs["post_id"]} not found',
                'Result': [],
                'HasError': True,
                'status': 404
            })
