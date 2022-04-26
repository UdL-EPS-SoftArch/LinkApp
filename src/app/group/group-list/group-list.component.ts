import { Component, OnInit } from '@angular/core';
import {Group} from '../../Group';
import {GroupService} from '../group.service';
import {GROUPS} from '../../mock-groups';
import {group} from "@angular/animations";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups: Group[] = [];

  constructor(private groupService: GroupService) {
  }

  ngOnInit(): void {
    this.groups = this.groupService.getGroups();
  }

}
