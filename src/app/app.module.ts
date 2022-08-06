import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OpinionComponent } from './opinion/opinion.component';
import { OpinionInsertComponent } from './opinion/opinion-list/opinion-insert/opinion-insert.component';
import { OpinionListComponent } from './opinion/opinion-list/opinion-list.component';
import { OpinionItemComponent } from './opinion/opinion-list/opinion-item/opinion-item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FilterListComponent } from './opinion/filter-list/filter-list.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { MyProfileComponent } from './my-profile/my-profile.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './my-profile/log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRegistrationService } from './my-profile/my-profile-service/LoginRegistration.service';
import { OpinionService } from './opinion/opinion-service/opinion.service';
import { FilterPipe } from './opinion/filter.pipe';
import { EditMyProfileComponent } from './my-profile/edit-my-profile/edit-my-profile.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OpinionComponent,
    OpinionInsertComponent,
    OpinionListComponent,
    OpinionItemComponent,
    NotFoundComponent,
    FilterListComponent,
    DropdownDirective,
    MyProfileComponent,
    LogInComponent,
    FilterPipe,
    EditMyProfileComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginRegistrationService,OpinionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
