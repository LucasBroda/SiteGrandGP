import { Component, OnInit } from '@angular/core';
import { ResultIndivEvent, ResultIndivResult } from "../../../interfaces/checkin.interface";
import { ApiEventService } from "../../../services/api-event.service";
import { ApiDivService } from "../../../services/api-div.service";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  resultIndiv: ResultIndivEvent[] = []

  eventId: string = "866"
  eventDiv: string = "D1H"

  constructor(private httpService: HttpClient, private eventService: ApiEventService, private divService: ApiDivService) {
    // rien
  }

  ngOnInit(): void {
    this.getResultIndiv()
  }

  async getResultIndiv() {
    if (!environment.bidon) {
      this.eventId = this.eventService.eventId
      this.eventDiv = this.divService.divId
    }
    await this.httpService.get<ResultIndivResult>(environment.proLiveSportApi + this.eventService.eventId + "/" + this.divService.divId + "/resultIndiv/").forEach(
      (resultGetApi: ResultIndivResult) => {
        console.log(resultGetApi)
        this.resultIndiv = resultGetApi.result
      })
    return this.resultIndiv
  }
}
