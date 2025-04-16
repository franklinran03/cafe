document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');

    const images = [
        "/images/muffin-arandanos.png","/images/pan-chocolate.png","/images/roll-canela.png","/images/tarta-limon.png","/images/teChaiLatte.png","/images/tiramisu.png","/images/tostada-francesa.png","/images/affogato.png","/images/americano.png","/images/brownie.png","/images/cafe1.png","/images/cafe2.png","/images/cafe3.png","/images/cappuccino.png","/images/cheesecake-fruta.png","/images/cheesecake-rojo.png","/images/coffee1.png","/images/coffee2.png","/images/cold-brew.png","/images/croissant.png","/images/customers1.png","/images/customers2.png","/images/customers3.png","/images/customers4.png","/images/desserts.png","/images/desserts2.png","/images/desserts3.png","/images/desserts4.png","/images/employ.png","/images/espresso.png","/images/focaccia-tomate.png","/images/galleta-avena.png","/images/latte.png","/images/menu.png"
    ];


    for (let i = 0; i < images.length; i++) {
        const image = document.createElement("img");
        image.src = images[i];
        image.alt = images[i].split("/").pop(); 
        image.classList.add("gallery-img");
        gallery.appendChild(image);
    };
});





