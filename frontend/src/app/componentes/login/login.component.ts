import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  username : String;
  password : String 
  
  constructor(
                private auth: AuthService,
                private router: Router,
                private zone: NgZone) { }

  ngOnInit(): void {
    
  }
  onLoginSubmit(){
 
    const usuario =  {
      username: this.username,
      password: this.password
    }

    this.auth.autenticarUsuario(usuario).subscribe(data =>{
      
        var resultado = JSON.parse(JSON.stringify(data)); 
        if(resultado.success){
          console.log(resultado);
          this.auth.guardarUsuarioData(resultado.token, resultado.usuario);

          console.log('Usuario Logueado '+resultado.token + resultado.usuario);
          this.router.navigate(['dashboard']);

        } else{
          console.error('Algo ocurrio: '+ resultado.msg);
        }
  });
  }
}
