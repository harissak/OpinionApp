import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRegistrationService } from 'src/app/my-profile/my-profile-service/LoginRegistration.service';
import { OpinionService } from '../../opinion-service/opinion.service';
import { Opinion } from '../../opinion.model';

@Component({
  selector: 'app-opinion-insert',
  templateUrl: './opinion-insert.component.html',
  styleUrls: ['./opinion-insert.component.css']
})
export class OpinionInsertComponent implements OnInit {

  @ViewChild('f') opinionText!: ElementRef;
  @ViewChild('opinionAboutWho') aboutWho!: ElementRef;
  @ViewChild('anonymous') anonymous!: ElementRef;
  addCommentForm!: FormGroup;
  isAnonymous=true;
  
  constructor(private serviceOpinion: OpinionService, private loginService: LoginRegistrationService, private router:Router) { }

  ngOnInit(): void {

    this.addCommentForm = new FormGroup({
      'aboutWho': new FormControl(null, Validators.required),
      'comment':new FormControl(null, Validators.required),
      'anonymous': new FormControl(false)
    });
  }

   onSubmit() {
    const aboutWho = this.addCommentForm.value['aboutWho'];
    const opinion = this.addCommentForm.value['comment'];
    const anonymous = this.addCommentForm.value['anonymous'];
    let nickName;

    if(anonymous){
      nickName='Anonymous';
    } else {
      const user = this.loginService.getCurrentUser();
      nickName=user.username;
    }

    const newOpinion = new Opinion(opinion,aboutWho,nickName);
    this.serviceOpinion.addOpinion(newOpinion);
    this.addCommentForm.reset();

   }

  
  

}
