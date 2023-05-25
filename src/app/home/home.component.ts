import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topNewsHereArr: any[] = [];
  sportNewsHereArr: any[] = [];
  businessNewsHereArr: any[] = [];
  entertainmentNewsArr: any[] = [];
  healthNewsLinesArr: any[] = [];

  

  commonArray: any[] = [];

  combined: any[] = [];
  topNewsFlag = true;
  commonDataFlag = false;
  sportsData: any;



  constructor(private api: NewsapiService) { }

  ngOnInit(): void {
    this.topNewsHere();

  }



  topNewsHere() {

    this.topNewsFlag = true;
    this.commonDataFlag = false;
    this.api.topHeadLines().subscribe((res: any) => {
      console.log("Result of News API", res);
      this.topNewsHereArr = res.articles;
      console.log("topHeadLinesData++++++", this.topNewsHereArr);
      this.combined = this.topNewsHereArr.concat(this.sportNewsHereArr).concat(this.businessNewsHereArr);
      console.log("topHeadLines concat", this.combined);
    })

    this.api.sportNewsLines().subscribe((res: any) => {
      console.log("Result of Tech News API", res);
      this.sportNewsHereArr = res.articles;
      console.log("sportNewsLinesData++++++", this.sportNewsHereArr);
      this.combined = this.sportNewsHereArr.concat(this.topNewsHereArr).concat(this.businessNewsHereArr);
      console.log("sportNewsLines concat", this.combined);

    })

    this.api.businessNewsLines().subscribe((res: any) => {
      console.log("Result of Tech News API", res);
      this.businessNewsHereArr = res.articles;
      console.log("businessNewsLinesData++++++", this.businessNewsHereArr);
      this.combined = this.businessNewsHereArr.concat(this.topNewsHereArr).concat(this.sportNewsHereArr);
      console.log("businessNewsLines concat", this.combined);
    })

    this.api.entertainmentNewsLines().subscribe((res: any) => {

      console.log("Result of entertainmentNewsLines API", res);
      this.entertainmentNewsArr = res.articles;
      console.log("entertainmentNews++++++", this.entertainmentNewsArr);
      this.combined = this.entertainmentNewsArr.concat(this.topNewsHereArr).concat(this.sportNewsHereArr).concat(this.businessNewsHereArr);
      console.log("entertainmentNews concat", this.combined);

    })

    // this.api.healthNewsLines().subscribe((res: any) => {
    //   console.log("Result of healthNewsLines API", res);
    //   this.healthNewsLinesArr = res.articles;
    //   console.log("healthNewsLines++++++", this.healthNewsLinesArr);
    //   this.combined = this.healthNewsLinesArr.concat(this.topNewsHereArr).concat(this.sportNewsHereArr).concat(this.businessNewsHereArr).concat(this.entertainmentNewsArr);
    //   console.log("healthNewsLines concat", this.combined);

    // })

  }

  commonData(data: any) {
    console.log("herere we go");
    this.topNewsFlag = false;
    this.commonDataFlag = true;
    this.sportsData = data;

    if (data == 'Sports') {
      
      // this.commonArray = []
      this.api.sportNewsLines().subscribe((res: any) => {
        console.log("Result of Tech News API", res);
        this.commonArray = res.articles;
        console.log("sportNewsLinesData++++++", this.commonArray);
      })
    } else if (data == 'Business') {
      console.log("elseeee++++++");
      this.api.businessNewsLines().subscribe((res: any) => {
        console.log("Result of Tech News API", res);
        this.commonArray = res.articles;
        console.log("businessNewsLinesData++++++", this.commonArray);
        // this.topHeadLinesData = res.sources;
        // console.log("topHeadLinesData++++++",this.topHeadLinesData);
      })

    } else if (data == 'Tech') {
      this.api.techNewsLine().subscribe((res: any) => {
        console.log("Result of Tech News API", res);
        this.commonArray = res.articles;
        console.log("techLinesData++++++", this.commonArray);
      })
    } else if (data == 'Entertainment') {
      this.api.entertainmentNewsLines().subscribe((res: any) => {
        console.log("Result of entertainment News API", res);
        this.commonArray = res.articles;
        console.log("entertainmentNewsLines++++++", this.commonArray);
      })
    } else if (data == 'Health') {
      this.api.healthNewsLines().subscribe((res: any) => {
        console.log("Result of healthNewsLines News API", res);
        this.commonArray = res.articles;
        console.log("healthNewsLines++++++", this.commonArray);
      })
    }


  }

}
