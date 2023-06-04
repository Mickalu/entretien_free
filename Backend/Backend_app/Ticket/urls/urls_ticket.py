from django.urls import path
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns

from Ticket.views import TicketViewSet

app_name = 'Ticket'
router = routers.DefaultRouter()
router.register('ticket', TicketViewSet, basename='Ticket')

ticket_list = TicketViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

ticket_update = TicketViewSet.as_view({
    'post': 'update',
})

urlpatterns = format_suffix_patterns([
    path('ticket_list', ticket_list, name='ticket'),
    path('ticket_update', ticket_update, name='ticket_update'),
])

#urlpatterns = router.urls
# urlpatterns = format_suffix_patterns(urlpatterns, )