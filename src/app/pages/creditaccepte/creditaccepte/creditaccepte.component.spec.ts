import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditaccepteComponent } from './creditaccepte.component';

describe('CreditaccepteComponent', () => {
  let component: CreditaccepteComponent;
  let fixture: ComponentFixture<CreditaccepteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditaccepteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditaccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
