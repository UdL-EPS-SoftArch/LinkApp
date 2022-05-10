import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MeetService} from '../meet.service';
import {Meet} from '../meet';
import {switchMap} from 'rxjs/operators';
import {Group} from '../../group-structure/group';
import {GroupService} from '../../group-structure/group.service';

@Component({
  selector: 'app-meet-list',
  templateUrl: './meet-detail.component.html',
  styleUrls: ['./meet-detail.component.css']
})
export class MeetDetailComponent implements OnInit {

  public meet: Meet;
  public group: Group;
  public sameDay: boolean;

  constructor(private route: ActivatedRoute,
              private meetService: MeetService,
              private groupService: GroupService) {
    this.sameDay = false;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.meetService.getResource(id).pipe(
      switchMap(meet => {
        this.meet = meet;
        this.sameDay = this.initialFinalInSameDay();
        return this.meet.getRelation<Group>('group');
      })
    ).subscribe(group => { this.group = group; });
  }

  initialFinalInSameDay(): boolean {
    const initial = new Date(this.meet.initialMeetDate);
    const final = new Date(this.meet.finalMeetDate);

    return initial.getDate() === final.getDate() &&
      initial.getMonth() === final.getMonth() &&
      initial.getFullYear() === final.getFullYear();
  }

}
