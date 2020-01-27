//angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//angular material imports
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule, MatIcon} from '@angular/material/icon';



//custom file imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { VehicleSettingsComponent } from './vehicle-settings/vehicle-settings.component';
import { MainComponent } from './main/main.component';
import { StatusComponent } from './status/status.component';
import { PreviousSessionsComponent } from './previous-sessions/previous-sessions.component';
import { NoThanksComponent } from './no-thanks/no-thanks.component';





@NgModule({
  declarations: [
    AppComponent,
    VehicleSettingsComponent,
    MainComponent,
    StatusComponent,
    PreviousSessionsComponent,
    NoThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSliderModule,
    MatListModule,
    MatDividerModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
