import { ComponentFixture, TestBed } from '@angular/core/testing';
import {VirementimmediatComponent} from "../virementimmediat/virementimmediat.component";


describe('VirementimmediatComponent', () => {
  let component: VirementimmediatComponent;
  let fixture: ComponentFixture<VirementimmediatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirementimmediatComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirementimmediatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
