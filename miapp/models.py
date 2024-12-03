from django.db import models

class Libro(models.Model):
    titulo = models.CharField(max_length=200)
    autor = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=300)
    publicacion = models.DateField()
    enlace = models.CharField(max_length=500)
    imagen = models.ImageField(upload_to='libros/', blank=True, null=True)  # Campo para imágenes

    def __str__(self):
        return self.titulo

