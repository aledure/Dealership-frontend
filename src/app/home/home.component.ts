import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../shared/services/vehicle.service';
import { Vehicle } from 'src/app/shared/models/vehicle';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vehicles: Vehicle[] = []
  constructor(
    private vehicleService: VehicleService,
  ) { }

  ngOnInit(): void {
    this.retrieveAllVehicles()
  }

  retrieveAllVehicles() {
    this.vehicleService.getAllVehicles().subscribe(vehicles => {
      if (vehicles) {
        this.vehicles = vehicles
  }
}, error => {
  if (error) {
    console.log(error)
  }
})
  }

}
