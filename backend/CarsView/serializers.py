from rest_framework.serializers import ModelSerializer

from .models import Cars

class StudentSerializer(ModelSerializer):
    class Meta:
        model = Cars
        fields = '__all__' 