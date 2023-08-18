from django.shortcuts import render
from events.models import Event

# def index(request):
#     return render(request, 'home.html')

def about(request):
	return render(request, 'about.html')

def index(request):
    context = {"company": "Trybe", "events": Event.objects.all()}
    return render(request, 'home.html', context)