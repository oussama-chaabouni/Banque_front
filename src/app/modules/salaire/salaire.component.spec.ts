import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaireComponent } from './salaire.component';

describe('TransactionComponent', () => {
  let component: SalaireComponent;
  let fixture: ComponentFixture<SalaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
