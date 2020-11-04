import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MarketingComponent } from './marketing/marketing.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { FilmComponent } from './film/film.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { ContactComponent } from './contact/contact.component';

import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'marketing', component: MarketingComponent},
  {path: 'website', component: WebDevelopmentComponent},
  {path: 'advertisement', component: AdvertisementComponent},
  {path: 'film', component: FilmComponent},
  {path: 'tvshows', component: TvshowsComponent},
  {path: 'contact', component: ContactComponent},
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
