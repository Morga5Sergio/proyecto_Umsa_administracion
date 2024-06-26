import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
// --------------------------
export class AuthService {
  private apiUrl = 'http://localhost:5000';
  private apiPokemon = "https://pokeapi.co/api/v2/pokemon/ditto"
  //private apiPokemon = "https://jsonplaceholder.typicode.com/todos/1"
  private apipostExample = "https://jsonplaceholder.typicode.com/posts"
  private apiGetEmpleados = "http://127.0.0.1:8000/obtenerEmpleadosPrueba"
  private apiCOnsultaDeDocentes = "http://127.0.0.1:8002/obtenerEmpleadosPrueba"
  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  isPokemon(): Observable<any>{
    return this.http.get(`${this.apiPokemon}`);
  }
  
  // TODO GET Ejemplo de servicio para obtener empleados
  getObtenerEmpleados():Observable<any>{
    return this.http.get(`${this.apiGetEmpleados}`);
  }

  /* title: 'foo',
    body: 'bar',
    userId: 1, */
  isExamplePost(enviar: {title: string; body:string; userId: number }): Observable<any>{
    return this.http.post(`${this.apipostExample}`, enviar );
  }


  // Método para obtener datos de estudiantes después de iniciar sesión
  getStudentData(): Observable<any> {
    // Se puede cambiar 'protected' a la ruta real del backend
    // Agrega el encabezado de autorización con el token de acceso
    const accessToken = localStorage.getItem('access_token');
    const headers = { Authorization: `Bearer ${accessToken}` };
    return this.http.get(`${this.apiUrl}/protected`, { headers });
  }

  // Cerrar sesión 
  logout(): Observable<any> {
    // para obtener el token almacenado en el localStorage
    const token = localStorage.getItem('access_token');

    // Verifica si el token existe
    if (token) {
      // Configura los encabezados para incluir el token
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      // Configura las opciones de la solicitud
      const options = {
        headers: headers
      };

      // Realiza la solicitud al backend para cerrar la sesión
      return this.http.post(`${this.apiUrl}/logout`, {}, options)
        .pipe(
          tap(() => this.clearSession()), // Limpia la sesión en caso de éxito
          catchError(error => {
            console.error('Error al cerrar sesión:', error);
            return throwError(error);
          })
        );
    } else {
      // Manejo de error: Token no encontrado
      return throwError('Token not found');
    }
  }

  // Método para limpiar la sesión en el cliente
  private clearSession(): void {
    localStorage.removeItem('access_token');
    // Otros pasos para limpiar la sesión, si es necesario
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    // Verifica si el token de acceso está presente
    return !!localStorage.getItem('access_token');
  }

 
}
