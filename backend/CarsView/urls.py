from django.urls import path
from . import views
urlpatterns = [
    path('create/', views.create),
    path('dashboard/', views.show),
    path('delete/<int:identity>',views.delete)
    ]