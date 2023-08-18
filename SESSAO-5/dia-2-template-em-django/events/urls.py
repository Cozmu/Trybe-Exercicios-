from django.urls import path
from events.views import index, about, event_details


urlpatterns = [
    path("", index, name="home-page"),
    path("about", about, name="about-page"),
    path("events/<int:event_id>", event_details, name="details-page"),
#   path("/rota-comentada", função-que-será-executada, name="nome-que-identifica-a-rota")
]