import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { LoginRegistrationService } from '../my-profile/my-profile-service/LoginRegistration.service';


@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {
  filteredStatus='';

  constructor(private loginService: LoginRegistrationService) { }

  ngOnInit(): void {
    this.check();
   
  
  }

  check():boolean {
    return this.loginService.checkLogIn();
  }

}
