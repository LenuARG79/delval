
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
let productos = [
        {id: "E1", 
          nombre: "Espejo 1", 
          descripcion: "Espejo de diseño con melamina", 
          img: "../pages/productos/espejo-1.html"
        },
        { id: "E2",
          nombre: "Espejo 2",
          descripcion: "Espejo de diseño animal print",
          img: "../pages/productos/espejo-2.html"
        },
        {id: "E3", 
            nombre: "Espejo 3", 
            descripcion: "Espejo de diseño con moldura", 
            img: "../pages/productos/espejo-3.html"
        },
        { id: "E4",
            nombre: "Espejo 4",
            descripcion: "Espejo de diseño con melamina",
            img: "../pages/productos/espejo-4.html"
        },
        {id: "E5", 
            nombre: "Espejo 5", 
            descripcion: "Espejo de diseño con melamina", 
            img: "../pages/productos/espejo-5.html"
        },
        { id: "E6",
            nombre: "Espejo 6",
            descripcion: "Espejo de diseño animal print",
            img: "../pages/productos/espejo-6.html"
        },
        {id: "E7", 
            nombre: "Espejo 7", 
            descripcion: "Espejo de diseño con moldura", 
            img: "../pages/productos/espejo-7.html"
        },
        { id: "E8",
            nombre: "Espejo 8",
            descripcion: "Espejo de diseño con melamina",
            img: "../pages/productos/espejo-8.html"
        },
        {id: "E9", 
            nombre: "Espejo 9", 
            descripcion: "Espejo de diseño con melamina", 
            img: "../pages/productos/espejo-9.html"
        },
        { id: "E10",
            nombre: "Espejo 10",
            descripcion: "Espejo de diseño animal print",
            img: "../pages/productos/espejo-10.html"
        },
        {id: "E11", 
            nombre: "Espejo 11", 
            descripcion: "Espejo de diseño con moldura", 
            img: "../pages/productos/espejo-11.html"
        },
        { id: "E12",
            nombre: "Espejo 12",
            descripcion: "Espejo de diseño con melamina",
            img: "../pages/productos/espejo-12.html"
        }
];

productos.forEach ((producto) => {
    const contenedorProducto = document.createElement (`div`);
    contenedorProducto.className = `espejos espejos`;

    const contenedorH6 = document.createElement (`div`);
    contenedorH6.className = `contenedor-h6`;
    
    const h6 = document.createElement (`h6`);
    h6.textContent = producto.nombre;
    
    const botonVerMas = document.createElement (`a`);
    botonVerMas.className = `contenedor-h6 btn-ver-mas`;
    botonVerMas.href = producto.Image;
    botonVerMas.target = `_blank`;
    botonVerMas.textContent = `Ver Mas`;

    const imagenProducto = document.createElement (img);
    imagenProducto.src = producto.img;
    imagenProducto.className = imagen-producto;

    botonVerMas.appendChild (imagenProducto);
    
    contenedorH6.appendChild(h6);
    contenedorProducto.appendChild(contenedorH6);
    contenedorProducto.appendChild(botonVerMas);


    listaDeProductos.appendChild(contenedorProducto);
} )
});


