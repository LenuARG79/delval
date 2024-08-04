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
let productosVanitorUno = [
        {id: "V1", 
            nombre: "Vanitor 1", 
            descripcion: "Vanitor de diseño con melamina", 
            img: "/img/vanitor1.jpg"
        },
        { id: "V2",
            nombre: "Vanitor 2",
            descripcion: "Vanitor de diseño animal print",
            img: "/img/vanitor2.jpg"
        },
        {id: "V3", 
            nombre: "Vanitor 3", 
            descripcion: "Vanitor de diseño con moldura", 
            img: "/img/vanitor3.jpg"
        },
        { id: "V4",
            nombre: "Vanitor 4",
            descripcion: "Vanitor de diseño con melamina",
            img: "/img/vanitor4.jpg"
        },
        {id: "V5", 
            nombre: "Vanitor 5", 
            descripcion: "Vanitor de diseño con melamina", 
            img: "/img/vanitor5.jpg"
        },
        { id: "V6",
            nombre: "Vanitor 6",
            descripcion: "Vanitor de diseño animal print",
            img: "/img/vanitor6.jpg"
        },
        {id: "V7", 
            nombre: "Vanitor 7", 
            descripcion: "Vanitor de diseño con moldura", 
            img: "/img/vanitor7.jpg"
        },
        { id: "V8",
            nombre: "Vanitor 8",
            descripcion: "Vanitor de diseño con melamina",
            img: "/img/vanitor8.jpg"
        },
        {id: "V9", 
            nombre: "Vanitor 9", 
            descripcion: "Vanitor de diseño con melamina", 
            img: "/img/vanitor9.jpg"
        },
        { id: "V10",
            nombre: "Vanitor 10",
            descripcion: "Vanitor de diseño animal print",
            img: "/img/vanitor10.jpg"
        },
        {id: "V11", 
            nombre: "Vanitor 11", 
            descripcion: "Vanitor de diseño con moldura", 
            img: "/img/vanitor11.jpg"
        },
        { id: "V12",
            nombre: "Vanitor 12",
            descripcion: "Vanitor de diseño con melamina",
            img: "/img/vanitor12.jpg"
        },
];

productosVanitorUno.forEach ((producto) => {
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
    h6.textContent = producto.nombre;
    
    contenedorH6.appendChild(h6);
    contenedorProducto.appendChild(contenedorH6);
    contenedorProducto.appendChild(imagenProducto);
    listaDeProductos.appendChild(contenedorProducto);
} )
});


