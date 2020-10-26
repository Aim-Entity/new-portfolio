from django.shortcuts import render
from .models import Testimonial, Logo


def index(request):
    testimonial = Testimonial.objects.all()
    logo = Logo.objects.all()

    context = {
        "testimonials": testimonial,
        "logos": logo
    }
    return render(request, "home/index.htm", context)
