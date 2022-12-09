import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formation_detailsComponent } from './formation_details.component';

describe('Formation_detailsComponent', () => {
  let component: Formation_detailsComponent;
  let fixture: ComponentFixture<Formation_detailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formation_detailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formation_detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
