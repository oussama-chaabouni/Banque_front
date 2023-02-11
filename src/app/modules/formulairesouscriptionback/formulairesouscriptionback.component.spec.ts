import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormulairesouscriptionbackComponent} from "./formulairesouscriptionback.component";


describe('FormulairesouscriptionbackComponent', () => {
  let component: FormulairesouscriptionbackComponent;
  let fixture: ComponentFixture<FormulairesouscriptionbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairesouscriptionbackComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairesouscriptionbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
