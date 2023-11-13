import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignaturePad } from 'angular2-signaturepad';
import { firstValueFrom } from 'rxjs';
import { CheckinStartlist, CheckinStartlistResult, CheckinTeamList, CheckinTeamListResult } from 'src/app/interfaces/checkin.interface';
import { ApiCheckinService } from 'src/app/services/api-checkin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkin-athlete-choice',
  templateUrl: './athlete-choice.component.html',
  styleUrls: ['./athlete-choice.component.css']
})
export class CheckinAthleteChoiceComponent implements OnInit, AfterViewInit {
  public teamName: string = ""
  public teamStars: number = 0
  public AthleteList: CheckinStartlist[] = []

  public NbAthleteTeam: number = 0;
  public nbAthletesNonSupp = 80 // dossard après lequel on commence les athlètes supp

  // utilisé que par les duathlons bizarres de Calais
  public relayPossibleAthletes: CheckinStartlist[] = [] // liste d'Athlètes ayant un bib
  public relayActualAthletes: string = "" // format "1|2|3..."
  public relayIsValid = false
  public coursesCalais = [0, 1, 2, 3, 4]
  public relayApi = ""
  public message = ""

  @ViewChildren('.relaySelector') things: QueryList<any>

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 500,
    'canvasHeight': 250,
    'backgroundColor': 'rgb(255,255,255)',
  };
  signatureImg: string;
  public signatureSave: string;
  public signatureSaveDate: string;
  public signatureSaveCoachData: string;

  constructor(private route: ActivatedRoute, private router: Router, public CheckinService: ApiCheckinService, private httpService: HttpClient) { }

  ngOnInit(): void {
    if (this.CheckinService.EventId === 0) {
      this.router.navigate(["checkin"]);
    } else {
      this.GetAthleteList();
      this.GetTeamData()
      this.getRelayData()
    }
  }


  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 2);
    this.signaturePad.clear();
    this.drawComplete();

  }

  private GetAthleteList() {
    console.log(environment.proLiveSportApi + this.CheckinService.EventId + "/" + this.CheckinService.RaceName);

    this.httpService.get<CheckinStartlistResult>(environment.proLiveSportApi + this.CheckinService.EventId + "/" + this.CheckinService.RaceName + "/liveStartlist/" + this.route.snapshot.paramMap.get('team') + "/").subscribe((resultGetAPI: CheckinStartlistResult) => {
      this.AthleteList = resultGetAPI.result;

      var i = 0;
      this.AthleteList.forEach(athlete => {
        if (athlete.bib > 0 && athlete.bib <= this.nbAthletesNonSupp) {
          i++;
        }
      });
      this.NbAthleteTeam = i;
    })
  }

  private async GetTeamData() {
    let resultGetAPI: CheckinTeamListResult = await firstValueFrom(this.httpService.get<CheckinTeamListResult>(environment.proLiveSportApi + this.CheckinService.EventId + "/" + this.CheckinService.RaceName + "/resultGeneral/" + this.route.snapshot.paramMap.get('team') + "/"))
    this.teamName = resultGetAPI.result[0].team
    this.teamStars = resultGetAPI.result[0].schoolStar
    this.signatureImg = resultGetAPI.result[0].teamCheckInSign;
    this.signatureSave = resultGetAPI.result[0].teamCheckInSign;
    this.signatureSaveDate = resultGetAPI.result[0].teamCheckInSignDate;
    this.signatureSaveCoachData = resultGetAPI.result[0].teamCheckInSignCoachData;
    this.signaturePad.fromDataURL(this.signatureSave);

    this.relayApi = resultGetAPI.result[0].teamRelayList
    if (this.relayApi != "") {
      this.message = "équipe de relai déjà présente : " + this.relayApi
    }

    console.log("relayApi : " + this.relayApi)
  }

  private getRelayData() {
    if (!(this.route.snapshot.paramMap.get("event") == "867")) {
      return
    }
    this.relayPossibleAthletes = []
    this.httpService.get<CheckinStartlistResult>(environment.proLiveSportApi + this.CheckinService.EventId + "/" + this.CheckinService.RaceName + "/liveStartlist/" + this.route.snapshot.paramMap.get('team') + "/").subscribe((resultGetAPI: CheckinStartlistResult) => {
      resultGetAPI.result.forEach(element => {
        if (element.bib != 0) {
          this.relayPossibleAthletes.push(element)
        }
      });
    });
  }

  public DeleteBib(license: string) {
    this.httpService.post(environment.proLiveSportApi + this.CheckinService.EventId + "/" + this.CheckinService.RaceName + "/liveStartlist/" + this.route.snapshot.paramMap.get('team'), { action: "DeleteBib", license: license }).subscribe((result: any) => {
      if (result?.success === true) {
        console.log("Delete bib success");

        this.GetAthleteList();
        this.getRelayData()
      } else {
        console.log("Delete bib error");
      }
    });

  }

  public PutTeam(license: string) {
    console.log("Put bib team");

    this.httpService.post(environment.proLiveSportApi + this.CheckinService.EventId + "/" + this.CheckinService.RaceName + "/liveStartlist/" + this.route.snapshot.paramMap.get('team') + "/", { action: "PutTeam", license: license }).subscribe((result: any) => {
      if (result?.success === true) {
        console.log("Put team bib success");

        this.GetAthleteList();
        this.getRelayData()
      } else {
        console.log("Put team bib error");

      }
    });

  }

  public PutSupp(license: string) {
    console.log("Put bib supp");

    this.httpService.post(environment.proLiveSportApi + this.CheckinService.EventId + "/" + this.CheckinService.RaceName + "/liveStartlist/" + this.route.snapshot.paramMap.get('team') + "/", { action: "PutSupp", license: license }).subscribe((result: any) => {
      if (result?.success === true) {
        console.log("Put supp bib success");

        this.GetAthleteList();
        this.getRelayData()
      } else {
        console.log("Put team bib error");
      }
    });
  }

  public TeamValidation() {
    let coachDataValue = "";
    const coachDataInput = document.getElementById('teamCoachData') as HTMLInputElement | null;
    if (coachDataInput != null) {
      coachDataValue = coachDataInput.value;
    }
    console.log("CoachData: " + coachDataValue);
    console.log("SignatureImg: " + this.signatureImg);





    this.httpService.post(environment.proLiveSportApi + this.CheckinService.EventId + "/" + this.CheckinService.RaceName + "/liveStartlist/" + this.route.snapshot.paramMap.get('team') + "/", { action: "PutTeamSignature", signature: this.signatureImg, coachData: coachDataValue }).subscribe((result: any) => {
      if (result?.success === true) {
        console.log("Put team signature success");
        console.log(environment.proLiveSportApi + this.CheckinService.EventId + "/" + this.CheckinService.RaceName + "/liveStartlist/" + this.route.snapshot.paramMap.get('team') + "/");

        this.GetTeamData();

      } else {
        console.log("Put team signature error");
      }
    });
  }

  public drawStart() {
  }

  public drawComplete() {
    //console.log(this.signaturePad.toDataURL());
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
  }

  public clearSignature() {
    this.signaturePad.clear();
  }

  public confirmRelayAthletes() {
    this.relayActualAthletes = ""
    for (let i of this.coursesCalais) {
      let athlete1 = document.querySelector("#relay" + i + "Athlete1") as HTMLSelectElement
      let athlete2 = document.querySelector("#relay" + i + "Athlete2") as HTMLSelectElement
      if (athlete1.value == "" || athlete2.value == "") {
        this.relayIsValid = false
        console.error("Veuillez choisir TOUS les athlètes")
        return
      }
      this.relayActualAthletes += athlete1.value
      this.relayActualAthletes += "|"
      this.relayActualAthletes += athlete2.value
      // on ajoute un | à la fin si c'est pas le dernier
      if (!(i == this.coursesCalais[this.coursesCalais.length - 1])) {
        this.relayActualAthletes += "|"
      }
    }

    this.relayIsValid = true
    this.postRelayAthletes()
  }

  private postRelayAthletes() {
    console.log(this.relayActualAthletes)

    if (this.relayIsValid) {
      let url = environment.proLiveSportApi + this.CheckinService.EventId + "/" + this.CheckinService.RaceName + "/resultGeneral/" + this.route.snapshot.paramMap.get("team") + "/"
      let body = {
        action: "teamRelayList",
        teamRelayList: this.relayActualAthletes
      }
      this.httpService.post(url, body).subscribe((result: any) => {
        if (result.success) {
          console.log("RELAI FONCTIONNE")
          this.message = "Athlètes pour le relai enregistrés : " + this.relayActualAthletes
        } else {
          console.log("RELAI FONCTIONNE")
          this.message = "UNE ERREUR EST SURVENUE, VEUILLEZ RÉESSAYER"
        }
      })
    }
  }
}
