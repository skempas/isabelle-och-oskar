import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FirstComponent } from './first/first.component';
import { ScheduleComponent } from './second/schedule.component'
import { DresscodeComponent } from './dresscode/dresscode.component';
import { GiftComponent } from './gift/gift.component';
import { MiscComponent } from './misc/misc.component';
import { PeopleComponent } from './people/people.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { SpexComponent } from './spex/spex.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
    { path: 'spex', component: SpexComponent},
    { path: 'schema', component: ScheduleComponent },
    { path: 'dresscode', component: DresscodeComponent },
    { path: 'present', component: GiftComponent },
    { path: 'ovrigt', component: MiscComponent },
    { path: 'personer', component: PeopleComponent },
    { path: 'boende', component: AccommodationComponent },
    { path: 'start', component: FirstComponent },
    { path: 'menu', component: MenuComponent },
    { path: '', redirectTo: 'start', pathMatch: 'full'}

  ];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }