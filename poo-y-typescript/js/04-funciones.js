// puedo agregar el tipo de dato que voy a enviar y el tipo de dato que tiene que devolver
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return "El numero es: " + numero;
}
console.log(getNumero());
