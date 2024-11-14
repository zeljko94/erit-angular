import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './shared/layout.module';
import { DocumentsModule } from './components/documents/documents.module';
import { HoursModule } from './components/hours/hours.module';
import { MessagesModule } from './components/messages/messages.module';
import { RatingsModule } from './components/ratings/ratings.module';
import { RosterModule } from './components/roster/roster.module';
import { WarningsModule } from './components/warnings/warnings.module';
import { TrainingModule } from './components/training/training.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    DashboardModule,
    DocumentsModule,
    HoursModule,
    MessagesModule,
    RatingsModule,
    RosterModule,
    WarningsModule,
    TrainingModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
