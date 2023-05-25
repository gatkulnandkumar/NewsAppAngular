import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsapiService } from './service/newsapi.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { NumberComponent } from './number/number.component';
import { NumberParentComponent } from './number-parent/number-parent.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { HomeComponent } from './home/home.component';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
// import { LoadingBarModule } from '@ngx-loading-bar/core';

@NgModule({
  declarations: [
    AppComponent,
    TopNewsComponent,
    TechNewsComponent,
    NumberComponent,
    NumberParentComponent,
    SportsNewsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // NgxPaginationModule,
    // LoadingBarModule

  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
