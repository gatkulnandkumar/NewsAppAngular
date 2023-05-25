import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNewsComponent } from './top-news/top-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { NumberParentComponent } from './number-parent/number-parent.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'news', component: TopNewsComponent },
  { path: 'tech', component: TechNewsComponent },
  { path: 'number', component: NumberParentComponent },
  { path: 'sports', component: SportsNewsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
