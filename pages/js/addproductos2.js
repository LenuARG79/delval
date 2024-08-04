const listaDeProductos = document.getElementById (`listaDeProductos`);

document.addEventListener('DOMContentLoaded', function() {
    const listaDeProductos = document.getElementById('listaDeProductos');

class Productos {
    constructor (id, nombre, descripcion, img) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
    }
}
let productosEspejosDos = [
        {id: "E13", 
            nombre: "Espejo 13", 
            descripcion: "Espejo de diseño con melamina", 
            img: "/img/espejo13.jpg"
        },
        { id: "E14",
            nombre: "Espejo 14",
            descripcion: "Espejo de diseño animal print",
            img: "/img/espejo14.jpg"
        },
        {id: "E15", 
            nombre: "Espejo 15", 
            descripcion: "Espejo de diseño con moldura", 
            img: "/img/espejo15.jpg"
        },
        { id: "E16",
            nombre: "Espejo 16",
            descripcion: "Espejo de diseño con melamina",
            img: "/img/espejo16.jpg"
        },
        {id: "E17", 
            nombre: "Espejo 17", 
            descripcion: "Espejo de diseño con melamina", 
            img: "/img/espejo17.jpg"
        },
        { id: "E18",
            nombre: "Espejo 18",
            descripcion: "Espejo de diseño animal print",
            img: "/img/espejo18.jpg"
        },
        {id: "E19", 
            nombre: "Espejo 19", 
            descripcion: "Espejo de diseño con moldura", 
            img: "/img/espejo19.jpg"
        },
        { id: "E20",
            nombre: "Espejo 20",
            descripcion: "Espejo de diseño con melamina",
            img: "/img/espejo20.jpg"
        },
        {id: "E21", 
            nombre: "Espejo 21", 
            descripcion: "Espejo de diseño con melamina", 
            img: "/img/espejo21.jpg"
        },
        { id: "E22",
            nombre: "Espejo 22",
            descripcion: "Espejo de diseño animal print",
            img: "/img/espejo22.jpg"
        },
        {id: "E23", 
            nombre: "Espejo 23", 
            descripcion: "Espejo de diseño con moldura", 
            img: "/img/espejo23.jpg"
        },
        { id: "E24",
            nombre: "Espejo 24",
            descripcion: "Espejo de diseño con melamina",
            img: "/img/espejo24.jpg"
        },
];

productosEspejosDos.forEach ((producto) => {
    const contenedorProducto = document.createElement (`div`);
    contenedorProducto.className = `espejos`; //espejo

    const imagenProducto = document.createElement (`img`);
    imagenProducto.className = `imagenProducto`;
    imagenProducto.src = producto.img;
    imagenProducto.style.width = "320px";
    imagenProducto.style.height = "380px";

    const contenedorH6 = document.createElement (`div`);
    contenedorH6.className = `contenedor-h6`;
    
    const h6 = document.createElement (`h6`);
    h6.textContent = producto.descripcion;
    
    contenedorH6.appendChild(h6);
    contenedorProducto.appendChild(contenedorH6);
    contenedorProducto.appendChild(imagenProducto);
    listaDeProductos.appendChild(contenedorProducto);
} )
});