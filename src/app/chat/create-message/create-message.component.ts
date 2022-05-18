import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import {MeetService} from '../../meet/meet.service';
import {Meet} from '../../meet/meet';
import {GroupService} from '../../group-structure/group.service';
import {Group} from '../../group-structure/group';
import {User} from '../../login-basic/user';
import {Message} from '../message';
import {MessageService} from '../message.service';

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
    this.message.creationDate = new Date (this.message.creationDate);
    this.message.group = this.meet.group;
    this.meetService.getResource((this.meet.id).toString()).subscribe(
      meet => {
        this.message.meet = meet;
        this.messageService.createResource({body: this.message}).subscribe(
          message => {
            this.router.navigate([message.uri]);
          }
        );
      }
    );
  }
}
