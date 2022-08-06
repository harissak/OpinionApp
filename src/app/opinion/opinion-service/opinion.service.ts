import { CdkPortal } from '@angular/cdk/portal';
import { EventEmitter, Injectable } from '@angular/core';
import { Opinion } from '../opinion.model';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {

  constructor() { }

  private isTrue:boolean =false;
  private filteredList!: Opinion[];
  private nbrAboutWho!:number;
  
  opinionChanged = new EventEmitter<Opinion[]>();
  private opinionList: Opinion[]= [
    new Opinion ('Nikad gore iskustvo u nasoj opcini zahvaljujuci ovoj budali Nikad gore iskustvo u nasoj opcini zahvaljujuci ovoj budali Nikad gore iskustvo u nasoj opcini zahvaljujuci ovoj budali',
    'Mujo Mujic',
    'samoNick'),
    new Opinion ('Nikad gore iskustvo u nasoj opcini zahvaljujuci ovoj budali',
    'Slavica Draguz',
    'slavica'),
    new Opinion ('Nikad gore iskustvo u nasoj opcini zahvaljujuci ovoj budali',
    'Zeljko Topoljak',
    'zeljkic')    
  ];


  getList(){
    if(!this.isTrue){
      return this.opinionList.slice().reverse();
     
    }else {
      
     this.isTrue=false;
      return this.filteredList.slice().reverse();

    }
  }

  addOpinion(opinion: Opinion){
    this.isTrue=false;
    this.opinionList.push(opinion);
    this.opinionChanged.emit(this.opinionList.slice().reverse());

  }

  deleteItem(id:number){
    this.isTrue=false;
    const lenght = this.opinionList.length;
    const newId = (lenght-1)-id;
    this.opinionList.splice(newId,1);
    this.opinionChanged.emit(this.opinionList.slice().reverse());
  }

  setValue(opinion:Opinion[]){
    this.isTrue = true;
    this.filteredList=opinion;
    this.opinionChanged.emit(this.filteredList.slice().reverse());

  }
  checkArray(){
    let newArray: string[]=[];
    let howManyTimes=0;
    const commentsMap = new Map();
    
    
    for(const items of this.opinionList){

      if(!newArray.includes(items.aboutWho)){
        newArray.push(items.aboutWho);
            
        } 
    }
  
    this.nbrAboutWho=newArray.length;
    for(let i=0; i<newArray.length; i++) {
       howManyTimes=0;
      for(const abWho of this.opinionList) {
        
        if(newArray[i]===abWho.aboutWho){
          howManyTimes++;
        }
      } 
     commentsMap.set(newArray[i],howManyTimes);

    }

    return commentsMap;
  }

 
  getNbrComments() {
    return this.opinionList.length;
    
  }

  getNbrAboutWho() {
    return this.nbrAboutWho;
  }


}
