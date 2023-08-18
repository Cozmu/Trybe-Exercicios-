from django.urls import path
from events.views import index, about


urlpatterns = [
    path("", index, name="home-page"),
    path("about", about, name="about-page")
#   path("/rota-comentada", função-que-será-executada, name="nome-que-identifica-a-rota")
]