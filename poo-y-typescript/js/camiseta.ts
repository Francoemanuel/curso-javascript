// Interface
// Es un contrato en el que definimos qué propiedades y qué métodos obligatorios va a tener una clase.
// Entonces podemos definir interface y podemos aplicársela a las clases que queramos y entonces esa clase
// automáticamente de manera obligatoria tiene que cumplir tiene que cumplir ese contrato de la interfaz
// y tienen que existir los métodos o propiedades que definamos en esa interfaz.

interface CasetaBase{
    setColor(color);
    getColor();
}

// Decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: "+logo);
        }
    }
}

@estampar('Gucci Gang')
// Clase (molde del objeto)
class Camiseta implements CasetaBase{
    // Propiedades (caracteristicas del objeto)
    private color:string;
    private modelo:string;
    private marca:string;
    private talla:string;
    private precio:number;
    
    // Metodos (funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color
    }
}
// Clase hija
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }
    getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta = new Camiseta("fsda","sdf","aadf","fds",12);
console.log(camiseta);
camiseta.estampacion();

let sudadera_nike = new Sudadera("rojo","manga larga", "nike", "L", 30);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("gris");
console.log(sudadera_nike);