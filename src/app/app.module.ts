import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ReseauxComponent} from './reseaux/reseaux.component';
import {FooterComponent} from './footer/footer.component';

import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { SliderComponent } from './slider/slider.component';
import { VideoComponent } from './video/video.component';
import { InfosComponent } from './infos/infos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReseauxComponent,
    FooterComponent,
    SliderComponent,
    VideoComponent,
    InfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
