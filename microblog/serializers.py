from rest_framework import serializers
from .models import BlogPost


class BlogPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogPost
        fields = ('id', 'user', 'date', 'body')
