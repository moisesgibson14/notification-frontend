import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material';
import { HeaderComponent } from './shared/header/header.component';
import { ListNotificationComponent } from './component/list-notification/list-notification.component';
import { ViewNotificationComponent } from './component/view-notification/view-notification.component'

import { APP_ROUTES } from 'src/app/app.routes';

import { HttpClientModule } from  '@angular/common/http';

import { FilterPipe} from './filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoaderComponent } from './component/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListNotificationComponent,
    ViewNotificationComponent,
    FilterPipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    //material design
    BrowserAnimationsModule,
    MaterialModule,
    APP_ROUTES,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
