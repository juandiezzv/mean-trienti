import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {
  nombre: String;
  correo: String;
  email: String;
  password: String;

  constructor() { }

  ngOnInit(): void {
  }

}
