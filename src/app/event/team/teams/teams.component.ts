import { Component, OnInit } from '@angular/core';
import { ResultTeamEvent, ResultTeamResult } from "../../../interfaces/checkin.interface";
import { ApiEventService } from "../../../services/api-event.service";
import { ApiDivService } from "../../../services/api-div.service";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-team',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  resultTeam: ResultTeamEvent[] = []

  eventId: string = "866"
  eventDiv: string = "D1F"
  constructor(private httpService: HttpClient, private eventService: ApiEventService, private divService: ApiDivService) {
    // rien
  }

  ngOnInit(): void {
    this.getResultTeam()
  }

  async getResultTeam() {
    if (!environment.bidon) {
      this.eventId = this.eventService.eventId
      this.eventDiv = this.divService.divId
    }
    await this.httpService.get<ResultTeamResult>(environment.proLiveSportApi + this.eventService.eventId + "/" + this.divService.divId + "/resultTeam/").forEach(
      (resultGetApi: ResultTeamResult) => {
        this.resultTeam = resultGetApi.result
      })
    return this.resultTeam
  }

}
