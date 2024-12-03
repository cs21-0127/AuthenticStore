// Variables para la paginación y los productos filtrados
let currentPage = 1;
const itemsPerPage = 9;
let filteredProductos = [];

// Función para cargar datos desde la API de Django
async function cargarProductos() {
  try {
    const response = await fetch("/api/libros/"); // Ruta de la API que retorna los libros
    const data = await response.json();
    filteredProductos = data; // Almacena los libros cargados
    renderProductos(); // Renderiza los libros como cards
  } catch (error) {
    console.error("Error al cargar los libros:", error);
  }
}

// Renderizar los libros en formato de tarjetas (cards)
function renderProductos() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productosPagina = filteredProductos.slice(startIndex, endIndex);

  const productGrid = document.getElementById("product-grid");
  productGrid.innerHTML = "";

  productosPagina.forEach((producto) => {
    const productCard = `
      <div class="col">
        <div class="card h-100 text-center">
          <img src="${producto.imagen.url}" class="card-img-top img-fluid mx-auto" alt="Imagen de ${producto.titulo}" style="width: 200px; height: auto;">
          <div class="card-body">
            <h5 class="card-title fw-bold">${producto.titulo}</h5>
            <a href="${producto.enlace}" class="btn btn_p mt-3" target="_blank">Descargar</a>
          </div>
        </div>
      </div>`;
    productGrid.innerHTML += productCard;
  });

  actualizarContador(startIndex, endIndex);
}

// Actualizar contador de productos y estado de paginación
function actualizarContador(startIndex, endIndex) {
  const productCounter = document.getElementById("product-counter");
  productCounter.textContent = `Mostrando ${startIndex + 1}-${Math.min(endIndex, filteredProductos.length)} de ${filteredProductos.length} libros`;

  document.getElementById("prev-page").parentElement.classList.toggle("disabled", currentPage === 1);
  document.getElementById("next-page").parentElement.classList.toggle("disabled", endIndex >= filteredProductos.length);
}

// Manejo de paginación
document.getElementById("prev-page").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderProductos();
  }
});

document.getElementById("next-page").addEventListener("click", () => {
  if (currentPage * itemsPerPage < filteredProductos.length) {
    currentPage++;
    renderProductos();
  }
});

// Cargar los libros al cargar la página
cargarProductos();