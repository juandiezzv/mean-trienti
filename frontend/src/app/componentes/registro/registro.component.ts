import { Component, OnInit, NgZone } from '@angular/core';
//Servicios
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router'



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {
  nombre: String;
  correo: String;
  username: String;
  password: String;

  constructor(
            private auth: AuthService,
            private router: Router,
            private zone: NgZone
            ) {}

  ngOnInit(): void {
  }

  onRegisterSubmit(){
    var usuario = {
      nombre: this.nombre,
      correo: this.correo,
      username: this.username,
      password: this.password
    }

    //Registrar Usuario
    this.auth.registrarUsuario(usuario).subscribe(data =>{
      
        
        var resultado = JSON.parse(JSON.stringify(data)); 
        console.log(resultado);
        console.log(resultado.success);
        if(resultado.success){
          console.log('Usuario Registrado');
          this.router.navigate(['/login']);
        }else{
          console.error('Algo ocurrio');}

  } )
  

}}
