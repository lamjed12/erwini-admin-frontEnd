import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pompe } from '../model/pompe';


@Injectable({
  providedIn: 'root'
})
export class PompeService {

  apiServerUrl:"http://localhost:8080" | undefined;
  constructor(private http : HttpClient) { }

  public getpompes(): Observable<Pompe[]> {
    return this.http.get<Pompe[]>("http://localhost:8080/api/pompes");
  }

  public getpompe(claim: any): Observable<Pompe> {
    console.log(claim._id);
    return this.http.get<Pompe>(`http://localhost:8080/api/pompe/${claim._id}`);
  }

  public getpompeByAgenda(claim: any): Observable<Pompe> {
    console.log(claim._id);
    return this.http.get<Pompe>(`http://localhost:8080/api/pompe/byAgenda/${claim._id}`);
  }

  public addpompe(claim: any): Observable<any> {
    return this.http.post<Pompe>("http://localhost:8080/api/create/pompe", claim);
  }

  public updatepompe(claim: Pompe): Observable<Pompe> {
    console.log("claim")
    console.log(claim.active)
    return this.http.put<Pompe>(`http://localhost:8080/api/pompe/${claim._id}`, claim);
  }
  public deletepompe(claimId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/pompes/${claimId}`,);
  }

}
