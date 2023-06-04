from django.test import TestCase
from django.contrib.auth.models import User
import json
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient

from Ticket.models import Ticket

class TestTicketView(TestCase):
    def setUp(self) -> None:
        self.client = APIClient()
        self.user = User.objects.create()
        self.token = Token.objects.create(user=self.user)

    def test_create(self):
        data = {
          'token': self.token.key,
          'priority': 2,
          'zone': 'A',
        }

        self.client.post('/ticket/',json.dumps(data), content_type='application/json')
        self.assertEqual(Ticket.objects.count(), 1)