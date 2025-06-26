window.addEventListener("load", () => {
    const bienvenida = document.getElementById("bienvenida");

    // Esperar 3 segundos y luego iniciar el desvanecimiento
    setTimeout(() => {
        bienvenida.style.opacity = "0";

        // Después de que termine la transición (2s), lo ocultamos
        setTimeout(() => {
            bienvenida.style.display = "none";
        }, 2000);
    }, 3000);
});

