import { Component } from '@angular/core';
import { BoxesComponent } from '../boxes/boxes.component';
import { BOXES } from '../../model/db.boxes';
import { BoxItem } from '../../model/box-item.module';
import { NgFor } from '@angular/common';
import { SKUS } from '../../model/db.skus';
import { Sku } from '../../model/sku.module';

@Component({
  selector: 'app-sku',
  standalone: true,
  templateUrl: './sku.component.html',
  styleUrl: './sku.component.scss',
  imports: [BoxesComponent, NgFor],
})
export class SkuComponent {
  boxes: BoxItem[] = BOXES;
  skus: Sku[] = SKUS;
}
