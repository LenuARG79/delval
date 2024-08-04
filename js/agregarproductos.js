importScripts (addproductos.js);

function nuevoProduto(id, nombre, descripcion, img) {
    let producto = new  Productos (id, nombre, descripcion, img);
    productos.push (producto);
}