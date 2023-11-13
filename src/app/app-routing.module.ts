import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from "./struct/accueil/accueil.component";
import { Error404Component } from './struct/error404/error404.component';
import { CheckinTeamChoiceComponent } from './checkin/team-choice/team-choice.component';
import { CheckinAthleteChoiceComponent } from './checkin/athlete-choice/athlete-choice.component';
import { CheckinDivisionChoiceComponent } from './checkin/division-choice/division-choice.component';
import { CheckinHomeComponent } from './checkin/home/home.component';
import { JugePenaltyComponent } from './juge/penalty/penalty.component';
import { JugePenaltyAddComponent } from './juge/penalty-add/penalty-add.component';
import { HomeComponent } from "./event/home/home/home.component";
import { StageComponent } from "./event/stage/stage/stage.component";
import { GeneralRankingComponent } from "./event/general-ranking/general-ranking/general-ranking.component";
import { StartListComponent } from "./event/start-list/start-list.component";
import { CallComponent } from "./event/call/call/call.component";
import { TeamsComponent } from "./event/team/teams/teams.component";
import { ResultComponent } from "./event/result/result/result.component";
import { MediaComponent } from './media/media.component';
import { EventInfosComponent } from './event-infos/event-infos.component';
import { CheckAreaHomeComponent } from './checkarea/home/home.component';
import { CheckAreaAthletesComponent } from './checkarea/check-area-athletes/check-area-athletes.component';


const routes: Routes = [
  
  //EventDetail
  { path: '', component: AccueilComponent },


  //Checkin-in
  {
    path: 'checkin', component: CheckinHomeComponent,
    children: [
      {
        path: ':event',
        component: CheckinDivisionChoiceComponent
      },
      {
        path: ':event/:race',
        component: CheckinTeamChoiceComponent
      },
      {
        path: ':event/:race/:team',
        component: CheckinAthleteChoiceComponent
      }
    ]
  },


  //Juge
  {
    path: 'juge', component: JugePenaltyComponent,
    children: [
      {
        path: ':event',
        component: JugePenaltyComponent
      },
      {
        path: ':event/:race',
        component: JugePenaltyComponent
      },
      {
        path: ':event/:race/:bib',
        component: JugePenaltyAddComponent
      }
    ]
  },

  //Event
  {
    path: 'event', component: HomeComponent,
    children: [
      {
        path: ':city',
        component: StageComponent
      },
      {
        path: 'infos/:city',
        component: EventInfosComponent
      },
      {
        path: ':city/:div',
        component: GeneralRankingComponent
      },
      {
        path: ':city/:div/startlist',
        component: StartListComponent
      },
      {
        path: ':city/:div/scratch',
        component: ResultComponent
      },
      {
        path: ':city/:div/etape',
        component: TeamsComponent
      },
      {
        path: ':city/:div/general',
        component: GeneralRankingComponent
      },
      {
        path: ':city/:div/call',
        component: CallComponent
      },
    ]
  },

  //check-area
  {
    path: 'checkarea', component: CheckAreaHomeComponent,
    children: [
      {path: ':event/:div', component: CheckAreaAthletesComponent},
    ]
  },
  
  //media
  { path: 'media', component: MediaComponent},

  //Other
  { path: '**', component: Error404Component } //404 error


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }



