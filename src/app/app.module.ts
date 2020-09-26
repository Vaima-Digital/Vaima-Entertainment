import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { MarketingComponent } from './marketing/marketing.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { FilmComponent } from './film/film.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MarketingComponent,
    WebDevelopmentComponent,
    AdvertisementComponent,
    FilmComponent,
    TvshowsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
