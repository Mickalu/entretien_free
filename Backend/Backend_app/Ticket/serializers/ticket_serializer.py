from rest_framework import serializers
from rest_framework.authtoken.models import Token

from Ticket.models import Ticket

class TicketSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ticket
        fields = ('priority', 'zone')