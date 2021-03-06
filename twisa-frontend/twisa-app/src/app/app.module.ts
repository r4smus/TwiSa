import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing-module';

import { DndModule } from 'ng2-dnd';
import { SelectAttributesComponent } from './select-attributes/select-attributes.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ResultsComponent } from './results/results.component';
import { TwisaApiService } from './twisa-api.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FormDataService } from './data/form-data.service';
import { ResultsWithMapComponent } from './results-with-map/results-with-map.component';
import { AgmCoreModule} from '@agm/core';
import {NgxToggleModule} from 'ngx-toggle';
import { Ng5SliderModule } from 'ng5-slider';
import { TwitterItemComponent } from './twitter-item/twitter-item.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    SelectAttributesComponent,
    ConditionsComponent,
    ResultsComponent,
    ResultsWithMapComponent,
    TwitterItemComponent
  ],
  imports: [
    BrowserModule,
    DndModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NgxToggleModule,
    Ng5SliderModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA3UAF3Lhv-VoF29P4FhBgklVkc4VLD0vU'
    })
  ],
  providers: [TwisaApiService, FormDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
