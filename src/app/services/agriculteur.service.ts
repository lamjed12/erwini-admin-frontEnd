
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { agriculteur } from '../model/agriculteur';
@Injectable({
  providedIn: 'root'
})
export class agriculteurService {
  apiServerUrl:"http://localhost:8080" | undefined;
  constructor(private http : HttpClient) { }

  public getagriculteur (): Observable<agriculteur[]> {
    return this.http.get<agriculteur[]>("http://localhost:8080/api/agriculteurs");
  }
  public getagriculteurById(id: any): Observable<agriculteur> {
    return this.http.get<agriculteur>(`http://localhost:8080/api/agriculteur/${id}`);
  }

  public addagriculteur(claim: any): Observable<any> {
    return this.http.post<agriculteur>("http://localhost:8080/api/create/agriculteur", claim);
  }

  public updateagriculteur(claim: agriculteur): Observable<agriculteur> {
    console.log(claim)
    return this.http.put<agriculteur>(`http://localhost:8080/api/agriculteur/${claim._id}`,claim);
  }

  public updateagriculteurPoints(claim: agriculteur):Observable<any> {
    console.log(`http://localhost:8080/api/agriculteur/point/${claim._id}`)
    return this.http.get(`http://localhost:8080/api/agriculteur/point/${claim._id}`);
  }

  public deleteagriculteur(claimId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/agriculteur/${claimId}`,);
  }

  // Authentifier l’agriculteur
  public authentifierAgriculteur( Phone: string, Password: string ): Observable<any> {
    const body = { Phone, Password };

    return this.http.post<any>("http://localhost:8080/api/create/agriculteur", body);
  }
  
}
