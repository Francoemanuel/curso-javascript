// String
let cadena: string = "Franco";

// number
let numero: number = 12;

// boleano
let verdadero_falso: boolean = true;

// any
let cualquiera: any = "hola";
cualquiera = 77;

// arrays dos formas de definir un array
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];

let years:any[] = ["DOCE", 13, 14];

// se puede tener multiples tipos de datos asignados
// a una variable usando las tuberias | como en el siguente ejemplo

let probando: string | number = "pruebaTexto";
probando = 17;

// se puede crear un tipo de datos personalizado
type alfanumerico = string | number;
let numerosYletras: alfanumerico = "probandoAlfanumerico";
numerosYletras = 18;

//  let y var
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;
    console.log(numero1, numero2);
}
console.log(numero1, numero2);



console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years, probando, numerosYletras);
