import { Component, OnInit } from '@angular/core';
import { OpinionService } from '../opinion-service/opinion.service';
import { Opinion } from '../opinion.model';

@Component({
  selector: 'app-opinion-list',
  templateUrl: './opinion-list.component.html',
  styleUrls: ['./opinion-list.component.css']
})
export class OpinionListComponent implements OnInit {

  selectedOpinions! : Opinion[];
  filteredStatus='';
  constructor(private opinionService : OpinionService) { }

  ngOnInit(): void {
    this.selectedOpinions= this.opinionService.getList();
    this.opinionService.opinionChanged.subscribe(
      (opinions: Opinion[]) => {
        this.selectedOpinions= opinions;
      }
    );
  }

}
