import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoginRegistrationService } from 'src/app/my-profile/my-profile-service/LoginRegistration.service';
import { OpinionService } from '../../opinion-service/opinion.service';
import { Opinion } from '../../opinion.model';

@Component({
  selector: 'app-opinion-item',
  templateUrl: './opinion-item.component.html',
  styleUrls: ['./opinion-item.component.css']
})
export class OpinionItemComponent implements OnInit {
  @Input() opinion!: Opinion;
  @Input() indexOf!: number;
  currentUser='';

  constructor(private opinionService:OpinionService, private route: ActivatedRoute, 
    private router:Router, private logRegSer: LoginRegistrationService) { }

  ngOnInit(): void {

  }

  deleteItem(){
    this.opinionService.deleteItem(this.indexOf);
  
  }

  getCurrentUser(){
    if(this.logRegSer.getCurrentUser()==null) {
       return this.logRegSer.getCurrentUser();
      
    } else {
      return this.logRegSer.getCurrentUser().username;
      
    }
  }

  filterByNameOfPerson(name:string,column:string) {
    console.log('1');

  
    let listFiltered:Opinion[];
  
    if(column =='aboutWho'){
       listFiltered = this.opinionService.getList().filter((opinion,index,fullOpinion)=>{
        return opinion.aboutWho == name;

      });
      console.log('2');
  
    } else{
      
       listFiltered = this.opinionService.getList().filter((opinion,index,fullOpinion)=>{
        return opinion.nickName == name;

      });
  
    }
   
    this.opinionService.setValue(listFiltered); 
    this.opinionService.getList();
    this.router.navigate(['../../opinion-wall/filter',name])

  }



}
