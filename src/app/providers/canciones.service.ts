import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Cancion } from '../model/cancion';

const END_POINT="http://localhost:8080";
@Injectable()
export class CancionesService {
 
  
  constructor(public http: HttpClient) { 
   
  }

  getCanciones(): Observable<any>{
    let url = END_POINT + '/cancion/';
    return this.http.get(url);
  }

  
}
