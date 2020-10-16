import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ScheduleComponent } from './second/schedule.component';
import { DresscodeComponent } from './dresscode/dresscode.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { GiftComponent } from './gift/gift.component';
import { PeopleComponent } from './people/people.component';
import { MiscComponent } from './misc/misc.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ScheduleComponent,
    DresscodeComponent,
    AccommodationComponent,
    GiftComponent,
    PeopleComponent,
    MiscComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
