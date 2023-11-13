import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiEventService } from "../../../services/api-event.service";
import { ApiDivService } from "../../../services/api-div.service";
import { GeneralRankingEvent, GeneralRankingResult } from "../../../interfaces/checkin.interface";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-general-ranking',
  templateUrl: './general-ranking.component.html',
  styleUrls: ['./general-ranking.component.css']
})
export class GeneralRankingComponent implements OnInit {

  rankList: GeneralRankingEvent[] = [];

  eventId: string = "866"
  eventDiv: string = "D1H"

  constructor(private httpService: HttpClient, private eventService: ApiEventService, private divService: ApiDivService) {}

  ngOnInit(): void {
    this.getRankList()
  }

  async getRankList() {
    if (!environment.bidon) {
      this.eventId = this.eventService.eventId
      this.eventDiv = this.divService.divId
    }
    await this.httpService.get<GeneralRankingResult>(environment.proLiveSportApi + this.eventService.eventId + "/" + this.divService.divId + "/resultGeneral/").forEach(
      (resultGetApi: GeneralRankingResult) => {
        console.log(resultGetApi)
        this.rankList = resultGetApi.result
      })
    return this.rankList
  }
}
