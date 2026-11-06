const carrito = [
    { nombre: "Teclado", precio: 50, disponible: true },
    { nombre: "Mouse", precio: 25, disponible: false },
    { nombre: "Monitor", precio: 200, disponible: true }
];

function procesarCarrito(lista) {
    let total = 0;
    const disponibles = [];

    for (let producto of lista) {
        if (producto.disponible === true) { // ERROR 2: Asignación '=' en lugar de comparación '==='
            disponibles.push(producto.nombre);
            total += producto.precio;
    
        }
    }

    return {
        totalPagar: total,
        productosDisponibles: disponibles
    };
}


console.log(procesarCarrito(carrito));