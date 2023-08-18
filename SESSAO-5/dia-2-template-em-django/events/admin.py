from django.contrib import admin
from events.models import Event


admin.site.site_header = 'Event Manager Admin Panel'
admin.site.register(Event)