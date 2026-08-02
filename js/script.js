console.log("JS conectado");

//Mensaje de Bienvenida
alert("¡Bienvenido a Miau...Dom!\nEsta pagina Lanza datos cueriosos sobre gatos\nconsumiendo una API publica de gatos (Cat Fact)");

//Extraer el h1: 
let mostrar = document.querySelector("h2");
let boton = document.querySelector("#btn");
mostrar.textContent = ""; //solo para declarar

const URL = "https://catfact.ninja/fact"; // Asegúrate de tener la URL definida

async function obtenerDato() {
    try {
        const respuesta = await fetch(URL);
        
        // Es mejor revisar si hay error ANTES de intentar convertir a .json()
        if (!respuesta.ok) {
            console.log("Error al obtener dato");
            return "ERROR";
        }
        
        const datos = await respuesta.json();
        return datos.fact;
        
    } catch (error) {
        console.log("Error al obtener el dato:", error);
        return "ERROR";
    }
}

async function traductor(texto) {
    try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=en|es`;
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
             console.log("Error en la API de traducción");
             return "ERROR";
        }

        const data = await respuesta.json();

        return data.responseData.translatedText; 
    } catch (error) {
        console.log("Error al traducir:", error);
        return "ERROR";
    }
}

// Evento del botón
boton.addEventListener("click", async function () {
    mostrar.textContent = "Buscando y traduciendo... miau..."; //esto era opicional xd

    //Obtener el dato en inglés
    var datoEN = await obtenerDato();
    
    // Si hubo error desde el principio, detenemos la ejecución
    if (datoEN === "ERROR") {
        mostrar.textContent = "Hubo un problema obteniendo el dato del gato.";
        return; 
    }

    //Traducir el dato
    var datoES = await traductor(datoEN);

    //Mostrar el resultado final en la pantalla
    if (datoES !== "ERROR") {
        mostrar.textContent = datoES;
    } else {
        mostrar.textContent = "No se pudo traducir el texto.";
    }
});