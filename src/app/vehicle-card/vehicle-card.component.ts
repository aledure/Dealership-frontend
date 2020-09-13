import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Vehicle } from 'src/app/shared/models/vehicle';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss']
})
export class VehicleCardComponent implements OnInit, OnChanges {
  @Input() vehicle: Vehicle
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {}

}