import { Component, OnInit } from '@angular/core';
import {Group} from '../group/group';
import {GroupService} from '../group/group.service';
import {Router} from "@angular/router";
import {PagedResourceCollection} from "@lagoshny/ngx-hateoas-client";
import {Meet} from "../meet/meet";
import {MeetService} from "../meet/meet.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  groups: Group[] = [];
  meets: Meet[] = [];
  public pageSize = 5;
  public page = 1;
  public totalGroups = 0;
  public totalMeets = 0;


  constructor(public router: Router, private groupService: GroupService, private meetService: MeetService) {
  }

  ngOnInit(): void {
    this.groupService.getPage({ pageParams:  { size: this.pageSize }, sort: { title: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Group>) => {
        this.groups = page.resources;
        this.totalGroups = page.totalElements;
      });

    this.meetService.getPage({ pageParams:  { size: this.pageSize }, sort: { title: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Meet>) => {
        this.meets = page.resources;
        this.totalMeets = page.totalElements;
      });
  }


}
