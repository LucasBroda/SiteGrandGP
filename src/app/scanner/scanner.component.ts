import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
  scanResult:any ='';

  onCodeResult(result:string){
    this.scanResult=result;
      }
  constructor() { }

  ngOnInit(): void {
  }

}
