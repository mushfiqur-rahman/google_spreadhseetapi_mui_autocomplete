from django.db import models

# Create your models here.
class Services(models.Model):
    q1 = models.CharField(max_length=200)
    q2 = models.CharField(max_length=200)
    q3 = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = ("Service")

    def __str__(self):
        return self.q1