import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckinStartlistResult, CheckinTeamList, CheckinTeamListResult } from 'src/app/interfaces/checkin.interface';
import { ApiCheckinService } from 'src/app/services/api-checkin.service';
import { CheckinService } from 'src/app/services/checkin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkin-team-choice',
  templateUrl: './team-choice.component.html',
  styleUrls: ['./team-choice.component.css'],
  providers: []
})
export class CheckinTeamChoiceComponent implements OnInit {

  public TeamList: CheckinTeamList[] = [];
  public DataExport: String = "";

  constructor(private route: ActivatedRoute, private router: Router, public CheckinService: ApiCheckinService, private httpService: HttpClient) { }

  ngOnInit(): void {
    if (this.CheckinService.EventId == 0) {
      this.router.navigate(["checkin"]);
    }

    //this.RaceName = String(this.route.snapshot.paramMap.get('race'));
    this.CheckinService.RaceName = String(this.route.snapshot.paramMap.get('race'));

    if (this.CheckinService.RaceName === "EXPORT") {
      this.getExport();
    } else {
      this.getTeamList();
    }
  }

  private getTeamList() {
    console.log("current eventId : " + this.CheckinService.EventId);

    this.httpService.get<CheckinTeamListResult>(environment.proLiveSportApi + this.CheckinService.EventId + "/" + this.CheckinService.RaceName + "/resultGeneral/").subscribe((resultGetAPI: CheckinTeamListResult) => {
      this.TeamList = resultGetAPI.result;
    });
  }

  private getExport() {
    this.DataExport = "";
    console.log(environment.proLiveSportApi + this.CheckinService.EventId + "/" + this.CheckinService.RaceName + "/liveStartlist/");

    this.httpService.get<CheckinStartlistResult>(environment.proLiveSportApi + this.CheckinService.EventId + "/" + this.CheckinService.RaceName + "/liveStartlist/").subscribe((resultGetAPI: CheckinStartlistResult) => {
      console.log(resultGetAPI.result);


      var localText = "";
      resultGetAPI.result.forEach(function (item) {
        localText += item.race + "\t" + item.athleteId + "\t" + item.bib + "\t" + item.team + "\t" + item.athleteId2 + "\t" + item.lastname + "\t" + item.firstname + "\n";
      });
      this.DataExport = localText;
    });
  }
}
