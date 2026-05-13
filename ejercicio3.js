//ejercicio 3
let temperaturas = [24, 31, 29, 35, 18, 33, 27]
let temperaturaMaxima = temperaturas[0]
let temperaturaMinima = temperaturas[0]
let mas30dias = 0

for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > temperaturaMaxima) {
        temperaturaMaxima = temperaturas[i]
    }
    if (temperaturas[i] < temperaturaMinima) {
        temperaturaMinima = temperaturas[i]
    }
    if (temperaturas[i] > 30) {
        mas30dias++
    }
}
console.log("Temperatura máxima: " + temperaturaMaxima)
console.log("Temperatura mínima: " + temperaturaMinima)
console.log("Días con temperatura mayor a 30: " + mas30dias)