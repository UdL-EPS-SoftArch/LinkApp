import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetDetailComponent } from './meet-detail.component';

describe('MeetListComponent', () => {
  let component: MeetDetailComponent;
  let fixture: ComponentFixture<MeetDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
