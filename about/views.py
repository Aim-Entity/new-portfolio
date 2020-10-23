from django.shortcuts import render
from .models import Cv


def about(request):
    resume = Cv.objects.first()
    context = {
        "resume": resume
    }
    return render(request, "about/about.htm", context)
