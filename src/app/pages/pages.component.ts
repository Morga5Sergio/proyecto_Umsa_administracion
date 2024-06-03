import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServicioService } from '../servicioDatos/data-servicio.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
}) 
export class PagesComponent implements OnInit {
  datos: any;
  id = ""

  constructor(private router: Router, private dataService: DataServicioService ){}
  ngOnInit(){
    console.log("dfdsfdsfds");
    // await this.obtenerDatosAsincronos();
    //this.obtenerDatosAsincronos();
    setTimeout(() => {
      // Código a ejecutar después del tiempo especificado
    }, 3000);
    this.dataService.datos.subscribe(datos => {
      this.datos = datos;
      if (this.datos && this.datos.id != null) {
        console.log("DatosRecibidos___Gary ==>", this.datos );
        console.log("DatosRecibidos___Gary ==>id", this.datos.id );
        //this.id = this.datos.id;
        //this.id = this.datos.id;
      }
    });
  }

  ngAfterViewInit() {
    // Modifica los datos aquí después de que Angular haya completado la detección de cambios
    if (this.datos && this.datos.id != null) {
      console.log("AAAA", this.datos)
      this.datos.id = this.datos.id;
    }
  }

  /*async obtenerDatosAsincronos() {
    console.log("karlaaa");
    try {
      const datos = await this.dataService.datos.toPromise();
      this.datos = datos;
      console.log("karlaaa  ", datos);
      console.log("DatosRecibidos___Gary ==>", this.datos );
      console.log("DatosRecibidos___Gary ==>id", this.datos.id );
       if (this.datos.id != null) {
        console.log("DatosRecibidos___Gary ==>", this.datos );
        console.log("DatosRecibidos___Gary ==>id", this.datos.id );
      } 
    } catch (error) {
      console.log('Error al obtener datos:', error);
    }
  }*/
  
  salir() {
    this.router.navigate(['/login']);;
  }

   

}