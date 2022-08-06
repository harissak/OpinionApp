import { Component } from '@angular/core';
import { LoginRegistrationService } from './my-profile/my-profile-service/LoginRegistration.service';
import { OpinionService } from './opinion/opinion-service/opinion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'opinionPrj';
}
