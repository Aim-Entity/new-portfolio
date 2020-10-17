from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=150)
    site = models.URLField()
    code = models.URLField()
    cover = models.ImageField(upload_to="project_imgs")
    mockup = models.ImageField(upload_to="project_imgs")

    role = models.CharField(max_length=100)
    date = models.DateField()
    overview = models.CharField(max_length=400)

    def __str__(self):
        return self.title
