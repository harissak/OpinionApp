import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditMyProfileComponent } from '../my-profile/edit-my-profile/edit-my-profile.component';
import { LoginRegistrationService } from '../my-profile/my-profile-service/LoginRegistration.service';
import { MyProfileComponent } from '../my-profile/my-profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titleDescription:string= 'Log In';
  isLoggedIn:boolean =false;
  constructor(private loginService: LoginRegistrationService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.loginService.statusChanged
    .subscribe(
      (status:boolean) => {
        if(status){
          this.isLoggedIn=true;
          this.titleDescription='Log Out';
        } else {
          this.isLoggedIn=false;
          this.titleDescription = 'Log In';
        }
      }
    )
  }

  logIn() {

    if(!this.isLoggedIn){

        this.dialog.open(MyProfileComponent, {
          height: '40%',
          width: '25%',
        });
    } else {
      this.loginService.logOut();
    }
  }

  visitMyProfile() {

    this.dialog.open(EditMyProfileComponent, {
      height: 'auto',
      width: '45%',
    });
  }

}
