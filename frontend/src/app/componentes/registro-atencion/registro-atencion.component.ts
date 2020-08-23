import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Cliente } from 'src/app/models/cliente';


@Component({
  selector: 'app-registro-atencion',
  templateUrl: './registro-atencion.component.html',
  styleUrls: ['./registro-atencion.component.sass']
})
export class RegistroAtencionComponent implements OnInit {
  
  dni: String;
  nombre: String;
  apellido: String;
  telefono: String;
  prioridad: String;
  cliente = new Cliente();

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    
  }

  findByDNI(){
    this.clienteService.getClienteByDNI(this.dni).subscribe((res)=>{

      var cliente = JSON.parse(JSON.stringify(res)); 
      if(cliente){
        this.dni = cliente.dni;
        this.nombre = cliente.nombre;
        this.apellido = cliente.apellido;
        this.telefono = cliente.telefono;
        this.prioridad = cliente.prioridad;
      } else{
        console.log('No encontrado')
      }
      
  })
  }

}
