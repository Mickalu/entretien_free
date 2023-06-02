from rest_framework import routers

from Authentification.views import UserViewSet

app_name = "Authentification"
router = routers.DefaultRouter()
router.register('registration_user', UserViewSet, basename='User')