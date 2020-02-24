import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WebService } from '../web.service';


export interface Vehicle {
  name: string;
  range: number;
  capacity: number;
  efficiency: number;
}

@Component({
  selector: 'app-vehicle-settings',
  templateUrl: './vehicle-settings.component.html',
  styleUrls: ['./vehicle-settings.component.css']
})
export class VehicleSettingsComponent implements OnInit {
  vehicleType: String = "";
  formCustom;

  presetCarOptions: Vehicle[] = [
    {
      name: "Tesla Model 3 (Standard)",
      range: 250,
      capacity: 54,
      efficiency: 3.846, // mi/kwh
    },
    {
      name: "Tesla Model S (Standard)",
      range: 373,
      capacity: 60,
      efficiency: 3.226,
    },
    {
      name: "Chevrolet Volt",
      range: 420,
      capacity: 53,
      efficiency: 3.226,
    },
    {
      name: "Nissan Leaf",
      range: 180,
      capacity: 50,
      efficiency: 3.226,
    },
    {
      name: "Tesla Model X",
      range: 325,
      capacity: 100,
      efficiency: 2.564,
    },
    {
      name: "Toyota Prius Prime",
      range: 25,
      capacity: 8.8,
      efficiency: 4.00,
    },
    {
      name: "Ford Fusion",
      range: 26,
      capacity: 9,
      efficiency: 3.030,
    },
    {
      name: "Ford C-Max Energi",
      range: 20,
      capacity: 7.6,
      efficiency: 2.857,
    },
    {
      name: "Chevrolet Bolt EV",
      range: 259,
      capacity: 66,
      efficiency: 3.571,
    },
    {
      name: "BMW i3",
      range: 114,
      capacity: 42.2,
      efficiency: 3.226,
    },
  ];

  constructor(private fb: FormBuilder, private web: WebService) {
    this.formCustom = fb.group({
      name: ['', Validators.required],
      range: [0, [Validators.required, notZero()]],
      capacity: [0, [Validators.required, notZero()]],
      efficiency: [0, [Validators.required, notZero()]],
    })
   }

   ngOnInit(): void {
    
   }

  onSubmit() {
    if(this.vehicleType == 'Custom')
      this.web.setVehicle(this.formCustom.value);
    else 
      this.web.setVehicle(this.presetCarOptions.find(val => val.name == this.vehicleType));
  }

}

function notZero() {
  return control => {
    return control.value != 0 ? null : {invalidField: "Value must be non-zero"};
  };
}