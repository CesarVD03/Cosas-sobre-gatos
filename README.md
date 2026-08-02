# 🐱 Traductor de Datos Curiosos de Gatos

Este es un proyecto interactivo desarrollado en JavaScript puro (Vanilla JS) que obtiene datos curiosos aleatorios sobre gatos y los traduce automáticamente al español.

## 🚀 Características

*   **Generación Aleatoria:** Consumo de la API pública de [Cat Facts](https://catfact.ninja/) para obtener información en inglés.
*   **Traducción Inmediata:** Integración con la API de [MyMemory](https://mymemory.translated.net/) para traducir el texto al español en tiempo real.
*   **Javascript Moderno:** Implementación de peticiones asíncronas utilizando `async / await` y la API `fetch`.
*   **CORS-Friendly:** Configurado para poder ejecutarse directamente desde el navegador sin bloqueos de políticas CORS.

## 🛠️ Tecnologías Utilizadas

*   HTML5
*   JavaScript (ES6+)

## 📦 Instalación y Uso

Dado que el proyecto utiliza Vanilla JS y una API que permite peticiones de origen cruzado (CORS), no necesitas instalar dependencias ni levantar un servidor local complejo.

1.  Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/CesarVD03/nombre-de-tu-repositorio.git
    ```
2.  Navega a la carpeta del proyecto.
3.  Abre el archivo `index.html` haciendo doble clic sobre él (se abrirá en tu navegador web predeterminado).
4.  Haz clic en el botón de la interfaz para buscar y traducir un nuevo dato.

## 💻 Estructura del Código Principal

El proyecto se basa en dos funciones asíncronas clave:
*   `obtenerDato()`: Se encarga de hacer el fetch a la API de gatos y manejar posibles errores de conexión.
*   `traductor(texto)`: Recibe el texto en inglés, codifica los caracteres especiales con `encodeURIComponent()` y consulta la API de MyMemory mediante un método `GET`.

## 👨‍💻 Autor

**Cesar Jesús Villagomez Donjuán**
*   GitHub: [@CesarVD03](https://github.com/CesarVD03)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](https://opensource.org/licenses/MIT).
