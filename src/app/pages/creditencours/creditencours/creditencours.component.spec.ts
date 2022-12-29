import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditencoursComponent } from './creditencours.component';

describe('CreditencoursComponent', () => {
  let component: CreditencoursComponent;
  let fixture: ComponentFixture<CreditencoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditencoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditencoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
