export class ApiCheckinService {
    private url: string = "";
    private keyAuth: string = "";

    public EventId: number = 0;
    public EventName: string = "";
    public RaceName: string = "";

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
            case 861:
                this.EventName = "Étape 1 - Fréjus";
                break;
            case 862:
                this.EventName = "Étape 2 - Bordeaux";
                break;
            case 863:
                this.EventName = "Étape 3 - Metz";
                break;
            case 864:
                this.EventName = "Étape 4 - Quiberon";
                break;
            case 865:
                this.EventName = "Étape 5 - Saint-Jean-de-Monts";
                break;
            case 866:
                this.EventName = "Étape 1 - Parthenay";
                break;
            case 867:
                this.EventName = "Étape 2 - Calais";
                break;
            case 868:
                this.EventName = "Étape 3 - MSA";
                break;
            case 869:
                this.EventName = "Étape 4 - Noyon";
                break;
            case 870:
                this.EventName = "Étape 5 - Avallon";
                break;
            default:
                console.warn("Error : no event with id : " + this.EventId)
                this.EventName = "";
                break;
        }
    }
}