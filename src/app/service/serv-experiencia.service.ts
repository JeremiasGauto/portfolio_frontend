import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ServExperienciaService {
  experienciaURL = 'https://gjbackend.onrender.com/explab/'


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.experienciaURL + 'lista');
  }
  
  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.experienciaURL +`detail/${id}`)
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.experienciaURL +'create', experiencia);
  }

  public update(experiencia: Experiencia): Observable<any>{    
    return this.httpClient.put<any>(this.experienciaURL +'edit', experiencia)
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.experienciaURL+`delete/${id}`)
  }

}
