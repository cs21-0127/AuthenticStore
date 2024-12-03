# serializers.py
from rest_framework import serializers
from .models import Libro

class LibroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Libro  # El modelo que estamos serializando
        fields = ['imagen', 'titulo', 'descripcion', 'autor', 'enlace']  # Los campos que queremos devolver
