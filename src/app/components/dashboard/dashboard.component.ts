import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  showProductForm = true;
  showAisleForm = false;

  displayProductForm() {
    this.showProductForm = true;
    this.showAisleForm = false;
  }

  displayAisleForm() {
    this.showProductForm = false;
    this.showAisleForm = true;
  }

  // todo: add form that createas a new aisle with a fixed nember of SKUs
  

  // todo: add form that adds a new product to a vacant SKU
}
