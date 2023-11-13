import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { AccueilComponent } from './struct/accueil/accueil.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './struct/footer/footer.component';
import { CheckinDivisionChoiceComponent } from './checkin/division-choice/division-choice.component';
import { CheckinTeamChoiceComponent } from './checkin/team-choice/team-choice.component';
import { CheckinAthleteChoiceComponent } from './checkin/athlete-choice/athlete-choice.component';
import { Error404Component } from './struct/error404/error404.component';
import { CheckinHomeComponent } from './checkin/home/home.component';
import { ApiCheckinService } from './services/api-checkin.service';
import { CheckinService } from './services/checkin.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JugePenaltyComponent } from './juge/penalty/penalty.component';
import { JugePenaltyAddComponent } from './juge/penalty-add/penalty-add.component';
import { JugePenaltyArchiveComponent } from './juge/penalty-archive/penalty-archive.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SignatureComponent } from './checkin/signature/signature.component';
import { HomeComponent } from './event/home/home/home.component';
import { CallComponent } from './event/call/call/call.component';
import { GeneralRankingComponent } from './event/general-ranking/general-ranking/general-ranking.component';
import { StageComponent } from './event/stage/stage/stage.component';
import { StartListComponent } from './event/start-list/start-list.component';
import { TeamsComponent } from './event/team/teams/teams.component';
import { ResultComponent } from './event/result/result/result.component';
import { ChoiseDatasComponent } from './event/choise-datas/choise-datas.component';
import { MediaComponent } from './media/media.component';
import { EventInfosComponent } from './event-infos/event-infos.component';
import { CheckAreaHomeComponent } from './checkarea/home/home.component';
import { CheckAreaAthletesComponent } from './checkarea/check-area-athletes/check-area-athletes.component';
import { StarRatingComponent } from './checkin/star-rating/star-rating.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FooterComponent,
    CheckinDivisionChoiceComponent,
    CheckinTeamChoiceComponent,
    CheckinAthleteChoiceComponent,
    Error404Component,
    CheckinHomeComponent,
    JugePenaltyComponent,
    JugePenaltyAddComponent,
    JugePenaltyArchiveComponent,
    SignatureComponent,
    HomeComponent,
    CallComponent,
    GeneralRankingComponent,
    StageComponent,
    StartListComponent,
    TeamsComponent,
    ResultComponent,
    ChoiseDatasComponent,
    MediaComponent,
    EventInfosComponent,
    CheckAreaHomeComponent,
    CheckAreaAthletesComponent,
    StarRatingComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        SignaturePadModule,
    ],
  providers: [CheckinService, ApiCheckinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
