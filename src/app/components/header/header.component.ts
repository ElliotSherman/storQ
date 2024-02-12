import { Component, NgModule } from '@angular/core';
import { NavlistComponent } from '../list/nav-list.component';
import { NAVLINKS } from './_navLinks';
import { Navlink } from '../../model/list-item.module';
import { BoxesComponent } from '../boxes/boxes.component';
import { LocationComponent } from "../location/location.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [BoxesComponent, NavlistComponent, LocationComponent]
})
export class HeaderComponent {
  links: Navlink[] = NAVLINKS;
}
