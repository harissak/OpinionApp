import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MyProfile } from '../my-profile.module';

@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationService {

  constructor() { }

  private listOfUsers: MyProfile[]= [
    new MyProfile ('profile1','Password11'),
    new MyProfile ('profile2','Password11'),
    new MyProfile ('profile3','Password11')

  ]

  private isLoggedIn!:boolean;
  statusChanged = new Subject<boolean>();
  private currentUser!:MyProfile;


  newUser(newProfile: MyProfile):boolean{

   const alreadyRgd = this.listOfUsers.find((opinion,index,fullOpinion)=>{
          return opinion.username == newProfile.username;
        });

    if(!alreadyRgd){        
       this.listOfUsers.push(newProfile);
       return true;
    } else {
      
      return false;
    }
  }

  logIn (profile: MyProfile){
    const loging = this.listOfUsers.find((opinion,index,fullOpinion)=>{
      return profile.username ==opinion.username && profile.password== opinion.password;
    });

    if(loging){
      this.isLoggedIn=true;
      this.currentUser=profile;
      this.statusChanged.next(true);
      return true;
      
    } else {
      this.statusChanged.next(false);
      return false;
    }

  }

  logOut() {
    this.isLoggedIn=false;
    return this.statusChanged.next(false);
  }

  getCurrentUser(){
    return this.currentUser;

  }
  setCurrentUser(currentUser:MyProfile) {
    this.currentUser=currentUser;
  }

  checkLogIn() {
    return this.isLoggedIn;
  }

  updateProfile(newProfile: MyProfile) {
    const indexAt = this.listOfUsers.findIndex((person,ind,persons)=> {
      return person.username === newProfile.username;
    });
    this.listOfUsers.splice(indexAt,1,newProfile);
    
  }

  getNbrUsers() {
    return this.listOfUsers.length;
  }

  

}
