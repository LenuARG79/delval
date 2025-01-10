function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');

    if (menu.style.left === '0px') {
        menu.style.left = '-100%';
        hamburger.classList.remove('active');
    } else {
        menu.style.left = '0';
        hamburger.classList.add('active');
    }
}

function closeMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');

    menu.style.left = '-100%';
    hamburger.classList.remove('active');
}

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault(); // Evita la redirección inmediata

        const targetURL = this.href; // Obtén la URL del enlace
        
        // Espera que la animación del subrayado se complete (ajusta el tiempo si es necesario)
        setTimeout(() => {
            window.location.href = targetURL; // Redirige a la página deseada
        }, 500); // Duración de la animación del subrayado
    });
});

document.querySelector('.whatsapp-tab').addEventListener('click', function () {
    alert('Abriendo WhatsApp...'); // Aquí puedes integrar un mensaje de alerta si lo deseas.
  
    // Redirige a WhatsApp con el mensaje predefinido
    const phoneNumber = '+5491136013910'; // Tu número de WhatsApp
    const message = encodeURIComponent('Gracias por comunicarte con Del Val Muebles. En breve serás atendido.');
    
    // Redirigir al enlace de WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank'); // Redirige al número de WhatsApp con el mensaje.
  });

