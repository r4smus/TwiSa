import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { DndModule } from 'ng2-dnd';
import { SelectAttributesComponent } from './select-attributes/select-attributes.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectAttributesComponent
  ],
  imports: [
    BrowserModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
