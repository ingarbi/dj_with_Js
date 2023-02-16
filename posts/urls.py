from django.urls import path
from . views import (
    post_list_and_create,
    load_post_data_view,
    like_unlike_post,
    hello_world_view,
)

app_name = 'posts'

urlpatterns = [
    path('', post_list_and_create, name='main-board'),
    path('like-unlike/', like_unlike_post, name='like-unlike'),
    path('data/<int:num_posts>/', load_post_data_view, name='posts-data'),
    path('hello-world/', hello_world_view, name='hello'),
]
