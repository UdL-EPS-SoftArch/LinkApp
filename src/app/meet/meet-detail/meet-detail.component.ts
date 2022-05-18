import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MeetService} from '../meet.service';
import {Meet} from '../meet';
import {catchError, switchMap} from 'rxjs/operators';
import {Group} from '../../group-structure/group';
import {UserRoleService} from "../../role/userrole.service";
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";
import {User} from "../../login-basic/user";
import {HttpMethod} from "@lagoshny/ngx-hateoas-client";
import {UserRole} from "../../role/UserRole";
import {of} from "rxjs";

@Component({
  selector: 'app-meet-list',
  templateUrl: './meet-detail.component.html',
  styleUrls: ['./meet-detail.component.css']
})
export class MeetDetailComponent implements OnInit {

  public meet: Meet;
  public group: Group;
  public sameDay: boolean;
  public hasPermission: boolean;

  constructor(
    private route: ActivatedRoute,
    private meetService: MeetService,
    private userRoleService: UserRoleService,
    private authenticationService: AuthenticationBasicService,
  ) {
    this.sameDay = false;
    this.hasPermission = false;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.meetService.getResource(id).pipe(
      switchMap(meet => {
        this.meet = meet;
        this.initialFinalInSameDay().then((sameDay) => {
          this.sameDay = sameDay;
        });
        return this.meet.getRelation<Group>('group');
      })
    ).subscribe(group => {
      this.group = group;
      this.getUserPermission()
    });
  }

  async initialFinalInSameDay(): Promise<boolean> {
    const initial = new Date(this.meet.initialMeetDate);
    const final = new Date(this.meet.finalMeetDate);

    return initial.getDate() === final.getDate() &&
      initial.getMonth() === final.getMonth() &&
      initial.getFullYear() === final.getFullYear();
  }

  async groupIsPublic(): Promise<boolean> {
    if (this.group) {
      return this.group.visibility === 'PUBLIC';
    } else {
      return true;
    }
  }

  getUserPermission(): void {
    const user: User = this.authenticationService.getCurrentUser();
    if (this.group && user) {
      this.userRoleService.customQuery(
        HttpMethod.GET,
        'UserRoleKey_user_id_' + user.id + '_group_id_' + this.group.id
      ).pipe(
        catchError(err => of([]))
      ).subscribe((userRole: UserRole) => {
        this.hasPermission =  userRole.role == 'ADMIN' || userRole.role == 'AUTHORIZED';
      })
    }
  }

}
