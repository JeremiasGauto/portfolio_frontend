import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombreProyecto: '';
  fecha: number;
  descripcionProyecto: '';
  imgProyecto: '';

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  
  onCreate(): void {
    const proyecto = new Proyecto(this.nombreProyecto, this.fecha, this.descripcionProyecto, this.imgProyecto);
    this.proyectoService.save(proyecto).subscribe(data => {
      alert("Proyecto agregado con exito");
      this.router.navigate(['home']);
    }, err => {
      alert("Falló");
      this.router.navigate(['home']);
    })

  }
}