from django.db import models


class Cv(models.Model):
    resume = models.FileField(upload_to="resume")
