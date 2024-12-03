from django.shortcuts import render
from django.http import JsonResponse
from .models import Libro

def index(request):
    return render(request, 'miapp/index.html')
    

def productos(request):
    libros = Libro.objects.all()
    return render(request, 'miapp/productos.html', {'libros': libros})

def historia(request):
    return render(request, 'miapp/historia.html')

def contactos(request):
    return render(request, 'miapp/contactos.html')

def politicas(request):
    return render(request, 'miapp/politicas.html')

def obtener_libros(request):
    libros = Libro.objects.all().values("enlace", "titulo", "descripcion", "autor", "imagen")
    return JsonResponse(list(libros), safe=False)
