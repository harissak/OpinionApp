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
    new Opinion ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies nisl eget est tincidunt finibus. Duis elementum, nisi fermentum molestie tincidunt, diam leo molestie nisl, sed interdum orci nisl mattis odio. Integer non odio libero. Curabitur mollis lacus ligula, quis malesuada urna fermentum vitae. In posuere sapien eu dolor aliquet interdum. Suspendisse potenti. Suspendisse efficitur, erat vel consectetur facilisis, tortor mi condimentum risus, congue dapibus libero quam vitae nibh. Nullam ut dignissim diam',
    'Charles Leclerc',
    'profil1 test'),
    new Opinion ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies nisl eget est tincidunt finibus. Duis elementum, nisi fermentum molestie tincidunt, diam leo molestie nisl, sed interdum orci nisl mattis odio. Integer non odio libero. Curabitur mollis lacus ligula, quis malesuada urna fermentum vitae. In posuere sapien eu dolor aliquet interdum. Suspendisse potenti.',
    'Carlos Sainz',
    'profile2 test'),
    new Opinion ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies nisl eget est tincidunt finibus. Duis elementum, nisi fermentum molestie tincidunt, diam leo molestie nisl, sed interdum orci nisl mattis odio. Integer non odio libero. Curabitur mollis lacus ligula, quis malesuada urna fermentum vitae. In posuere sapien eu dolor aliquet interdum. Suspendisse potenti. Suspendisse efficitur, erat vel consectetur facilisis, tortor mi condimentum risus, congue dapibus libero quam vitae nibh. Nullam ut dignissim diam.',
    'Daniel Ricciardo',
    'profile3 test')    
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
