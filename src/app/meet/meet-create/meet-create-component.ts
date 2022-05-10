import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { Location } from '@angular/common';
import {Meet} from '../meet';
import {MeetService} from '../meet.service';
import {GroupService} from "../../group-structure/group.service";

@Component({
  selector: 'app-user-register',
  templateUrl: './meet-create-component.html'
})
export class MeetCreateComponent implements OnInit {
  public meet: Meet;
  private groupId: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private meetService: MeetService,
              private groupService: GroupService) {
  }

  ngOnInit(): void {
    this.groupId = this.route.snapshot.paramMap.get('id');
    this.meet = new Meet();
  }

  onSubmit(): void {
    this.meet.initialMeetDate = new Date(this.meet.initialMeetDate);
    this.meet.finalMeetDate = new Date(this.meet.finalMeetDate);
    this.groupService.getResource(this.groupId).subscribe(
      group => {
        this.meet.group = group;
        this.meetService.createResource({ body: this.meet }).subscribe(
          meet => {
            this.router.navigate([meet.uri]);
          });
      }
    );
  }

  onCancel(): void {
    this.location.back();
  }
}
