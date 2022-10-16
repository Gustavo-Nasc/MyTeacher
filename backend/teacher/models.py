from django.db import models

# Create your models here.


class Teacher(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    value_hour = models.DecimalField(
        max_digits=9, decimal_places=2, null=False, blank=False)
    description = models.TextField(null=False, blank=False)
    photo = models.URLField(max_length=255, null=False, blank=False)


class Classroom(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    email = models.EmailField(max_length=255, null=False, blank=False)
    teacher = models.ForeignKey(
        to=Teacher, on_delete=models.CASCADE, related_name="classrooms", null=False, blank=False)

# Para criar uma migração, basta executar o comando abaixo no terminal:
# python manage.py makemigrations
# A migração será feita para a pasta migrations do projeto

# Contudo, a migração foi somente criada, ela não vai diretamente para o Banco de Dados. Para Migrar ao Banco de Dados, basta executar:
# python manage.py migrate
