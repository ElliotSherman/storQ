import { Component, input } from '@angular/core';
import { BoxesComponent } from '../boxes/boxes.component';
import { BOXES } from '../../model/db.boxes';
import { BoxItem } from '../../model/box-item.module';

@Component({
  selector: 'app-location',
  standalone: true,
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
  imports: [BoxesComponent],
})
export class LocationComponent {
  boxes: BoxItem[] = BOXES;
}
