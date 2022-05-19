import { Component, OnInit } from '@angular/core';
import {GroupService} from '../group-structure/group.service';
import {ActivatedRoute} from '@angular/router';
import {Group} from '../group-structure/group';

@Component({
  selector: 'app-group-members',
  templateUrl: './group-members.component.html',
  styleUrls: ['./group-members.component.css']
})
export class GroupMembersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
