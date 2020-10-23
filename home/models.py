from django.db import models


class Testimonial(models.Model):
    image = models.ImageField(upload_to="testimonials")
    name = models.CharField(max_length=75)
    message = models.CharField(max_length=450)

    def __str__(self):
        return self.name
