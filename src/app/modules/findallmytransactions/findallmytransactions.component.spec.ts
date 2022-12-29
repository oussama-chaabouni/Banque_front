import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindallmytransactionsComponent } from './findallmytransactions.component';

describe('FindallmytransactionsComponent', () => {
  let component: FindallmytransactionsComponent;
  let fixture: ComponentFixture<FindallmytransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindallmytransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindallmytransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
