import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Navlink } from '../../model/list-item.module';

@Component({
  selector: 'app-navlist',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './nav-list.component.html',
  styleUrl: './nav-list.component.scss',
})
export class NavlistComponent {
  @Input() links?: Navlink[];
}
