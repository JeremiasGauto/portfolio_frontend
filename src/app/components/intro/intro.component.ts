import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

   nombre: string = "Jeremias ";
  Apellido: string = "Gauto";
  Edad: number = 34;
  Puesto_De_Trabajo: string = "Programacion y control de la produccion"
  Empresa: string = "Industrias Delgado SA"

  constructor() { }

  ngOnInit(): void {
  }

}
