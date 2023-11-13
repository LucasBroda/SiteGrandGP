import { Component, OnInit } from '@angular/core';
import { StartListOfEvent, StartListResult } from "../../interfaces/checkin.interface";
import { ApiEventService } from "../../services/api-event.service";
import { ApiDivService } from "../../services/api-div.service";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-start-list',
  templateUrl: './start-list.component.html',
  styleUrls: ['./start-list.component.css']
})
export class StartListComponent implements OnInit {

  startList: StartListOfEvent[] = []

  remplacants: StartListOfEvent[] = []

  athletesGlobaux: StartListOfEvent[] = []

  eventId: string = "866"
  eventDiv: string = "D1H"

  constructor(private httpService: HttpClient, private eventService: ApiEventService, private divService: ApiDivService) {
    // rien
  }

  ngOnInit(): void {
    this.getStartList()
  }

  async getStartList() {
    if (!environment.bidon) {
      this.eventId = this.eventService.eventId
      this.eventDiv = this.divService.divId
    }
    await this.httpService.get<StartListResult>(environment.proLiveSportApi + this.eventService.eventId + "/" + this.divService.divId + "/startlist/").forEach(
      (resultGetApi: StartListResult) => {
        this.athletesGlobaux = resultGetApi.result

        /** Allow us to get all the players who are not substitutes **/
        this.athletesGlobaux.forEach((athletes: StartListOfEvent) => {
          if (athletes.athleteType === "TEAM") {
            this.startList.push(athletes)
          }
          else {
            this.remplacants.push(athletes)
          }
        })
      })
    return this.startList
  }
}
