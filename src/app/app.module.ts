import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//Componentes
import { CancionesComponent } from './canciones/canciones.component';

//Providers
import { CancionesService } from './providers/canciones.service';
import { HttpClientModule } from '@angular/common/http';

//Pipes


@NgModule({
  declarations: [
    AppComponent,
    
    CancionesComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    
    CancionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
