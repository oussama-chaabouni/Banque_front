import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindallMyformationComponent } from './findallMyformation.component';

describe('FormationfrontComponent', () => {
  let component: FindallMyformationComponent;
  let fixture: ComponentFixture<FindallMyformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindallMyformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindallMyformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
