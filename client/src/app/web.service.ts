import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Vehicle } from './vehicle-settings/vehicle-settings.component';
import { catchError} from 'rxjs/operators';
import { throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

   baseUrl : string = "api"

  constructor(private http: HttpClient, private router: Router) { }

  hasVehicle() {
    this.http.get(`${this.baseUrl}/hasVehicle`).pipe(catchError(this.handleError)).subscribe(response => {
      if (response) { //user has vehicle settings
        this.router.navigate(['/main']);
      } else {
        this.router.navigate(['/vehicleSettings']);
      }
    })
  }


  
  setVehicle(vehicle: Vehicle) {
    this.http.post(`${this.baseUrl}/setVehicle`, vehicle, {responseType: 'text'})
      .pipe(catchError(this.handleError))
      .subscribe(resp => {
        this.router.navigate(['/main']);
      });
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    
    return throwError('A data error has occured')
  }
  
}
