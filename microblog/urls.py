from django.conf.urls import url, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'posts', views.BlogPostViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^$', views.index, name='index')
]
