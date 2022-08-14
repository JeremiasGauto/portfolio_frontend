import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL= 'http://localhost:8080/'

  constructor(private servicio: HttpClient) { }
  
  public getPersona(): Observable<Persona> {
    return this.servicio.get<Persona>(this.URL+ 'traer/perfil');

  }

  public update(persona: Persona): Observable<any>{    
    return this.servicio.put<any>(this.URL +'edit/persona', persona)
  }

  public lista(): Observable<Persona[]> {
    return this.servicio.get<Persona[]>(this.URL + 'ver/personas');

  }

}
