import { Component, OnInit, Input } from '@angular/core';
import {Group} from '../../Group';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css']
})
export class GroupItemComponent implements OnInit {
  @Input() group: Group;

  constructor() { }

  ngOnInit(): void {
  }

}
