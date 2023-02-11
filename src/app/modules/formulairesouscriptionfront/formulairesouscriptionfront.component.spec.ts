import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormulairesouscriptionfrontComponent} from "./formulairesouscriptionfront.component";


describe('FormulairesouscriptionfrontComponent', () => {
  let component: FormulairesouscriptionfrontComponent;
  let fixture: ComponentFixture<FormulairesouscriptionfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairesouscriptionfrontComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairesouscriptionfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
