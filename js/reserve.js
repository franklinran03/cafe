document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value.trim();
    const time = document.getElementById("time").value.trim();
    const chairs = document.getElementById("chairs").value.trim();
  
    const msgContent = document.getElementById("msg-content");
    const msgTitle = document.getElementById("msg-title");
    const message = document.getElementById("message");
  
    if (!name || !email || !phone || !date || !time || !chairs) {
      msgContent.classList.add("show");
      msgTitle.textContent = "Error al hacer la reserva";
      message.innerHTML = "Por favor, completa todos los campos.";
      message.classList.add("error");
      message.classList.remove("success");
      setTimeout(() => {
        msgContent.classList.remove("show");
      }, 3000);

    } else {
      msgContent.classList.add("show");
      msgTitle.textContent = "Reserva realizada con éxito";
      message.innerHTML = `Tu reserva para el día <strong>${date}</strong> a las <strong>${time}</strong> ha sido registrada.<br>
                           No olvides de llegar 10 minutos antes.<br>      
                           <a href="/index.html" class="btn-home">Volver al inicio</a>`;
      message.classList.add("success");
      message.classList.remove("error");
    }
  
});


  