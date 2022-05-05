import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupStructureComponent } from './group-structure.component';

describe('GroupStructureComponent', () => {
  let component: GroupStructureComponent;
  let fixture: ComponentFixture<GroupStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
