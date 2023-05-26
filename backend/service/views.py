from rest_framework import generics
from django.http.response import JsonResponse
from .models import Services
from .serializers import ServiceSerializer

# Create your views here.
class ServiceView(generics.ListAPIView):
    queryset = Services.objects.all()
    serializer_class = ServiceSerializer
    def post(self, request):
        data = request.data
        serializer = ServiceSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Service added Successfully", safe=False)
        return JsonResponse("Failed to add Service", safe=False)
