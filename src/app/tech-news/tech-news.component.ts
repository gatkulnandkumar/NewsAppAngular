import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private api : NewsapiService) { }

  techLinesData: any[] = [];
  ngOnInit(): void {

    // this.api.techNewsLine().subscribe((res : any) =>{
    //   console.log("Result of Tech News API",res);
    //   this.techLinesData = res.articles;
    //   console.log("techLinesData++++++",this.techLinesData);

    // })
  }

}
