from django import forms
from .models import Post


class PostForm(forms.ModelForm):
    # title = forms.CharField(widget=forms.TextInput(
    #     attrs={'class': 'form-control'}))
    # body = forms.CharField(widget=forms.Textarea(
    #     attrs={'class': 'form-control', 'rows': 3}))

    class Meta:
        model = Post
        fields = ('title', 'body')
