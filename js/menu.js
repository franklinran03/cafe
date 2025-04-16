// Trae el menu.json y lo carga en el html
fetch('menu.json')
  .then(response => response.json())
  .then(data => {

    const contenedorMenu = document.getElementById("list-menu");

    data.menu.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.id = "card";
      // Crea la tarjeta con la información del producto 
      card.innerHTML = `
            <div class="card-header" id="card-header">
                <img src="${item.imagen}" alt="item" class="card-img">
            </div>
            <div class="card-body" id="card-body">
                <h2 class="card-tittle">${item.nombre}</h2>
                <span>Categoria: ${item.categoria}</span>
                <hr>
                <p>
                    ${item.descripcion}
                </p>
                <div class="card-footer">
                    <span>$${item.precio} COP</span>
                    <button class="btn btn-add-cart" id="btn" onclick="agregarCarrito('${item.nombre}', ${item.precio})">
                        Agregar Al Carrito 
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-plus-circle-fill add-cart" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                        </svg>
                    </button>
                </div>
            </div>
      `;
      contenedorMenu.appendChild(card);
    });
  })
  .catch(error => console.error("Error al cargar el menú:", error));




// Funcion para mostrar y ocultar carrito de compras
function showCart() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.classList.toggle("show");
}

const closeModal = document.getElementById("close");
closeModal.addEventListener("click", function() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.classList.remove("show");

    const confirm = document.getElementById("order-confirmation");
    confirm.classList.remove("show");
}); 



// Funcion añadir al carrito
let carrito = [];

function agregarCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
    
    const msg = document.getElementById("msg");
    msg.classList.toggle("show");

    setTimeout(() => {
        msg.classList.remove("show");
    }, 3000);
}

function actualizarCarrito() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = ""; 

    let total = 0;

    carrito.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <p>${item.nombre} - $${item.precio}</p>
            <button class="btn btn-remove" onclick="eliminarItem('${item.nombre}')">&times;</button>
        `;
        cartList.appendChild(cartItem);
        total += item.precio;
    });

    const totalElement = document.getElementById("total-price");
    totalElement.textContent = `$${total}`;
}

function eliminarItem(nombre) {
    carrito = carrito.filter(item => item.nombre !== nombre);
    actualizarCarrito();
}


function limpiarCarrito() {
    carrito = [];
    actualizarCarrito();
}


function comprar() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    const totalElement = document.getElementById("total-price");
    const total = document.getElementById("price");
    total.textContent = totalElement.textContent;

    const ahora = new Date();
    const fechaLimite = new Date(ahora.getTime() + 30 * 60 * 1000);
    const fechaLim = document.getElementById("fechaLimite");
    fechaLim.textContent = `${fechaLimite.toLocaleTimeString()}`; // Convertir a timestamp para mostrarlo en el HTML

   const numeroAleatorio = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    const orderID = document.getElementById("orderID");
    orderID.textContent = `${numeroAleatorio}`;



    const confirm = document.getElementById("order-confirmation");
    confirm.classList.toggle("show");


    
    limpiarCarrito();
}







