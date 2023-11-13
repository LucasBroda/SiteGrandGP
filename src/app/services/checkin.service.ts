import { Injectable } from '@angular/core';
@Injectable()
export class CheckinService {

    EventId: number = 0;
    EventName: string = "";

    public SetEvent(newEventId: number) {
        this.EventId = newEventId;

        switch (this.EventId) {
            case 691:
                this.EventName = "Etape 1 - Fréjus";
                break;
            case 692:
                this.EventName = "Etape 2 - Dunkerque";
                break;
            case 693:
                this.EventName = "Etape 3 - Metz";
                break;
            case 694:
                this.EventName = "Etape 4 - Quiberon";
                break;
            case 695:
                this.EventName = "Etape 5 - Saint-Jean-de-Monts";
                break;
            default:
                this.EventName = "";
                break;
        }
    }
}