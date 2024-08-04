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
let productosVanitorDos = [
        {id: "V13", 
            nombre: "Vanitor 13", 
            descripcion: "Vanitor de diseño con melamina", 
            img: "/img/vanitor13.jpg"
        },
        { id: "V14",
            nombre: "Vanitor 14",
            descripcion: "Vanitor de diseño animal print",
            img: "/img/vanitor14.jpg"
        },
        {id: "V15", 
            nombre: "Vanitor 15", 
            descripcion: "Vanitor de diseño con moldura", 
            img: "/img/vanitor15.jpg"
        },
        { id: "V16",
            nombre: "Vanitor 16",
            descripcion: "Vanitor de diseño con melamina",
            img: "/img/vanitor16.jpg"
        },
        {id: "V17", 
            nombre: "Vanitor 17", 
            descripcion: "Vanitor de diseño con melamina", 
            img: "/img/vanitor17.jpg"
        },
        { id: "V18",
            nombre: "Vanitor 18",
            descripcion: "Vanitor de diseño animal print",
            img: "/img/vanitor18.jpg"
        },
        {id: "V19", 
            nombre: "Vanitor 19", 
            descripcion: "Vanitor de diseño con moldura", 
            img: "/img/vanitor19.jpg"
        },
        { id: "V20",
            nombre: "Vanitor 20",
            descripcion: "Vanitor de diseño con melamina",
            img: "/img/vanitor20.jpg"
        },
        {id: "V21", 
            nombre: "Vanitor 21", 
            descripcion: "Vanitor de diseño con melamina", 
            img: "/img/vanitor21.jpg"
        },
        { id: "V22",
            nombre: "Vanitor 22",
            descripcion: "Vanitor de diseño animal print",
            img: "/img/vanitor22.jpg"
        },
        {id: "V23", 
            nombre: "Vanitor 23", 
            descripcion: "Vanitor de diseño con moldura", 
            img: "/img/vanitor23.jpg"
        },
        { id: "V24",
            nombre: "Vanitor 24",
            descripcion: "Vanitor de diseño con melamina",
            img: "/img/vanitor24.jpg"
        },
];

productosVanitorDos.forEach ((producto) => {
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


