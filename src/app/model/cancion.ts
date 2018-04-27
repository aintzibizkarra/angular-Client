export class Cancion{
    private _id:number;
    private _nombre: String;

    constructor(id:number=-1, nombre:String=""){
        console.log("Cancion constructor");

        this._id = id;
        this._nombre = nombre;
    }
    //Si no se va a hacer nada especial no hacen falta
    get id(){
       // console.log ("Metodo Getter de id");
        return this._id;
    }

    set id(id:number){
        //console.log ("Metodo Setter de id");
        this._id= id;
    }

    get nombre(){
        //console.log ("Metodo Getter de nombre");
        return this._nombre;
    }
    set nombre(nombre:String){
        //console.log ("Metodo Setter de nombre");
        this._nombre=nombre;
    }
}