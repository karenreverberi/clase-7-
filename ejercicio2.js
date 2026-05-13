//ejercicio 2
let productos = []
let precio = []
let total = 0

let productos = prompt ("ingresar nombre del producto")

while (producto != "fin") {
    let precio = numero(prompt ("ingresar precio del producto"));

    productos.push (productos);
    precio.push (precio);
    
    productos = prompt ("ingresar a otro producto");      
}
console.log ("productos cargados: ");
for (let i = 0; i < productos.length; i++) {
    console.log (productos[i] + " $" + precio[i]);
    total = total +precio[i];
}
console.log ("total a pagar: $" + total);

console.log ("productos con precio mayor a $1000: ")
for (let i = 0; i < productos.length; i++) {
    if (precio[i] > 1000) {
        console.log (productos[i]);
    }
}
