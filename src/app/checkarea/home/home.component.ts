import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class CheckAreaHomeComponent implements OnInit {

  constructor(private router: Router) {
    //rien
  }

  ngOnInit(): void {
  }

  startCheck() {
    let etape = document.querySelector("#checkareaEvent") as HTMLSelectElement
    let division = document.querySelector("#checkareaDiv") as HTMLSelectElement

    let eventId = etape.value
    let divId = division.value

    if (eventId != "" && divId != "") {
      // on redirige 2 fois, pour faire rafraîchir le composant
      this.router.navigate(["checkarea"]).then(() => this.router.navigate(["checkarea", eventId, divId]))
    } else {
      console.error("Erreur dans checkarea")
    }
  }
}
