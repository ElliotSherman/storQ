import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BoxItem } from '../../model/box-item.module';

@Component({
  selector: 'app-boxes',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './boxes.component.html',
  styleUrl: './boxes.component.scss',
})
export class BoxesComponent {
  @Input() boxes?: BoxItem[];
}
