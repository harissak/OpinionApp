import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  private isLoggedIn:boolean = false;
  statusChanged = new EventEmitter<boolean>();

  logIn() {
    this.isLoggedIn=true;
    this.statusChanged.emit(this.isLoggedIn);
    return this.isLoggedIn;
  }

  logOut() {
    this.isLoggedIn=false;
    this.statusChanged.emit(this.isLoggedIn);
    return this.isLoggedIn;
  }

  getLogInStatus(){
    this.statusChanged.emit(this.isLoggedIn);
    return this.isLoggedIn;
  }
}
