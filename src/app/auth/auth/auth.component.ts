import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  credentials = { username: '', password: '' };
  
  constructor(private router: Router, private authService: AuthService){}
  
  login(): void {
    this.router.navigate(['/login']);
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    this.authService.login(this.credentials).subscribe(
      (response) => {
        
       console.log('credenciales correctos');
        console.log(response);
        // Maneja la respuesta del backend, por ejemplo, almacena el token de acceso.
        const accessToken = response.access_token;
        // Almacena el token en el almacenamiento local (puedes elegir otra forma de almacenamiento según tu aplicación)
        localStorage.setItem('access_token', accessToken);

        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.log('error de credenciales');
        console.error(error);
      
        
      
        // Maneja los errores, por ejemplo, muestra un mensaje de error al usuario.
      }
    );
  }
}
