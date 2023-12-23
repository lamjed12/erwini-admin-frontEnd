import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { agriculteurService } from '../../../services/agriculteur.service';
import { puitService } from '../../../services/puit.service';

import { agriculteur } from '../../../model/agriculteur';
import { NgForm } from '@angular/forms';
import { PompeService } from 'src/app/services/pompe.service';
// import Datatable from 'mdbvue/lib/components/Datatables';

// import Datatable from 'mdbvue/lib/components/MdbDataTable';

@Component({
  selector: 'app-agriculteurs',
  templateUrl: './agriculteurs.component.html',
  styleUrls: ['./agriculteurs.component.css']
})
 
export class agriculteursComponent implements OnInit {
  public agriculteurs : agriculteur[] | undefined
  deleteCommand: any;
  addProduct: any;
  editMission: any;
  searchText = '';
  p: number = 1;
  constructor(private agriculteurService: agriculteurService,private puitService: puitService,private pompeService: PompeService, ) { }
  public isinputshown : boolean = false;
  
  public hideinput(): void{
    this.isinputshown=false;   }

    ngOnInit(): void {
   this.getProduit();
   
  }

  status = 'active';

  isStatusActive() {
    return this.status === 'inactive';
  }
  public getProduit(): void {
    this.agriculteurService.getagriculteur().subscribe({
      next: (response: agriculteur[]) => {
     
        this.agriculteurs = response;
        this.agriculteurs!.forEach(element => {
          console.log('ddddddddddddddd')
          this.agriculteurService.updateagriculteurPoints(element);
      
        });
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });
  }


  public onOpenModal1(mission:any, mode: string): void {

    
    const container = document.getElementById('main-container') ;
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
   /* if (mode === 'add') {
  
      button.setAttribute('data-target', '#addMissionModal');
      console.log(mission)
    }
*/
    if (mode === 'add') {
      console.log(mission)
      button.setAttribute('data-target', '#myModal');
     
    }
   
      
    if (mode === 'delete') {
      console.log("11111",mission)

      this.deleteCommand = mission;
      console.log("22222",this.deleteCommand._id)
      button.setAttribute('data-target', '#deleteCommand');

      
    }  

    if (mode === 'edit') {
      console.log(mission)

      this.editMission = mission;
      console.log("22222",this.deleteCommand._id)
      button.setAttribute('data-target', '#updateMissionModal');

      
    }  
    
    
    
    container!.appendChild(button);
    button.click();
  }

public onAddMission(addForm: NgForm): void {
  console.log("addForm.valueaddForm.valueaddForm.value")
    console.log(addForm.value)
 //   document.getElementById('add-mission-form')!.click();
    // const fd = new FormData();
    // fd.append('nom',addForm.value.nom)
    // fd.append('categorie',addForm.value.categorie)
    // fd.append('description',addForm.value.description)
    // fd.append('marque',addForm.value.marque)
    // fd.append('quantite',addForm.value.quantite)
    // fd.append('prix',addForm.value.prix)
    
  
    this.agriculteurService.addagriculteur(addForm.value).subscribe({
      next: (response: any) => {
        console.log(response);
        this.getProduit();
        addForm.reset();
        console.log( response.NbVanne.length);
         //ADD nb of Pompe
        for (let index = 0; index < response.NbPompe; index++) {
           
       
              this.pompeService.addpompe({ 
                active: 'false', 
                agendas: [],
                 user: response._id }).subscribe({
                next: (response: any) => {  },
                error: (error: HttpErrorResponse) => {
                  alert(error.message);
                  addForm.reset();
                },
                complete: () => {
                  console.log('complete');
          
                }
              });
          
        }
        
      //ADD nb of Puit
      for (let index = 0; index < response.NbPuit; index++) {
        this.puitService.addpuit({
         "Pus": "",
          "Active": "false",
          "Connection": "NO",
          "Agenda": [],
          "Security": "Yes",
          "Alert": "No",
          "user": response._id,
          }
        ).subscribe({
          next: (response: any) => {  },
          error: (error: HttpErrorResponse) => {
            alert(error.message);
            addForm.reset();
          },
          complete: () => {
            console.log('complete');
    
          }
        });
        }

       //ADD nb of Vanne
        for (let index = 0; index < response.NbVanne; index++) {
        this.puitService.addvanne({
          "NbVanne": "1",
          "status": "false",
          "Batterie": "good",
          "user" : response._id
          }
        ).subscribe({
          next: (response: any) => {  },
          error: (error: HttpErrorResponse) => {
            alert(error.message);
            addForm.reset();
          },
          complete: () => {
            console.log('complete');
    
          }
        });
        }

      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
      complete: () => {
        console.log('complete');

      }
    });
  } 

  public onUpdateProduit(editForm: NgForm) : void{

    console.log("editForm.value._ideditForm.value._ideditForm.value._id")
    console.log(editForm.value._id)
    console.log(editForm.value.Status_SIM)
    editForm.value.Status_SIM = "inactive"
      
       this.agriculteurService.updateagriculteur(editForm.value).subscribe({
        next: (response: any) => {
          console.log(response);
          this.getProduit();
          editForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          editForm.reset();
        },
        complete: () => {
          console.log('complete');
        }
      });
  }

  onDeleteMission(id : any){
    console.log('id',id);
    this.agriculteurService.deleteagriculteur(id).subscribe({
      next: (response: any) => {
        console.log(response);

        
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        this.getProduit();
        console.log('complete');
        }
    });

    

  }


  public onUpdateSIM(editForm: any) : void{

  
    console.log(editForm._id)
    console.log(editForm.Status_SIM)
    if(editForm.Status_SIM == "inactive"){
      editForm.Status_SIM = "active"
    }else {
      editForm.Status_SIM = "inactive"
    }
  
      
       this.agriculteurService.updateagriculteur(editForm).subscribe({
        next: (response: any) => {
          console.log(response);
          this.getProduit();
          editForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          editForm.reset();
        },
        complete: () => {
          console.log('complete');
        }
      });
 
  // const data2 = {
  //   columns: ['Name', 'Position', 'Office', 'Age', 'Start date', 'Salary'],
  //   rows: [
  //     ['Tiger Nixon', 'System Architect', '	Edinburgh', 61, '2011/04/25', '$320,800'],
  //     ['Sonya Frost', 'Software Engineer', 'Edinburgh', 23, '2008/12/13', '$103,600'],
  //     ['Jena Gaines', 'Office Manager', 'London', 30, '2008/12/19', '$90,560'],
  //     ['Quinn Flynn', 'Support Lead', 'Edinburgh', 22, '2013/03/03', '$342,000'],
  //     ['Charde Marshall', 'Regional Director', 'San Francisco', 36, '2008/10/16', '$470,600'],
  //     ['Haley Kennedy', 'Senior Marketing Designer', 'London', 43, '2012/12/18', '$313,500'],
  //     ['Tatyana Fitzpatrick', 'Regional Director', 'London', 19, '2010/03/17', '$385,750'],
  //     ['Michael Silva', 'Marketing Designer', 'London', 66, '2012/11/27', '$198,500'],
  //     ['Paul Byrd', 'Chief Financial Officer (CFO)', 'New York', 64, '2010/06/09', '$725,000'],
  //     ['Gloria Little', 'Systems Administrator', 'New York', 59, '2009/04/10', '$237,500'],
  //   ],
  // };
  
  // const instance = new Datatable(document.getElementById('datatable') as HTMLElement, {data: data2})
  
  // document.getElementById('datatable-search-input')?.addEventListener('input', (e) => {
  //   if (e.target !== null) {
  //     instance.inputGroup((e.target as HTMLInputElement).value);
  //   }
  // });
}
}
