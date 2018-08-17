import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material';
import { HeaderComponent } from './shared/header/header.component';
import { ListNotificationComponent } from './component/list-notification/list-notification.component';
import { ViewNotificationComponent } from './component/view-notification/view-notification.component'

import { APP_ROUTES } from 'src/app/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListNotificationComponent,
    ViewNotificationComponent
  ],
  imports: [
    BrowserModule,
    //material design
    BrowserAnimationsModule,
    MaterialModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
