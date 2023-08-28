from django.db import models
from django.contrib.auth.models import User


# Fornecedor
class Vendor(models.Model):
    name = models.CharField(max_length=50)
    price = models.IntegerField()

    def __str__(self):
        return self.name


# Casamento
class Marriage(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    codename = models.CharField(max_length=50)
    date = models.DateField()

    def __str__(self):
        return self.codename

    def total_value(self):
        vendors = self.budget.vendors.all()
        prices = [vendor.price for vendor in vendors]
        return sum(prices)


# Orçamento
class Budget(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    vendors = models.ManyToManyField("Vendor", related_name="budgets")
    marriage = models.OneToOneField(
        Marriage, on_delete=models.CASCADE, related_name="budget"
        )

    def add_vendor(self, vendor):
        self.vendors.add(vendor)
        self.save()

    def remove_vendor(self, vendor):
        self.vendors.remove(vendor)
        self.save()

    def __str__(self):
        return f"{self.marriage.codename}'s budget"
