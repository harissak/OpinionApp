import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OpinionService } from '../opinion-service/opinion.service';
import { Opinion } from '../opinion.model';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {

  selectedOpinions! : Opinion[];
  @Input() opinion!: Opinion;
  aboutWho!:string;
  column!:string;


  constructor(private opinionService : OpinionService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.router.params
    .subscribe(
      (params: Params)=> {

        this.aboutWho= params['aboutWho'];
        this.column= params['column'];
      }
    );

    let listFiltered:Opinion[];

    if(this.column === 'aboutWho'){

      listFiltered = this.opinionService.getList().filter((opinion,index,fullOpinion)=>{
        return opinion.aboutWho == this.aboutWho;
      });

    } else {
      
       listFiltered = this.opinionService.getList().filter((opinion,index,fullOpinion)=>{
        return opinion.nickName == this.aboutWho;

      });
  
    }

    this.opinionService.setValue(listFiltered); 
   this.selectedOpinions= this.opinionService.getList();
    this.opinionService.opinionChanged.subscribe(
      (opinions: Opinion[]) => {
        this.selectedOpinions= opinions;
      }
    );

    

  }


}
