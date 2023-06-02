from rest_framework import viewsets, status
from rest_framework.response import Response
from django.contrib.auth.models import User

from Authentification.serializers.user_serializer import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    permission_class = []

    def get_queryset(self) -> User:
        user = self.request.user

    def create(self, request):
        serializer = UserSerializer(data=request.data["registerFormValues"])

        if serializer.is_valid():
            serializer.save()
            return Response({'status': 'created'}, status=status.HTTP_201_CREATED)

        else:
            return Response({'status': 'error'}, status=status.HTTP_400_BAD_REQUEST)
