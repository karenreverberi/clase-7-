// ejercicio 1 
let alumnos= []
let nombre= prompt ("ingresar nombre del alumno")

while (nombre != "fin") {
    alumnos.push (nombre);
    nombre= prompt ("ingresar a otro alumno")
}

console.log ("cantidad total de alumnos:  " + alumnos.length);

console.log ("listado de alumnos: ");
for (let i = 0; i < alumnos.length; i++) {
  console.log (alumnos [i]);
}

console.log ("alumnos con mas de 5 letras");
for (let i= 0; i < alumnos.length; i++ ) {
    if (alumnos [i].length > 5) {
        console.log (alumnos [i]);
    }
}
