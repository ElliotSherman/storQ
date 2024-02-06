import { Component, NgModule } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { NAVLINKS } from './_navLinks';
import { ListItem } from '../list/_listItem';
import { BoxesComponent } from '../boxes/boxes.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ListComponent, BoxesComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  links: ListItem[] = NAVLINKS;
}
