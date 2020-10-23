from django.shortcuts import render
from .models import Testimonial


def index(request):
    testimonial = Testimonial.objects.all()

    context = {
        "testimonials": testimonial
    }
    return render(request, "home/index.htm", context)
