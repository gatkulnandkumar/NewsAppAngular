import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {
  businessNewsLinesData: any[] = [];
  // flag

  constructor(private api: NewsapiService) { }
  topHeadLinesData: any[] = [];

  commonArray: any[] = []
  ngOnInit(): void {

    // if(flag=== "sports"){}
    // else if ()

    this.api.topHeadLines().subscribe((res: any) => {
      console.log("Result of News API", res);
      this.topHeadLinesData = res.articles;
      console.log("topHeadLinesData++++++", this.topHeadLinesData);

      // this.topHeadLinesData = res.sources;
      // console.log("topHeadLinesData++++++",this.topHeadLinesData);

    })
  }

}
