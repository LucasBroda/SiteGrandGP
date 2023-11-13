import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AthletesResult, Athletes, TeamsResult, Teams } from 'src/app/interfaces/checkin.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-check-area-athletes',
  templateUrl: './check-area-athletes.component.html',
  styleUrls: ['./check-area-athletes.component.css']
})
export class CheckAreaAthletesComponent implements OnInit, OnChanges {
  
  athletesGlobaux: Athletes[] = []
  athletesGlobaux2: Athletes[] = []
  athletes: Athletes[] = []
  teams: Teams[] = []
  teamsRanKPoint: Teams[] = []
  rankPoint: number[] = []

  constructor(private httpService: HttpClient, private route: ActivatedRoute) {
    // rien
  }

  ngOnInit(): void {
    this.getAthletes()
  }
  
  ngOnChanges() {
    /**********THIS FUNCTION WILL TRIGGER WHEN PARENT COMPONENT UPDATES 'someInput'**************/
    //Write your code here
     console.log("ALED");
    } 

  async getAthletes() {
    let eventId = this.route.snapshot.paramMap.get("event")
    let divId = this.route.snapshot.paramMap.get("div")
    await this.httpService.get<AthletesResult>(environment.proLiveSportApi + eventId + "/" + divId + "/startlist/").forEach(
      (resultGetApi: AthletesResult) => {
        this.httpService.get<AthletesResult>(environment.proLiveSportApi + eventId + "/" + divId + "/resultGeneral/").forEach(
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
            this.httpService.get<TeamsResult>(environment.proLiveSportApi + eventId + "/" + divId + "/resultGeneral/").forEach(
              (resultGetApi3: AthletesResult) => {
                this.teams = resultGetApi3.result

                this.teams.forEach((teams: Teams) => {
                  this.teamsRanKPoint.push(teams)
                })
              })
          })

      })
  }

  confirmTeam(teamName:string) {
    console.error("/!\\ Fonction à implémenter /!\\")
  }
}
