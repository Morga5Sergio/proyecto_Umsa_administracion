import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServicioService } from '../servicioDatos/data-servicio.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
}) 
export class PagesComponent implements OnInit {
  datos: any;
  id = ""
  isSmallScreen: boolean = false;
  screenWidth: number = 0;
  opened: boolean = true;
  constructor(private router: Router, private dataService: DataServicioService,private breakpointObserver: BreakpointObserver


   ){}
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

    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web,
      Breakpoints.WebLandscape,
      Breakpoints.WebPortrait
    ])
      .subscribe(result => {
        console.log("Datos ", " ==> ", result.breakpoints)
        console.log("AAAA", result.breakpoints);
        this.screenWidth = window.innerWidth;
         // Determinar si algún breakpoint está activo
        for (const query in result.breakpoints) {
          if (result.breakpoints[query]) {
            console.log(`Active breakpoint: ${query}`);
            console.log(`Current screen width in pixels: ${this.screenWidth}px`);
          }
        }
        //this.isSmallScreen = result.matches;
        this.isSmallScreen = this.screenWidth <= 959; // Ejemplo: considerar pantalla pequeña si <= 959px
        console.log("Datos ", " ==> this.isSmallScreen ", this.isSmallScreen);
        this.opened = !this.isSmallScreen; 
      });
      window.addEventListener('resize', this.onResize.bind(this));
  }


   // Actualizar la pantalla cuando cambie el tamaño de la ventana
 
   onResize() {
    this.screenWidth = window.innerWidth;
    this.isSmallScreen = this.screenWidth <= 959; // Actualizar para el nuevo tamaño de la pantalla
    this.opened = !this.isSmallScreen;
    console.log("Resized: Current screen width in pixels: ", this.screenWidth);
    console.log("Datos ", " ==> this.isSmallScreen ", this.isSmallScreen);
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