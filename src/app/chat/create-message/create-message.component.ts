import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { Location } from '@angular/common';
import {Meet} from '../../meet';
import {MeetService} from '../../meet/meet.service';
import {GroupService} from "../../group-structure/group.service";
import {User} from "../../login-basic/user";
import {Message} from "../message";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
//  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {
  public user: User = new User();
  public message: Message = new Message();
  private groupId: string;
  @Input()
  private meetId: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService,
              private authenticationService: AuthenticationBasicService,
              private groupService: GroupService,
              private meetService: MeetService,
              ) { }

  ngOnInit(): void {
    //group
    //meet
    this.meetId = this.route.snapshot.paramMap.get('id');
  }

  onSubmit(): void {
    this.message.creationDate = new Date (this.message.creationDate);
    this.meetService.getResource(this.meetId).subscribe(
      meet => {this.message.meet = meet;
        this.messageService.createResource({ body: this.message }).subscribe(
          message => {
            this.router.navigate([message.uri]);
          });
        }
      )
  }
}
