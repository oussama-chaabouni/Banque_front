import { ComponentFixture, TestBed } from '@angular/core/testing';
import {VirementpermanentComponent} from "../virementpermanent/virementpermanent.component";


describe('VirementpermanentComponent', () => {
  let component: VirementpermanentComponent;
  let fixture: ComponentFixture<VirementpermanentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirementpermanentComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirementpermanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
