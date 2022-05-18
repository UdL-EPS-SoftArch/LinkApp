import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MeetService} from "../meet.service";
import {Meet} from "../meet";

@Component({
  selector: 'app-meet-card',
  templateUrl: './meet-card.component.html',
  styleUrls: ['./meet-card.component.css']
})
export class MeetCardComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private meetService: MeetService) { }

  @Input() private meetId: string;
  meet: Meet;
  deltaTime;

  ngOnInit(): void {
    this.meetService.getResource(this.meetId).subscribe(
      meet => {
        this.meet = meet;
        this.deltaTime = Date.now() - new Date(this.meet.lastUpdate).getTime();
        this.deltaTime /= (1000 * 60);
        this.deltaTime = Math.round(this.deltaTime);
      }
    )

  }

  initialFinalInSameDay(): boolean {
    const initial = new Date(this.meet.initialMeetDate);
    const final = new Date(this.meet.finalMeetDate);

    return initial.getDate() === final.getDate() &&
      initial.getMonth() === final.getMonth() &&
      initial.getFullYear() === final.getFullYear();
  }

}
