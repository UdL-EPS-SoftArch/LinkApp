import { Component, OnInit } from '@angular/core';
import {Group} from '../Group';
import {GroupService} from '../group.service';
import {GROUPS} from '../../mock-groups';
import {User} from "../../login-basic/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups: Group[] = [];

  constructor(public router: Router, private groupService: GroupService) {
  }

  ngOnInit(): void {
   this.groupService.getPage().subscribe((groups) => this.groups = groups.resources);
  }

  detail(group: Group): void {
    this.router.navigate([group.uri]);
  }

}
