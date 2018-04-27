import { Component, OnInit } from '@angular/core';
import { CancionesService } from '../providers/canciones.service';
import { Cancion } from '../model/cancion';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {
 //Caniones
 canciones: Cancion[];
 cancionSeleccionada: Cancion;
 constructor(private cancionesService: CancionesService) {

   console.log("CancionesComponent constructor");

   //inicializar los atributos
  this.canciones=[];
  //Para que este inicializada y vacia
  this.cancionSeleccionada= new Cancion(-1, "");

    //this.mockData();
  

  
  }

  ngOnInit() {
    console.log("CancionesComponent ngOnInit");

    //Llamadas a los servicios o providers
    this.cancionesService.getCanciones().subscribe(
      result => {
           
         result.forEach(element => {
           this.canciones.push(element);
           
         });

      },
      error => {
          console.warn(error);
      }
  );
  }
  eliminar(id:number){
    console.log(" CancionesComponent eliminar %i", id);

  }
  /*mockData(){
    this.canciones.push (new Cancion (1,"Macarena"));
    this.canciones.push (new Cancion (2,"Aitormena"));
    this.canciones.push (new Cancion (3,"Sorgiña pirulina"));
    this.canciones.push (new Cancion (4,"Laztana"));
    this.canciones.push (new Cancion (5,"Bailamos"));
    this.canciones.push (new Cancion (6,"Pakito Txokolaterue"));
    this.canciones.push (new Cancion (7,"Ikusi mendizaleak"));
    this.canciones.push (new Cancion (8,"Bye Bye"));
  }*/

}
