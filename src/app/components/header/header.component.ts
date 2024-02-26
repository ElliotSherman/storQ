import { Component } from '@angular/core';
// import { NavlistComponent } from '../navlist/nav-list.component';
// import { NAVLINKS } from './_navLinks';
// import { Navlink } from '../../model/navlink.module';
import { SkuComponent } from '../sku/sku.component';
import { CommonModule, NgFor } from '@angular/common';
import { SKUS } from '../../model/db.skus';
import { Sku } from '../../model/sku.module';
import { RouterLink, RouterOutlet } from '@angular/router';
CommonModule;
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    // NavlistComponent,
    SkuComponent,
    NgFor,
    RouterLink,
    RouterOutlet
  ],
})
export class HeaderComponent {
  // links: Navlink[] = NAVLINKS;
  skus: Sku[] = SKUS;
}
