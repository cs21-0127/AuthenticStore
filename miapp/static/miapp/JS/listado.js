let currentPage = 1;
const itemsPerPage = 6;
const libros = [...document.querySelectorAll('#product-table tbody tr')]; // Obtener todos los libros de la tabla
const totalItems = libros.length; // Total de libros
const totalPages = Math.ceil(totalItems / itemsPerPage); // Calcular total de páginas

function updateTable() {
    // Calcular el rango de libros a mostrar
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Mostrar solo los libros de la página actual
    libros.forEach((libro, index) => {
        libro.style.display = (index >= start && index < end) ? '' : 'none';
    });

    // Actualizar el contador
    const counterText = `Mostrando ${start + 1}-${Math.min(end, totalItems)} de ${totalItems} libros`;
    document.getElementById('product-counter').textContent = counterText;
}

// Manejar el evento de clic en el botón "Anterior"
document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updateTable();
    }
});

// Manejar el evento de clic en el botón "Siguiente"
document.getElementById('next-page').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updateTable();
    }
});

// Inicializar la tabla
updateTable();