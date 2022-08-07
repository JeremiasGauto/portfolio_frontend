import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

SkillURL = 'http://localhost:8080/skill/'
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.SkillURL +'lista');
  }
  
  public detail(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.SkillURL + `detail/${id}`);
  }
 

  public save(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.SkillURL +'nueva', skill);
  }

  public update(id: number, skill: Skill): Observable<any>{    
    return this.httpClient.put<any>(this.SkillURL +`edit/skill/${id}`, skill)
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.SkillURL+`delete/skill/${id}`)
  }


}
