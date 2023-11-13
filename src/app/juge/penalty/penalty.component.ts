import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AthleteList, AthleteListResult, Penalitylist, PenalitylistResult } from 'src/app/interfaces/checkin.interface';
import { ApiCheckinService } from 'src/app/services/api-checkin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-juge-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class JugePenaltyComponent implements OnInit {

  public penalityArchive: Penalitylist[] = [];
  public AthleteList: AthleteList[] = [];
  public EventId: number = 867;
  public Division: string = "";

  constructor(private router: Router, private route: ActivatedRoute, public CheckinService: ApiCheckinService, private httpService: HttpClient) { }

  ngOnInit(): void {
    //this.GetPenalityList();
  }

  PenaltyAdd(bib: number) {

  }



  private GetPenalityList() {
    if (this.Division != "") {
      this.httpService.get<PenalitylistResult>(environment.proLiveSportApi + this.EventId + "/" + this.Division + "/penality/").subscribe((resultGetAPI: PenalitylistResult) => {
        this.penalityArchive = resultGetAPI.result;

      });
    }
  }

  private GetAthleteList() {
    if (this.Division != "") {
      this.httpService.get<AthleteListResult>(environment.proLiveSportApi + this.EventId + "/" + this.Division + "/startlist/").subscribe((resultGetAPI: AthleteListResult) => {
        this.AthleteList = resultGetAPI.result;

      });
    }
  }


  public LoadDivision(division: string) {
    this.Division = division;
    if (division === "") {
      this.AthleteList = [];
    } else {
      this.GetAthleteList();
    }
    this.GetPenalityList();
  }

  public Refresh() {
    this.LoadDivision(this.Division);
  }

  public DisplayAddPena(index: number) {
    if (this.AthleteList[index].displayBtn === true) {
      this.AthleteList[index].displayBtn = false;
    } else {
      this.AthleteList[index].displayBtn = true;
    }
  }

  public AddPena(bib: number, penaType: string) {
    console.log(bib + "=>" + penaType);

    this.httpService.post(environment.proLiveSportApi + this.EventId + "/" + this.Division + "/penality/", { action: "AddPena", athleteBib: bib, athletePena: penaType }).subscribe((result: any) => {
      if (result?.success === true) {
        console.log("Add penality success");

        //this.GetAthleteList();
        this.LoadDivision(this.Division);
      } else {
        console.log("Add penality error");

      }
    });
  }

}
