import { Component, OnInit } from '@angular/core';
import { Athletes, AthletesResult, Teams, TeamsResult } from "../../../interfaces/checkin.interface";
import { ApiEventService } from "../../../services/api-event.service";
import { ApiDivService } from "../../../services/api-div.service";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {
  athletesGlobaux: Athletes[] = []
  athletesGlobaux2: Athletes[] = []
  teams: Teams[] = []
  teamsRanKPoint: Teams[] = []
  rankPoint: number[] = []
  titulaires: Athletes[] = []
  remplacants: Athletes[] = []

  eventId: string = "866"
  eventDiv: string = "D1H"

  constructor(private httpService: HttpClient, private eventService: ApiEventService, private divService: ApiDivService) { }

  ngOnInit(): void {
    this.getAthletes()
  }

  async getAthletes() {
    if (!environment.bidon) {
      this.eventId = this.eventService.eventId
      this.eventDiv = this.divService.divId
    }
    await this.httpService.get<AthletesResult>(environment.proLiveSportApi + this.eventService.eventId + "/" + this.divService.divId + "/startlist/").forEach(
      (resultGetApi: AthletesResult) => {
        this.httpService.get<AthletesResult>(environment.proLiveSportApi + this.eventService.eventId + "/" + this.divService.divId + "/resultGeneral/").forEach(
          (resultGetApi2: AthletesResult) => {
            this.athletesGlobaux = resultGetApi.result
            this.athletesGlobaux2 = resultGetApi2.result

            /** For the table with the supp players **/
            for (let i = 0; i < this.athletesGlobaux.length; i++) {
              for (let j = 0; j < this.athletesGlobaux2.length; j++) {
                if (this.athletesGlobaux[i]["team"] === this.athletesGlobaux2[j]["team"]) {
                  this.athletesGlobaux[i]["rank"] = this.athletesGlobaux2[j]["rank"]
                  this.athletesGlobaux[i]["point"] = this.athletesGlobaux2[j]["point"]
                }
                if (this.athletesGlobaux[i]["team"] === this.athletesGlobaux2[j]["team"]) {
                  this.athletesGlobaux[i]["race"] = this.athletesGlobaux2[j]["race"]
                }
              }
            }
            /** Allow us to get all the players who are not substitutes **/
            this.athletesGlobaux.forEach((athletes: Athletes) => {
              if (athletes.athleteType === "TEAM") {
                this.titulaires.push(athletes)
              }
              else {
                this.remplacants.push(athletes)
              }
            })
            this.httpService.get<TeamsResult>(environment.proLiveSportApi + this.eventService.eventId + "/" + this.divService.divId + "/resultGeneral/").forEach(
              (resultGetApi3: AthletesResult) => {
                this.teams = resultGetApi3.result

                this.teams.forEach((teams: Teams) => {
                  this.teamsRanKPoint.push(teams)
                })
              })
          })
      })
    return this.titulaires, this.remplacants
  }
}
