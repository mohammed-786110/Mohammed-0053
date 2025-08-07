
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('api/carsview/', include('CarsView.urls')),
    path('admin/', admin.site.urls),
]
