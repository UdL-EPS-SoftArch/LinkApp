import { Component, OnInit } from '@angular/core';
import {Group} from '../../Group';
import {GROUPS} from '../../mock-groups';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups: Group[] = GROUPS;

  constructor() { }

  ngOnInit(): void {
    console.log(this.groups);
  }

}
