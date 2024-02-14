import { Component } from '@angular/core';
import { BoxesComponent } from '../boxes/boxes.component';
import { BOXES } from '../../model/db.boxes';
import { BoxItem } from '../../model/box-item.module';
import { NgFor } from '@angular/common';
import { LOCATIONS } from '../../model/db.locations';
import { Location } from '../../model/location.module';

@Component({
  selector: 'app-location',
  standalone: true,
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
  imports: [BoxesComponent, NgFor],
})
export class LocationComponent {
  boxes: BoxItem[] = BOXES;
  locations: Location[]  = LOCATIONS;
}
