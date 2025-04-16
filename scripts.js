// para que al cargar la pagina carge el encabezado
document.addEventListener("DOMContentLoaded", function() {   
    const headerHTML = `    
        <nav>
            <div class="logo">
                <a href="/index.html">
                    <img src="/images/logo.png" alt="Café & Co. Logo" class="nav-logo">
                </a>
            </div>
            <button class="hamburger" id="hamburger">
                ☰
            </button>
            <ul class="nav-links" id="nav-links">
                <li><a class="nav-btn" href="/index.html">Inicio</a></li>
                <li><a class="nav-btn" href="/pages/menu.html">Menu</a></li>
                <li><a class="nav-btn" href="/pages/reserve.html">Reservas</a></li>
                <li><a class="nav-btn" href="/pages/gallery.html">Galeria</a></li>
                <li><a class="nav-btn" href="/index.html#about">Nosotros</a></li>
                <li><a class="nav-btn" href="/index.html#contact">Contacto</a></li>
            </ul>
        </nav>
    `;

    const footerHTML = `
        <footer>
            <div class="footer-content">
                <div class="footer-logo">
                    <img src="/images/logo.png" alt="Café & Co. Logo" class="footer-logo-img">
                </div>
                <div class="derechos-reservados">
                    &copy; 2025 Café & Co. Todos los derechos reservados.
                </div>
            </div>
            
        </footer>
    `

    // Insertar el encabezado al inicio del <body>
    const headerContainer = document.createElement("header");
    headerContainer.innerHTML = headerHTML;
    document.body.insertBefore(headerContainer, document.body.firstChild);


    const footerContainer = document.createElement("footer");
    footerContainer.innerHTML = footerHTML;
    document.body.appendChild(footerContainer, document.body.lastChild);


    // Para que el menu hamburguesa funcione
    document.getElementById("hamburger").addEventListener("click", function() {
        document.getElementById("nav-links").classList.toggle("show");
    });
});





