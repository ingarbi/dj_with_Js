from django.urls import path
from . views import (
    post_list_and_create,
)

app_name = 'posts'

urlpatterns = [
    path('', post_list_and_create, name='main-board')
]
