import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteepargneComponent } from './compteepargne.component';

describe('CompteepargneComponent', () => {
  let component: CompteepargneComponent;
  let fixture: ComponentFixture<CompteepargneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteepargneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteepargneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
