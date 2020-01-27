import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleSettingsComponent } from './vehicle-settings/vehicle-settings.component';
import { MainComponent } from './main/main.component';
import { StatusComponent } from './status/status.component';
import { PreviousSessionsComponent } from './previous-sessions/previous-sessions.component';
import { NoThanksComponent } from './no-thanks/no-thanks.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'vehicleSettings', component: VehicleSettingsComponent },
  { path: 'main', component: MainComponent },
  { path: 'status', component: StatusComponent },
  { path: 'previousSessions', component: PreviousSessionsComponent },
  { path: 'noThanks', component: NoThanksComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {}
 }
