import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class NewsapiService {

   constructor(private http: HttpClient) {
   }



   //  topNews = ' https://newsapi.org/v2/everything?q=bitcoin&apiKey=df3b0176ff6045f986dc13a1fd5c6611'
   // topNews = 'https://newsapi.org/v2/everything?q=bitcoin&from=2023-01-28&sortBy=publishedAt&apiKey=df3b0176ff6045f986dc13a1fd5c6611'

   //   techNews = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=df3b0176ff6045f986dc13a1fd5c6611'
   topNews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=df3b0176ff6045f986dc13a1fd5c6611'
   techNews = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=df3b0176ff6045f986dc13a1fd5c6611'
   sportNews = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=df3b0176ff6045f986dc13a1fd5c6611'
   businessNews = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=df3b0176ff6045f986dc13a1fd5c6611'
   entertainmentNews = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=df3b0176ff6045f986dc13a1fd5c6611'
   healthNews = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=df3b0176ff6045f986dc13a1fd5c6611'

   topHeadLines() {
      return this.http.get(this.topNews);
   }
   techNewsLine() {
      return this.http.get(this.techNews);
   }
   sportNewsLines() {
      return this.http.get(this.sportNews);
   }
   businessNewsLines() {
      return this.http.get(this.businessNews);
   }
   entertainmentNewsLines() {
      return this.http.get(this.entertainmentNews);
   }

   healthNewsLines() {
      return this.http.get(this.healthNews);
   }
   
}
