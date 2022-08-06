import { Component, OnInit } from '@angular/core';
import { LoginRegistrationService } from '../my-profile/my-profile-service/LoginRegistration.service';
import { OpinionService } from '../opinion/opinion-service/opinion.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  opinionList= new Map();
  nbrComments!:number;
  nbrUsers!:number;
  nbrAboutWho!:number;

  constructor(private opinionService: OpinionService, private logRegSer: LoginRegistrationService) { }

  ngOnInit(): void {

    this.opinionList= this.opinionService.checkArray();
    this.nbrComments = this.opinionService.getNbrComments();
    this.nbrUsers = this.logRegSer.getNbrUsers();
    this.nbrAboutWho = this.opinionService.getNbrAboutWho();

  }

}
