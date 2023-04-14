from . import views
from django.urls import path



urlpatterns = [
   path('', views.home, name='home')
#    path('test/', views.test, name='test')
]