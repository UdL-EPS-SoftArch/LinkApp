import { Component, OnInit } from '@angular/core';
import {Group} from '../../Group';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups: Group[];

  constructor() { }

  ngOnInit(): void {}

}
