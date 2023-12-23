
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { puit } from '../model/puit';
@Injectable({
  providedIn: 'root'
})
export class puitService {
  apiServerUrl:"http://localhost:8080" | undefined;
  constructor(private http : HttpClient) { }

  public getpuit (): Observable<puit[]> {
    return this.http.get<puit[]>("http://localhost:8080/api/puits");
  }

  public getpuitById(claim: any): Observable<puit> {
    console.log('puit service'+ claim._id);
    return this.http.get<puit>(`http://localhost:8080/api/puit/${claim._id}`);
  }

  public addvanne(claim: any): Observable<any> {
    return this.http.post<puit>("http://localhost:8080/api/create/vanne", claim);
  }

  public addpuit(claim: any): Observable<any> {

    return this.http.post<puit>("http://localhost:8080/api/create/puit", claim);
  }
  public updatepuit(claim: puit): Observable<puit> {
    console.log("1222")
    console.log(claim.Active)
    return this.http.put<puit>(`http://localhost:8080/api/puit/${claim._id}`,claim);
  }

  public deletepuit(claimId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/puit/${claimId}`,);
  }
  
  public getpuitByAgenda(claim: any): Observable<puit> {
    console.log(claim._id);
    return this.http.get<puit>(`http://localhost:8080/api/puit/byAgenda/${claim._id}`);
  }

}
