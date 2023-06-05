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
        self.ticket = Ticket.objects.create(priority=1, user=self.user)

    def test_create(self):
        data = {
          'token': self.token.key,
          'priority': 2,
          'zone': 'A',
        }

        self.client.post('/ticket/',json.dumps(data), content_type='application/json')
        self.assertEqual(Ticket.objects.count(), 2)

    def test_list(self):
      response = self.client.get('/ticket/?token=' + self.token.key)
      self.assertEqual(len(list(response.data['tickets'])), 1)

    def test_update(self):
        ticket = Ticket.objects.create(priority=45, zone='B', user=self.user)
        data = {
            "token": self.token.key,
            "id": ticket.id,
            "priority": 3,
            "zone": 'C',
        }

        response = self.client.post('/ticket/ticket_update', json.dumps(data), content_type='application/json')

        ticket_updated = Ticket.objects.get(id=ticket.id)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(ticket_updated.priority, 3)
        self.assertEqual(ticket_updated.zone, 'C')

    def test_update_not_good_user(self):
        wrong_user = User.objects.create(username='wrong')
        token_wrong_user = Token.objects.create(user=wrong_user)

        ticket = Ticket.objects.create(priority=45, zone='B', user=self.user)

        data = {
            "token": token_wrong_user.key,
            "id": ticket.id,
            "priority": 3,
            "zone": 'C',
        }

        response = self.client.post('/ticket/ticket_update', json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 400)