import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetDeleteComponent } from './meet-delete.component';

describe('MeetDeleteComponent', () => {
  let component: MeetDeleteComponent;
  let fixture: ComponentFixture<MeetDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
