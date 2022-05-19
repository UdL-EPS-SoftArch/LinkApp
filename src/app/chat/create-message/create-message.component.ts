import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import {MeetService} from '../../meet/meet.service';
import {Meet} from '../../meet/meet';
import {GroupService} from '../../group/group.service';
import {Group} from '../../group/group';
import {User} from '../../login-basic/user';
import {Message} from '../message';
import {MessageService} from '../message.service';
import {switchMap} from 'rxjs/operators';
import {group} from '@angular/animations';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
//  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {
  @Input()
  public user: User = new User();
  public message: Message = new Message();
  @Input()
  public meet: Meet;
  public group: Group;
  @Output()
  newItemEvent = new EventEmitter<Message>();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService,
              private authenticationService: AuthenticationBasicService,
              private groupService: GroupService,
              private meetService: MeetService,
              ) { }

  ngOnInit(): void {
    // group
    // meet
    this.message = new Message();
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.message.creationDate = new Date (this.message.creationDate);
    this.meetService.getResource(id).pipe(
      switchMap(meet => {
        this.message.meet = meet;
        return this.message.meet.getRelation<Group>('group');
      }),
      // tslint:disable-next-line:no-shadowed-variable
      switchMap(group => {
        this.message.group = group;
        return this.messageService.createResource({body: this.message});
      }),
      // tslint:disable-next-line:no-shadowed-variable
    ).subscribe(message => {
      this.newItemEvent.emit(message);
    });
  }
}
