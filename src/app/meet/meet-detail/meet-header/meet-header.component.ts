import {Component, Input, OnInit} from '@angular/core';
import { Group } from '../../../group-structure/group';
import { Meet } from '../../meet';

@Component({
  selector: 'app-meet-header',
  templateUrl: './meet-header.component.html',
  styleUrls: ['./meet-header.component.css']
})
export class MeetHeaderComponent implements OnInit {

  @Input() meet: Meet;
  @Input() group: Group;

  constructor() { }

  ngOnInit(): void {
  }


}
