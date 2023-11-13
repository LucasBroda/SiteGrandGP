import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Data } from '../model/data';
import { Article } from '../model/article';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  public urlArticles = "assets/data.json"

  public articles: Article[] = []

  constructor(private httpService: HttpClient) {
    // rien
  }

  ngOnInit(): void {
    this.httpService.get<Data>(this.urlArticles).subscribe((response) => {
      this.articles = response.articles
    })
  }

}
