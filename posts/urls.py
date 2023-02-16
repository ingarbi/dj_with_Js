from django.urls import path
from . views import (
    post_list_and_create,
    hello_world_view
)

app_name = 'posts'

urlpatterns = [
    path('', post_list_and_create, name='main-board'),
    path('hello-world/', hello_world_view, name='hello'),
]
