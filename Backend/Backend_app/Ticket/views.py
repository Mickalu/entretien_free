from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import permissions

from Ticket.models import Ticket
from Ticket.serializers import TicketSerializer

class TicketViewSet(viewsets.ModelViewSet):
    serializer_class = TicketSerializer
    permission_class = [permissions.IsAuthenticated]

    def get_queryset(self):
        ticket = self.request.ticket

    def list(self, request):
        user = Token.objects.get(key=request.GET.get('token')).user
        ticket_user = Ticket.objects.filter(user=user)
        ticket_serializer = TicketSerializer(ticket_user, many=True)

        return Response({'tickets': ticket_serializer.data}, status=status.HTTP_200_OK)

    def create(self, request):
        data = request.data
        user = Token.objects.get(key=request.data["token"]).user

        serializer = TicketSerializer(data=data)

        if serializer.is_valid():
            ticket = serializer.save(user=user)
            return Response({}, status=status.HTTP_201_CREATED)

        else:
            return Response({}, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request):
        data = request.data
        user = Token.objects.get(key=request.data["token"]).user

        ticket = Ticket.objects.get(id=data['id'])

        if ticket.user == user:
            serializer = TicketSerializer(ticket, data=data)

            if serializer.is_valid():
                serializer.save()
                return Response({}, status=status.HTTP_200_OK)

        return Response({}, status=status.HTTP_400_BAD_REQUEST)
