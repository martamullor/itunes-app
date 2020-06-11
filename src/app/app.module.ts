import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IonSearchbarComponent } from './components/ion-searchbar/ion-searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    IonSearchbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
