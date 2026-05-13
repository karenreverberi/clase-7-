let productos = []
let precio = []
let total = 0

let producto = prompt ("ingresar nombre del producto")

while (producto != "fin") {
    let precio = numero(prompt ("ingresar precio del producto"))

    productos.push (producto);
    precio.push (precio);
    
    producto = prompt ("ingresar a otro producto")      
}
