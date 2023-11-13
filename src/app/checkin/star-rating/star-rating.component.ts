import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {

  @Input() nbStars: number = 1
  @Input() maxStars: number = 3
  starsText = ""

  constructor() { }

  ngOnChanges(): void {
    for (let i = 0; i < this.maxStars; i++) {
      if (i < this.nbStars) {
        this.starsText += "★"
      }
      /* else {
        this.starsText += "☆"
      } */
    }
  }

}
