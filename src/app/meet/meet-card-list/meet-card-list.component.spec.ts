import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetCardListComponent } from './meet-card-list.component';

describe('MeetCardListComponent', () => {
  let component: MeetCardListComponent;
  let fixture: ComponentFixture<MeetCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
