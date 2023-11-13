import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiEventService} from "../../../services/api-event.service";
import {ApiDivService} from "../../../services/api-div.service";

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {

  constructor(private router: Router, public eventService: ApiEventService, private divService: ApiDivService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onButtonDivision(div : string){
    this.divService.setDiv(div)
  }
}
