import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherempsparticipantsComponent } from './afficherempsparticipants.component';

describe('afficherempsparticipants', () => {
  let component: AfficherempsparticipantsComponent;
  let fixture: ComponentFixture<AfficherempsparticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherempsparticipantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherempsparticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
