import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { notificationService } from '../../../services/notification.service';
import { notification } from '../../../model/notification';
import { NgForm } from '@angular/forms';
import { agriculteurService } from 'src/app/services/agriculteur.service';
import { agriculteur } from 'src/app/model/agriculteur';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { DatePipe } from '@angular/common';
import { HistoriqueForAdmin } from 'src/app/model/historique';

@Component({
  providers: [DatePipe],
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationComponent implements OnInit {
  public notifications : HistoriqueForAdmin[] | undefined
  deleteCommand: any;
  addProduct: any;
  editMission: any;
  searchText = '';
  p: number = 1;
  currentDate: string;
  constructor(private NotificationService: notificationService,private AgriculteurService: agriculteurService ,private datePipe: DatePipe) {
    this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
   }
  ngOnInit(): void {
    this.getNotification();
    
  }

  

  public getNotification(): void {
    this.NotificationService.getnotification().subscribe({
      next: (response: HistoriqueForAdmin[]) => {
        console.log(response);

        //boucle liste ta3 il reponse o na5thou bel wa7da bel wa7da
        for (let index = 0; index < response.length; index++) {
          //lina n3aytou il service agrecteur o n3adiw il id o hwa iraj3a il agricuteur kamel
          //dima thabit fil model mta3ik ya3ni il argecteur chnwa 3andou bech majikch err
          //nchall rabi iwaf9ik ya kibdi
           this.AgriculteurService.getagriculteurById(response[index].phoneAgrecuteur).subscribe((agriculteur: agriculteur) => {
            // Assign the obtained agriculteur object to the current iteration of the response array
             response[index].nameAgrecuteur = agriculteur.Name;
             response[index].phoneAgrecuteur = agriculteur.Phone;
          });
        }
        this.notifications = response;

      },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });
  }
  
  filedownload() {
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Report Data',
      useBom: true,
      headers: ["Agriculteur", "Date", "Action"]
    };
   
    new ngxCsv(this.notifications, "Report", options);
  }


}
