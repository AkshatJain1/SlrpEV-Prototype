import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
import { Vehicle } from '../vehicle-settings/vehicle-settings.component';

export interface ChargeSettings {
  milesNeeded: number;
  flexible: boolean;
  setDepartureTime: string;
  startTime: string;
  currentMiles: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {  
  depTimeSlider: number = 0;
  chargeSettings: ChargeSettings = {
    milesNeeded: 0,
    flexible: false,
    setDepartureTime: '',
    startTime: '',
    currentMiles: 0,
  }
  userVehicle: Vehicle = {
    name: 'Default Vehicle',
    range: 200,
    efficiency: 2.85,
    capacity: 50,
  };

  EV_KWH_PER_HOUR: number = 6.6;
  
  CHARGING_PER_25_MILES_COST:       number = 1;
  IMMEDIATE_OVERSTAY_PER_HOUR_COST: number = 5;
  FLEXIBLE_OVERSTAY_PER_HOUR_COST:  number = 10;
  FLEXIBLE_CHARGING_PER_MIN_COST:   number = 0.05;
  FLEXIBLE_PARKING_PER_MIN_COST:   number = 0.03;

  constructor(private web: WebService) { }

  ngOnInit(): void {
    this.web.hasVehicle();
    this.web.getVehicle().subscribe((response: Vehicle) => {
      console.log('HEJRKLJEAKLJFKLDAJFKLDASJKLFDSAJKLFDAS');
      console.log(response)
      this.userVehicle = response;
    });
  }

  onSubmit() {
    console.log(this.chargeSettings)
  }

  isSubmitValid() {
    return this.chargeSettings.milesNeeded != 0 && (this.chargeSettings.flexible == false || this.depTimeSlider != 0);
  }

  getPrice() {
    return this.chargeSettings.flexible 
            ? (this.CHARGING_PER_25_MILES_COST * (this.chargeSettings.milesNeeded / 25.0) + this.FLEXIBLE_PARKING_PER_MIN_COST * this.depTimeSlider).toFixed(2)
            : (this.CHARGING_PER_25_MILES_COST * (this.chargeSettings.milesNeeded / 25.0)).toFixed(2);              
  }

  getVehicleRange() {
    return this.userVehicle.range;
  }


  minToHours() {
    let minutes = this.depTimeSlider % 60;
    let hours = Math.floor(this.depTimeSlider / 60);
    let minuteWord = minutes == 1 ? "min" : "mins";
    let hourWord = hours == 1 ? "hr" : "hrs";

    return hours == 0 ? minutes + " " + minuteWord : hours + " " + hourWord + ", " + minutes + " " + minuteWord;
  }

  formatLabel(value: number | null) {
    value = !value ? 0 : value; 

    let hhPart = (new Date()).getHours()
    let mmPart = (new Date()).getMinutes() + value + Math.trunc(((this.chargeSettings.milesNeeded / this.userVehicle.efficiency) / this.EV_KWH_PER_HOUR)*60);

    while(mmPart >= 60) {
      mmPart -= 60;
      hhPart += 1;
    }
    hhPart %= 24;
    
    return (hhPart % 12 == 0 ? "12" : hhPart % 12) + ":" + (mmPart < 10 ? "0" + mmPart : mmPart) + " " + (hhPart > 12 ? "PM" : "AM");
  }

}
