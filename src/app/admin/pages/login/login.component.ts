import { Component } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthentifcationService } from 'src/app/services/authentifcation.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  email: string = '';
  errorMessage = '';
  visible: boolean = true;
  changetype: boolean = true;
  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  constructor(private http: HttpClient, private authentifcationService: AuthentifcationService, private toastr: ToastrService,  private router: Router) {}

  submitForm() {
    const data = {
      username: this.username,
      password: this.password,
    };
    this.http.post('/api/login', data).subscribe(
      (response: any) => {
        this.toastr.success('Hello, world!', 'Success');
        // handle successful login
      },
      (error) => {
        this.errorMessage = error.error.message;
      }
    );
  }
 
  login() {
    console.log(this.email);
    console.log(this.password);
    //if (this.email == 'example@example.com' && this.password == 'password') {
    this.authentifcationService.authentifierAgriculteur(this.email, this.password).subscribe(
      (response) => {
        // Handle successful login response
        console.log(response);
        // Redirect to home or do something based on the response
        this.router.navigateByUrl('/home');
      },
      (error) => {
        // If the user is not authenticated, display an error message
        this.errorMessage = 'Invalid email or password';
        // Reset the email and password fields
        this.email = '';
        this.password = '';
      }
    );
  }
  public onAddMission(addForm: NgForm): void {
    console.log("addForm.valueaddForm.valueaddForm.value");
    console.log(addForm.value.email);
    console.log(addForm.value.password);

    this.authentifcationService.addSignin(addForm.value).subscribe({
      next: (response: any) => {
        console.log(response.message);
        if (response.message === 'Login Success !!!' && response.role === 'admin') {
          this.toastr.success('Hello, welcome to erwini!', 'Success');
          this.router.navigate(['/agriculteur']);
        }
        else if (response.message == "User Not Exist")
        this.toastr.error('User Not Exist', 'Error');
        
       
        
        else if (response.message == "Incorrect Password !")
        this.toastr.warning('Incorrect Password !")', 'Error');
      },
      error: (error: HttpErrorResponse) => {
  
      },
      complete: () => {
        console.log('complete')
     
      }
    });
    
    }
}