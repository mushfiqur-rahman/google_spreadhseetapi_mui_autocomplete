from django.urls import path
from .views import ServiceView


urlpatterns = [
    path('api/services/', ServiceView.as_view()),
]