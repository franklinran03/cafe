document.querySelector("form").addEventListener("submit", function (e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("contact-message").value.trim();
    const msgContent = document.getElementById("msg-content");
    const msgTitle = document.getElementById("msg-title");
    const message = document.getElementById("message");

    if (!name || !email || !msg) {
        msgContent.classList.add("show");
        msgTitle.textContent = "Error al enviar el mensaje";
        message.innerHTML = "Por favor, completa todos los campos.";
        message.classList.add("error");
        message.classList.remove("success");
        setTimeout(() => {
            msgContent.classList.remove("show");
        }, 3000);
    } else {
        msgContent.classList.add("show");
        msgTitle.textContent = "Mensaje enviado con éxito";
        message.innerHTML = `Tu mensaje ha sido enviado.<br>
                            Nos pondremos en contacto contigo pronto.`;
        message.classList.add("success");
        message.classList.remove("error");
    }
});



