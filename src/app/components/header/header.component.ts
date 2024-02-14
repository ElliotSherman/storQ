import { Component } from '@angular/core';
import { NavlistComponent } from '../navlist/nav-list.component';
import { NAVLINKS } from './_navLinks';
import { Navlink } from '../../model/navlink.module';
import { LocationComponent } from '../location/location.component';
import { CommonModule, NgFor } from '@angular/common';
import { LOCATIONS } from '../../model/db.locations';
import { Location } from '../../model/location.module';
CommonModule;
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [NavlistComponent, LocationComponent, NgFor],
})
export class HeaderComponent {
  links: Navlink[] = NAVLINKS;
  locations: Location[] = LOCATIONS;
}
