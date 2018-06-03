from django.contrib.auth.models import User
from rest_framework import serializers
from .models import BlogPost


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name')


class BlogPostSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(many=False)

    class Meta:
        model = BlogPost
        fields = ('id', 'user', 'date', 'body')
