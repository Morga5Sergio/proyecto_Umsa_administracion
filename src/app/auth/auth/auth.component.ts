import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  // selectedValue: number;
  credentials = { username: '', password: '',selectedValue: 1 };
  swError = false;
  swErrorPassword = false;
  public credentialsForm: FormGroup;
  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService, private fb: FormBuilder){
    this.credentialsForm = this.fb.group({
      username: ['',[Validators.required] ],
      password: ['',[Validators.required]],
      selectedValue: ["1",Validators.required] // Valor inicial para el mat-radio-group
    });
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  //  , Validators.minLength(3)
  // , Validators.minLength(6)
  
  onSubmit(): void {
    /* this.router.navigate(['/login']); */
    console.log("Entra");
    /* console.log("Datos del credencial " + this.credentials ); */
    //console.log("Datos del credencial ", this.credentialsForm.value );
    console.log("Datos del invalidate ", this.credentialsForm.invalid );
    //this.toastr.success('Hello world!', 'Toastr fun!');
    if(this.credentialsForm.invalid){
      this.getErrorMensaje();
      this.getErrorMensajePassword()
      this.toastr.error('Mensaje!', 'No ingreso algunos datos!');
      return 
    }else {
      console.log("Datos del credencial ", this.credentialsForm.value );
      // this.router.navigate(['/dashboard/administracion-lista', {id:"123"}]);
      this.router.navigate(['/dashboard/administracion-lista', "66666778"]);
      /* this.authService.login(this.credentials).subscribe(
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
        
          this.toastr.error('Mensaje!', 'Error de credenciales!');
        
          // Maneja los errores, por ejemplo, muestra un mensaje de error al usuario.
        }
      );  */
    }
    // this.router.navigate(['/dashboard']);

    /* this.authService.login(this.credentials).subscribe(
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
      
        this.toastr.error('Mensaje!', 'Error de credenciales!');
      
        // Maneja los errores, por ejemplo, muestra un mensaje de error al usuario.
      }
    ); */
  }


  public getErrorMensaje(){
    let mensaje = '';
    if (this.credentialsForm.get("username")!!.hasError('required')){
      console.log("Entrasdfasd");
      this.swError = true;
      mensaje = 'Este es un campo Obligatorio';
    }
    return mensaje;
  }

  public getErrorMensajePassword(){
    let mensaje = '';
    if (this.credentialsForm.get("password")!!.hasError('required')){
      console.log("Entrasdfasd");
      this.swErrorPassword = true;
      mensaje = 'Este es un campo Obligatorio';
    }
    return mensaje;
  }
}
