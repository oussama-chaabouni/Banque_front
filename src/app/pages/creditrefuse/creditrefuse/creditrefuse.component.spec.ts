import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditrefuseComponent } from './creditrefuse.component';

describe('CreditrefuseComponent', () => {
  let component: CreditrefuseComponent;
  let fixture: ComponentFixture<CreditrefuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditrefuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditrefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
