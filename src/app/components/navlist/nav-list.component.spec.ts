import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavlistComponent } from './nav-list.component';

describe('ListComponent', () => {
  let component: NavlistComponent;
  let fixture: ComponentFixture<NavlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavlistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});