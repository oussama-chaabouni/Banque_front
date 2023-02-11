import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultercreditComponent } from './consultercredit.component';

describe('ConsultercreditComponent', () => {
  let component: ConsultercreditComponent;
  let fixture: ComponentFixture<ConsultercreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultercreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultercreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
