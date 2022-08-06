import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ServExperienciaService } from 'src/app/service/serv-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  expLab: Experiencia = null;

  constructor(private servExperiencia: ServExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servExperiencia.detail(id).subscribe(dato => {
      this.expLab = dato;
    }, err => {
        alert("Error al modificar Experiencia");
        this.router.navigate(['home']);
        })

  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servExperiencia.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['home']);
      }, err => {
        alert("Error al modificar Experiencia");
        this.router.navigate(['home']);
        }
    )


  }


}