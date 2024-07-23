from django.shortcuts import render

# Create your views here.

#Post  Crud Views

from .Django_Blog.create_new_post import CreateNewPost
from .Django_Blog.get_all_posts_list import GetAllPostListApi
from .Django_Blog.get_posts_details_by_id import GetPostsById
from .Django_Blog.update_post_details import UpdatePostDetailsById
from .Django_Blog.delete_post_details import DeletePostDetails
from .Django_Blog.create_comments import CommentCreateView
from .Django_Blog.comments_list import CommentListView


CreateNewPost()
GetAllPostListApi()
GetPostsById()
UpdatePostDetailsById()
DeletePostDetails()
CommentCreateView()
CommentListView()
