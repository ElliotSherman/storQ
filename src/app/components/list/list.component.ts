import { NgFor, NgIf } from '@angular/common';
import { Component , Input } from '@angular/core';
import { ListItem } from './_listItem';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor , NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input()links?: ListItem[];
}
