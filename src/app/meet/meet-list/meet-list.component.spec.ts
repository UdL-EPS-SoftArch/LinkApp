import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetListComponent } from './meet-list.component';

describe('MeetListComponent', () => {
  let component: MeetListComponent;
  let fixture: ComponentFixture<MeetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
