import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { ApiEventService } from "../../../services/api-event.service";
import { ApiDivService } from "../../../services/api-div.service";
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public eventService: ApiEventService, private divService: ApiDivService, private route: ActivatedRoute) {
    // rien
  }

  ngOnInit(): void {
    let etapes = document.querySelector("#etapes") as HTMLSelectElement
    let divisions = document.querySelector("#divisions") as HTMLSelectElement
    this.eventService.setEvent(this.route.firstChild?.snapshot.paramMap.get("city")!)
    etapes.value = this.eventService.eventId
    this.router.events.pipe(
      filter(elem => elem instanceof NavigationEnd),
      map(() => this.route),
      map(route => {while (route.firstChild) route = route.firstChild; return route})
    ).subscribe(route => {
      console.log("Change from home-component :")
      this.eventService.setEvent(route.snapshot.paramMap.get("city")!)
      this.divService.setDiv(route.snapshot.paramMap.get("div")!)
      etapes.value = this.eventService.eventId
      if(this.divService.divId != null) {
        divisions.value = this.divService.divId
      }
    })
  }

  onChangeCity(event: any) {
    // this.eventService.setEvent((event.target as HTMLSelectElement).value)
    let id = (event.target as HTMLSelectElement).value
    if (id != "") {
      this.router.navigate(['event/infos/']).then(() => this.router.navigate(['event/infos/', id]))
    }
  }

  onChangeDivision(event: any) {
    // this.divService.setDiv((event.target as HTMLSelectElement).value)
    let div = (event.target as HTMLSelectElement).value
    if (div != "") {
      this.router.navigate(['event/' + this.eventService.eventId + "/" + div])
    }
  }
}
