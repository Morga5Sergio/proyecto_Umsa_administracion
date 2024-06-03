import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServicioService {

  private datosFuente = new BehaviorSubject<any>(null);
  datos = this.datosFuente.asObservable();
  constructor() { }
  actualizarDatos(nuevosDatos: any) {
  
    console.log("Datos enviados prueba ==>CC " , nuevosDatos );
    this.datosFuente.next(nuevosDatos);
  }

  obtenerDatos(): Promise<any> {
    return new Promise((resolve, reject) => {
      // Simular una solicitud HTTP asíncrona
      setTimeout(() => {
        const datos = { mensaje: 'Datos obtenidos' }; // Simulación de datos obtenidos
        resolve(datos); // Resuelve la promesa con los datos
      }, 2000); // Simula un retardo de 2 segundos
    });
  }
}
