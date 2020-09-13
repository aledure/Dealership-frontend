import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



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

   getAllVehicles() {
     return this.http.get<any>(`${this.vehicleApi}/index`)
   }
}
