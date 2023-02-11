import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptecourantComponent } from './comptecourant.component';

describe('ComptecourantComponent', () => {
  let component: ComptecourantComponent;
  let fixture: ComponentFixture<ComptecourantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptecourantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptecourantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
