import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiDivService {

  public divId: string = ""

  public divName: string = ""

  public raceName: string = ""

  public setDiv(divId: string) {
    this.divId = divId;

    switch (this.divId) {
      case "D1F":
        this.divName = "Division 1 Femme";
        break;
      case "D1H":
        this.divName = "Division 1 Homme";
        break;
      case "D2F":
        this.divName = "Division 2 Femme";
        break;
      case "D2H":
        this.divName = "Division 2 Homme";
        break
      default:
        this.divName = "";
        console.error("Nom de Div Invalide")
        break;
    }
    console.log("div changed : " + this.divId)
  }
}
