from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Cars
from .serializers import StudentSerializer

@api_view(['GET'])
def show(request):
    cars=Cars.objects.all()
    serializer=StudentSerializer(cars, many=True)   
    return Response(serializer.data) #getting data to show in frontend

@api_view(['POST'])
def create(request):
    serializer=StudentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)  #putting data to show

@api_view(['delete'])
def delete(request,identity):
    Cars.objects.filter(id=identity).delete()
    return Response(
        {"status":"success"}
        )
        
        
    
