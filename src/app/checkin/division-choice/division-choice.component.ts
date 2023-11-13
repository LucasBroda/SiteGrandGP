import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCheckinService } from 'src/app/services/api-checkin.service';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-checkin-division-choice',
  templateUrl: './division-choice.component.html',
  styleUrls: ['./division-choice.component.css'],
  providers: [CheckinService]
})
export class CheckinDivisionChoiceComponent implements OnInit {
  constructor(private router: Router, public CheckinService: ApiCheckinService) {
  }

  ngOnInit(): void {
    if (this.CheckinService.EventId == 0) {
      this.router.navigate(["checkin"]);
    }
  }
}
