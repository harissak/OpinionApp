import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginRegistrationService } from '../my-profile-service/LoginRegistration.service';
import { MyProfileComponent } from '../my-profile.component';
import { MyProfile } from '../my-profile.module';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  @ViewChild('f') logInForm!: NgForm;
  isValidInput=true;
  errorMessage!:string;

  constructor(private logRegService: LoginRegistrationService,public dialogRef: MatDialogRef<MyProfileComponent>) { }

  ngOnInit(): void {
  }

  onSubmit(){

    const userName= this.logInForm.value['username'];
    const password= this.logInForm.value['password'];
    const user =   new MyProfile(userName.toLowerCase(),password);
    
    if(this.logRegService.logIn(user)){
      this.dialogRef.close();
      this.isValidInput=false;
  
    } else {
      this.isValidInput= false;
      this.errorMessage='Username or password are not correct';
    }
    
   
    
  }
  registration(){
    const userName= this.logInForm.value['username'];
    const password= this.logInForm.value['password'];
    const user =   new MyProfile(userName.toLowerCase(),password);

   
    if(this.logRegService.newUser(user)){
      this.logRegService.logIn(user);
      this.dialogRef.close();
      this.isValidInput=false;
      
    } else {
      this.isValidInput=false;
      this.errorMessage='Username has already been taken!';

    }

  }

}
