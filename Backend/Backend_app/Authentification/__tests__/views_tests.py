from django.test import TestCase
from django.contrib.auth.models import User
import json
from rest_framework.test import APIClient


class TestViewAuthentification(TestCase):
    def setUp(self) -> None:
        self.client = APIClient()

    def test_create_user(self):
        data = {"registerFormValues" : {'username': 'user', 'password': 'password'}}
        self.client.post('/registration_user/',json.dumps(data), content_type='application/json')
        self.assertEqual(User.objects.count(), 1)

    def test_create_user_response(self):
      data = {"registerFormValues" : {'test': 'user', 'password': 'password'}}
      response = self.client.post('/registration_user/',json.dumps(data), content_type='application/json')

      self.assertEqual(response.data, {'status': 'error'})
      self.assertEqual(response.status_code, 400)
