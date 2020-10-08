import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../shared/services/vehicle.service';
import { Vehicle } from 'src/app/shared/models/vehicle';


@Component({
  selector: 'app-in-stock',
  templateUrl: './in-stock.component.html',
  styleUrls: ['./in-stock.component.scss']
})
export class InStockComponent implements OnInit {
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
