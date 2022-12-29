import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandecreditComponent } from './demandecredit.component';

describe('DemandecreditComponent', () => {
  let component: DemandecreditComponent;
  let fixture: ComponentFixture<DemandecreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandecreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandecreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
