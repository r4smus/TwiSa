import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing-module';

import { DndModule } from 'ng2-dnd';
import { SelectAttributesComponent } from './select-attributes/select-attributes.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectAttributesComponent,
    ConditionsComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    DndModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
