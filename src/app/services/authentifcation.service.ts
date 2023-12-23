import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentifcationService {

  apiServerUrl:"http://localhost:8080" | undefined;
  constructor(private http : HttpClient) { }

  public addRegister(claim: any): Observable<any> {
    return this.http.post<user>("http://localhost:8080/api/xauth/registration", claim);
  }

  // Function to perform user login
  signin(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>(`http://localhost:8080/`, body);
  }

  public addSignin(claim: any): Observable<any> {
    console.log(claim)
    return this.http.post<any>("http://localhost:8080/api/xauth/signin", claim);
  }

  // Authentifier l’agriculteur
  public authentifierAgriculteur( Phone: string, Password: string ): Observable<any> {
    const body = { Phone, Password };

    return this.http.post<any>("http://localhost:8080/authentifierAgriculteur", body);
  }
  
}
