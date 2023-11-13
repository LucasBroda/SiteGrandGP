import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { ApiCheckinService } from 'src/app/services/api-checkin.service';

@Component({
  selector: 'app-checkin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class CheckinHomeComponent implements OnInit {
  public eventId: number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private checkinService: ApiCheckinService) {
    // rien
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(elem => elem instanceof NavigationEnd),
      map(() => this.route),
      map(route => {while (route.firstChild) route = route.firstChild; return route})
    ).subscribe(route => {
      console.log("Change from home-component :")
      this.checkinService.SetEvent(Number(route.snapshot.paramMap.get("event")))
    })
  }

}
