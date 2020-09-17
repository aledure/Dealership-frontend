import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';




@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private vehicleApi: string;
  constructor(
    private http: HttpClient
  ) {
    this.vehicleApi = `${environment.apiUrl}api/v1/vehicles`;
   }

   getAllVehicles(): Observable<Vehicle[]> {
     return this.http.get<Vehicle[]>(`${this.vehicleApi}/index`)
   }
}
