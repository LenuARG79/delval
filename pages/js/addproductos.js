
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
let productosEspejosUno = [
        {id: "E1", 
            nombre: "Espejo 1", 
            descripcion: "Espejo de diseño con melamina", 
            img: "/img/espejo1.jpg"
        },
        { id: "E2",
            nombre: "Espejo 2",
            descripcion: "Espejo de diseño animal print",
            img: "/img/espejo2.jpg"
        },
        {id: "E3", 
            nombre: "Espejo 3", 
            descripcion: "Espejo de diseño con moldura", 
            img: "/img/espejo3.jpg"
        },
        { id: "E4",
            nombre: "Espejo 4",
            descripcion: "Espejo de diseño con melamina",
            img: "/img/espejo4.jpg"
        },
        {id: "E5", 
            nombre: "Espejo 5", 
            descripcion: "Espejo de diseño con melamina", 
            img: "/img/espejo5.jpg"
        },
        { id: "E6",
            nombre: "Espejo 6",
            descripcion: "Espejo de diseño animal print",
            img: "/img/espejo6.jpg"
        },
        {id: "E7", 
            nombre: "Espejo 7", 
            descripcion: "Espejo de diseño con moldura", 
            img: "/img/espejo7.jpg"
        },
        { id: "E8",
            nombre: "Espejo 8",
            descripcion: "Espejo de diseño con melamina",
            img: "/img/espejo8.jpg"
        },
        {id: "E9", 
            nombre: "Espejo 9", 
            descripcion: "Espejo de diseño con melamina", 
            img: "/img/espejo9.jpg"
        },
        { id: "E10",
            nombre: "Espejo 10",
            descripcion: "Espejo de diseño animal print",
            img: "/img/espejo10.jpg"
        },
        {id: "E11", 
            nombre: "Espejo 11", 
            descripcion: "Espejo de diseño con moldura", 
            img: "/img/espejo11.jpg"
        },
        { id: "E12",
            nombre: "Espejo 12",
            descripcion: "Espejo de diseño con melamina",
            img: "/img/espejo12.jpg"
        },
];

productosEspejosUno.forEach ((producto) => {
    const contenedorProducto = document.createElement (`div`);
    contenedorProducto.className = `espejos`; 

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


