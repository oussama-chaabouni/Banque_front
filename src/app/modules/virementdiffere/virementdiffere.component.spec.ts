import { ComponentFixture, TestBed } from '@angular/core/testing';
import {VirementdiffereComponent} from "../virementdiffere/virementdiffere.component";


describe('VirementdiffereComponent', () => {
  let component: VirementdiffereComponent;
  let fixture: ComponentFixture<VirementdiffereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirementdiffereComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirementdiffereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
