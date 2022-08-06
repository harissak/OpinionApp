import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FilterListComponent } from './opinion/filter-list/filter-list.component';
import { OpinionListComponent } from './opinion/opinion-list/opinion-list.component';
import { OpinionComponent } from './opinion/opinion.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
 
  {path:'', redirectTo:'/opinion-wall/list', pathMatch:'full'},
  {path:'statistics',  component:StatisticsComponent},
  {path:'opinion-wall', component:OpinionComponent,children: [
    {path:'list', component:OpinionListComponent},
    {path:'filter/:column/:aboutWho', component:FilterListComponent },
  ]},       
   {path:'not-found', component:NotFoundComponent},
   {path:'**', redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
