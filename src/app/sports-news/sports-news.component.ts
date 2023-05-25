import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit {

  sportNewsLinesData: any;

  constructor(private api : NewsapiService) { }

  ngOnInit(): void {
    
  }

}
