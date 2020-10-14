import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Vehicle } from 'src/app/shared/models/vehicle';
import { VehicleService } from 'src/app/shared/services/vehicle.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit, OnDestroy {
  vehicle: Vehicle
  vehicleImg: string
  private subs = new Subscription()
  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(vehicle => {
      if (vehicle && vehicle.id) {
        this.retrieveVehicleById(vehicle.id)

      }
    })
  }

  retrieveVehicleById(id: number) {
    const params = { id: id }
    }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
