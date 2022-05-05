import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MeetService} from '../meet.service';
import {Meet} from '../meet';

@Component({
  selector: 'app-meet-list',
  templateUrl: './meet-detail.component.html',
  styleUrls: ['./meet-detail.component.css']
})
export class MeetDetailComponent implements OnInit {

  public meet: Meet;
  public sameDay: boolean;

  constructor(private route: ActivatedRoute,
              private meetService: MeetService) {
    this.sameDay = false;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.meetService.getResource(id).subscribe(
      meet => {
        this.meet = meet;
        this.sameDay = this.initialFinalInSameDay();
      });
  }

  initialFinalInSameDay(): boolean {
    const initial = new Date(this.meet.initialMeetDate);
    const final = new Date(this.meet.finalMeetDate);

    return initial.getDate() === final.getDate() &&
      initial.getMonth() === final.getMonth() &&
      initial.getFullYear() === final.getFullYear();
  }

}
