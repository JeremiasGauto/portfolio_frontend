import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  

  ProyectoURL = 'https://gjbackend.onrender.com/proyecto/';

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.ProyectoURL +'lista');
  }
  
  public detail(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.ProyectoURL + `detail/${id}`);
  }
 

  public save(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.ProyectoURL +'nuevo', proyecto);
  }

  public update(proyecto: Proyecto): Observable<Proyecto>{    
    return this.httpClient.put<Proyecto>(this.ProyectoURL + 'edit', proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.ProyectoURL+`delete/proyecto/${id}`)
  }


}
