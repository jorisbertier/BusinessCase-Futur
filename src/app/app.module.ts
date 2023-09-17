import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AHomeComponent } from './a-home/a-home.component';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';
import { CarouselShortlyComponent } from './carousel-shortly/carousel-shortly.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselDownComponent } from './carousel-down/carousel-down.component';
import { AGalleryComponent } from './a-gallery/a-gallery.component';
import { AFormNftComponent } from './a-form-nft/a-form-nft.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AProfilComponent } from './a-profil/a-profil.component';
import { CardCollectionComponent } from './card-collection/card-collection.component';
import { ANftDetailsComponent } from './a-nft-details/a-nft-details.component';
import { NgChartsModule } from 'ng2-charts';
import { ARegisterComponent } from './a-register/a-register.component';
import { ABasketComponent } from './a-basket/a-basket.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AHomeComponent,
    CarouselHomeComponent,
    CarouselShortlyComponent,
    FooterComponent,
    CarouselDownComponent,
    AGalleryComponent,
    AFormNftComponent,
    AProfilComponent,
    CardCollectionComponent,
    ANftDetailsComponent,
    ARegisterComponent,
    ABasketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgChartsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
