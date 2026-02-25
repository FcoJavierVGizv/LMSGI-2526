const tareas = document.getElementById('tareas');
const button = document.getElementById('agregar');
const entrada = document.getElementById('entrada');

button.addEventListener('click', agregar);

function agregar() {
    const ptarea = document.createElement("p");
    const node = document.createTextNode(entrada.value);
    ptarea.appendChild(node);

    tareas.appendChild(ptarea);

    const enlace = document.createElement("a");
    const node2 = document.createTextNode(" Enlace a...");
    enlace.appendChild(node2);
    enlace.setAttribute("href", "https://www.ieszaidinvergeles.org");

    ptarea.appendChild(enlace);

    const imagen = document.createElement("img");
    tareas.appendChild(imagen);
    imagen.setAttribute("src", "https://images.ctfassets.net/denf86kkcx7r/2KGI03JSLCerDS7RD20OZP/b85317da255ed7119430759308414a49/perros_de_pastor_y_boyeros_-_1.jpg")
}