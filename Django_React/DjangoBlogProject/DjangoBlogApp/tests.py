import pytest
from django.utils import timezone
from models import Post, Comment
from rest_framework import status
from rest_framework.test import APITestCase
from django.urls import reverse


@pytest.mark.django_db
class TestPostModel:
    def test_create_post(self):
        post = Post.objects.create(
            title="Sample Post",
            content="This is a sample post content.",
            author="John Doe",
            published_date=timezone.now()
        )
        assert post.title == "Sample Post"
        assert post.content == "This is a sample post content."
        assert post.author == "John Doe"
        assert post.published_date is not None

    def test_post_str(self):
        post = Post.objects.create(
            title="Sample Post",
            content="This is a sample post content.",
            author="John Doe",
            published_date=timezone.now()
        )
        assert str(post) == post.title  # Assuming the __str__ method returns the title


@pytest.mark.django_db
class TestCommentModel:
    def test_create_comment(self):
        post = Post.objects.create(
            title="Sample Post",
            content="This is a sample post content.",
            author="John Doe",
            published_date=timezone.now()
        )
        comment = Comment.objects.create(
            post=post,
            author="Jane Doe",
            text="This is a sample comment.",
            created_date=timezone.now()
        )
        assert comment.post == post
        assert comment.author == "Jane Doe"
        assert comment.text == "This is a sample comment."
        assert comment.created_date is not None

    def test_comment_str(self):
        post = Post.objects.create(
            title="Sample Post",
            content="This is a sample post content.",
            author="John Doe",
            published_date=timezone.now()
        )
        comment = Comment.objects.create(
            post=post,
            author="Jane Doe",
            text="This is a sample comment.",
            created_date=timezone.now()
        )
        assert str(comment) == f"Comment by {comment.author}"  # Assuming the __str__ method returns "Comment by {author}"


class CreateNewPostTest(APITestCase):

    def setUp(self):
        self.url = reverse('create-post')  # Ensure this matches the URL name in your URLconf
        self.valid_payload = {
            'title': 'Test Post',
            'content': 'This is a test post content.',
            'author': 'John Doe',
            'published_date': timezone.now().isoformat()
        }
        self.invalid_payload = {
            'title': '',
            'content': 'This is a test post content.',
            'author': 'John Doe',
            'published_date': timezone.now().isoformat()
        }

    def test_create_post_valid_payload(self):
        response = self.client.post(self.url, self.valid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('message', response.data)
        self.assertIn('Result', response.data)
        self.assertFalse(response.data['HasError'])
        self.assertEqual(response.data['status'], 200)
        self.assertTrue(Post.objects.filter(title='Test Post').exists())

    def test_create_post_invalid_payload(self):
        response = self.client.post(self.url, self.invalid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('message', response.data)
        self.assertIn('Result', response.data)
        self.assertTrue(response.data['HasError'])
        self.assertEqual(response.data['status'], 400)
        self.assertFalse(Post.objects.filter(content='This is a test post content.').exists())
