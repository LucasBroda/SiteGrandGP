import { Article } from "./article";
import { InfoEvent } from "./infoEvent";

export interface Data {
    articles: Article[],
    infosEvents: InfoEvent[]
}
