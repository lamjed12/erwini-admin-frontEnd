import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { notification } from '../model/notification';
import { HistoriqueForAdmin } from '../model/historique';

@Injectable({
  providedIn: 'root'
})
export class notificationService {

  apiServerUrl:"http://localhost:8080" | undefined;
  constructor(private http : HttpClient) { }

  public getnotification(): Observable<HistoriqueForAdmin[]> {
    return this.http.get<HistoriqueForAdmin[]>("http://localhost:8080/api/historiqueForAdmin");
  }

  public addnotification(claim: any): Observable<any> {
    return this.http.post<notification>("http://localhost:8080/api/create/notification", claim);
  }

  public updatenotification(claim: notification): Observable<notification> {
    console.log(claim)
    return this.http.put<notification>(`http://localhost:8080/api/notification/${claim._id} `,claim);
  }
  public deletenotification(claimId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/notification/${claimId}`,);
  }
}
