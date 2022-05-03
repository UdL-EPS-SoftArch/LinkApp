import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetHeaderComponent } from './meet-header.component';

describe('MeetHeaderComponent', () => {
  let component: MeetHeaderComponent;
  let fixture: ComponentFixture<MeetHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
