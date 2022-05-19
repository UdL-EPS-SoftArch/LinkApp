import { Component, OnInit } from '@angular/core';
import {Group} from '../Group';
import {GroupService} from '../group.service';
import {GROUPS} from '../../mock-groups';
import {User} from '../../login-basic/user';
import {Router} from "@angular/router";
import {PagedResourceCollection} from "@lagoshny/ngx-hateoas-client";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups: Group[] = [];
  public pageSize = 5;
  public page = 1;
  public totalGroups = 0;

  constructor(public router: Router, private groupService: GroupService) {
  }

  ngOnInit(): void {
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
    this.router.navigate([group.uri]);
  }

}
