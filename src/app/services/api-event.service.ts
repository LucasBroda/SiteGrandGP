import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiEventService {

  public eventId: string = ""

  public eventName: string = ""

  public raceName: string = ""

  public setEvent(eventId: string) {
    this.eventId = eventId;

    switch (this.eventId) {
      case '861':
        this.eventName = "Etape 1 - Fréjus";
        break;
      case '862':
        this.eventName = "Etape 2 - Bordeaux";
        break;
      case '863':
        this.eventName = "Etape 3 - Metz";
        break;
      case '864':
        this.eventName = "Etape 4 - Quiberon";
        break;
      case '865':
        this.eventName = "Etape 5 - Saint-Jean-de-Monts";
        break;
      default:
        this.eventName = "";
        console.error("Nom d'Event invalide")
        break;
    }
    console.log("city changed : " + this.eventId)
  }
}
