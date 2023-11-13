import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Data } from '../model/data';
import { InfoEvent } from '../model/infoEvent';
import { ApiEventService } from '../services/api-event.service';
import {ApiDivService} from "../services/api-div.service";

@Component({
  selector: 'app-event-infos',
  templateUrl: './event-infos.component.html',
  styleUrls: ['./event-infos.component.css']
})
export class EventInfosComponent implements OnInit {

  public urlInfos = "assets/data.json"

  public infosEvent: InfoEvent = <InfoEvent>{}

  constructor(private httpService: HttpClient, public eventService: ApiEventService, public divService : ApiDivService) {
    // rien
  }

  ngOnInit(): void {
    this.httpService.get<Data>(this.urlInfos).subscribe((response) => {
      this.infosEvent = response.infosEvents.filter(elem => elem.id.toString() == this.eventService.eventId)[0]
    })
  }

}
