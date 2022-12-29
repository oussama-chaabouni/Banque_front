import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindallmyformationComponent } from './findallmyformation.component';

describe('FindallmyformationComponent', () => {
  let component: FindallmyformationComponent;
  let fixture: ComponentFixture<FindallmyformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindallmyformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindallmyformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
