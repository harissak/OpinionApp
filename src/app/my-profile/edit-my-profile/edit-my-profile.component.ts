import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { OpinionService } from 'src/app/opinion/opinion-service/opinion.service';
import { Opinion } from 'src/app/opinion/opinion.model';
import { LoginRegistrationService } from '../my-profile-service/LoginRegistration.service';
import { MyProfile } from '../my-profile.module';

@Component({
  selector: 'app-edit-my-profile',
  templateUrl: './edit-my-profile.component.html',
  styleUrls: ['./edit-my-profile.component.css']
})
export class EditMyProfileComponent implements OnInit {

  @ViewChild('f') logInForm!: NgForm;
  currentUser='';
  errorMessage!:string;
  isValidInput=true;
  listOfOpinions!:Opinion[];
   commentsMap= new Map();

  constructor(private opinionService:OpinionService, private logRegSer: LoginRegistrationService,private dialogRef: MatDialogRef<EditMyProfileComponent>) { }

 
  ngOnInit(): void {
    this.currentUser=this.logRegSer.getCurrentUser().username;

    this.listOfOpinions = this.opinionService.getList().filter((opinion,index,fullOpinion)=>{
      return opinion.nickName == this.currentUser;
    });

    this.opinionService.opinionChanged.subscribe(
      (opinions: Opinion[]) => {
        this.listOfOpinions = opinions.filter((opinion,index,fullOpinion)=>{
          return opinion.nickName == this.currentUser;
        });
      
      }
    );
  
   
  }

  onSubmit() {
      const password= this.logInForm.value['password'];
      const user =   new MyProfile(this.currentUser.toLowerCase(),password);
      this.logRegSer.updateProfile(user);
      this.dialogRef.close();
     

  }

  close() {
    this.dialogRef.close();
  }
}
