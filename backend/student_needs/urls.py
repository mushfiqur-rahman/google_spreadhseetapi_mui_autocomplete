from django.urls import path
from .views import QuestionOne, QuestionTwo, QuestionThree


urlpatterns = [
    path('q1/', QuestionOne.as_view()),
    path('q2/', QuestionTwo.as_view()),
    path('q3/', QuestionThree.as_view()),
]