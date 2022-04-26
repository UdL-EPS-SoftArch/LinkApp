import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../user/user.service';
import {MeetService} from '../meet.service';
import {Meet} from '../meet';

@Component({
  selector: 'app-meet-list',
  templateUrl: './meet-list.component.html',
  styleUrls: ['./meet-list.component.css']
})
export class MeetListComponent implements OnInit {

  private meet: Meet;

  constructor(private route: ActivatedRoute,
              private meetService: MeetService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.meetService.getResource(id).subscribe(
      meet => {
        this.meet = meet;
      });
  }

}
