import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { User } from '../../login-basic/user';
import { Location } from '@angular/common';
import { Group } from 'src/app/group/group';
import { Meet } from '../../meet/meet';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { GroupService } from 'src/app/group/group.service';
import { MeetService } from '../../meet/meet.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  public user: User;
  public groups: Group[] = [];
  public meets: Meet[] = [];
  public pageSize = 5;
  public pageMeets = 1;
  public pageGroups = 1;
  public totalGroups = 0;
  public totalMeets = 0;
  public date = null;

  constructor(private router: Router,
              private location: Location,
              private groupService: GroupService,
              private meetService: MeetService,
              private authenticationBasicService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.user = this.getCurrentUser();
    this.date = Date();
    this.groupService.getPage({ pageParams:  { size: this.pageSize }, sort: { title: 'ASC' } }).subscribe(
      (pageGroups: PagedResourceCollection<Group>) => {
        this.groups = pageGroups.resources;
        this.totalGroups = pageGroups.totalElements;
      });
    this.meetService.getPage({ pageParams:  { size: this.pageSize }, sort: { title: 'ASC' } }).subscribe(
      (pageMeets: PagedResourceCollection<Meet>) => {
        this.meets = pageMeets.resources;
        this.totalMeets = pageMeets.totalElements;
      });
  }

  changeGroupPage(): void {
    this.groupService.getPage({ pageParams: { page: this.pageGroups - 1, size: this.pageSize }, sort: { title: 'ASC' } }).subscribe(
      (pageGroups: PagedResourceCollection<Group>) => this.groups = pageGroups.resources);
  }

  changeMeetPage(): void {
    this.meetService.getPage({ pageParams: { page: this.pageMeets - 1, size: this.pageSize }, sort: { title: 'ASC' } }).subscribe(
      (pageMeets: PagedResourceCollection<Meet>) => this.meets = pageMeets.resources);
  }

  groupDetail(group: Group): void {
    this.router.navigate(['groups', group.id]);
  }

  meetDetail(meet: Meet): void {
    this.router.navigate(['meets', meet.id]);
  }

  getCurrentUser(): User {
    return new User(JSON.parse(localStorage.getItem('currentUser')));
  }


}
