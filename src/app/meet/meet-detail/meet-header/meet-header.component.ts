import {Component, Input, OnInit} from '@angular/core';
import {Meet} from '../../meet';

@Component({
  selector: 'app-meet-header',
  templateUrl: './meet-header.component.html',
  styleUrls: ['./meet-header.component.css']
})
export class MeetHeaderComponent implements OnInit {

  @Input() meet: Meet;

  constructor() { }

  ngOnInit(): void {
  }


}
