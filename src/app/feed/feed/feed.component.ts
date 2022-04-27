import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { User } from '../../login-basic/user';
import { Location } from '@angular/common';
import { Group } from 'src/app/group-structure/group';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { GroupService } from 'src/app/group-structure/group.service'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  public user: User;
  public groups: Group[] = []
  public pageSize = 5;
  public page = 1;
  public totalGroups = 0;

  constructor(private router: Router,
              private location: Location,
              private groupService: GroupService,
              private authenticationBasicService: AuthenticationBasicService,) { }

  ngOnInit(): void {
    this.user = new User();
    this.groupService.getPage({ pageParams:  { size: this.pageSize }, sort: { title: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Group>) => {
        this.groups = page.resources;
        this.totalGroups = page.totalElements;
      });
  }


  changePage(): void {
    this.groupService.getPage({ pageParams: { page: this.page - 1, size: this.pageSize }, sort: { title: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Group>) => this.groups = page.resources);
  }

  detail(group: Group): void {
    this.router.navigate(['groups', group.id]);
  }


}
