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
      name: "Toyota Camry",
      range: 200,
      capacity: 50,
      efficiency: 4.0,
    },
    {
      name: "Honda Odyssey",
      range: 350,
      capacity: 70,
      efficiency: 3.0,
    },
    {
      name: "Tesla Model 3",
      range: 400,
      capacity: 120,
      efficiency: 6.0,
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