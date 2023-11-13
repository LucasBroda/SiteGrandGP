import { Component, OnInit } from '@angular/core';
import { ApiEventService } from "../../services/api-event.service";
import { ApiDivService } from "../../services/api-div.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-choise-datas',
  templateUrl: './choise-datas.component.html',
  styleUrls: ['./choise-datas.component.css']
})
export class ChoiseDatasComponent implements OnInit {

  constructor(public eventService: ApiEventService, private divService: ApiDivService, public raceService: ApiDivService, private route: ActivatedRoute) {
    this.divService.setDiv(this.route.snapshot.paramMap.get("div")!)
  }

  ngOnInit(): void {
  }
}
