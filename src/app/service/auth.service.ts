import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject} from 'rxjs';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/';
  currentUserSubjet: BehaviorSubject<any>;

  constructor(private httpClient: HttpClient) { 
    console.log("El servicio de autenticacion esta corriendo");
    this.currentUserSubjet= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
  }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post(this.authURL + 'nuevo', nuevoUsuario);
  }

   public iniciarSesion(credenciales: any): Observable<any> {
     return this.httpClient.post(this.authURL + 'nuevo', credenciales).pipe(map(data => {
       sessionStorage.setItem('currentUser', JSON.stringify(data));
       
       
       return data;
    }));
  }

  get UsuarioAutenticado()
  {
    return this.currentUserSubjet.value;
   }




  public login(loginUsuario: LoginUsuario): Observable<any>{
    return this.httpClient.post(this.authURL + 'login', loginUsuario)
  }

  

}
