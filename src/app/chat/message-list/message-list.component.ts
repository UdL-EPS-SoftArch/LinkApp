import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MessageService } from '../message.service';
import { Message } from '../message';
import {PagedResourceCollection, ResourceCollection} from '@lagoshny/ngx-hateoas-client';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import {User} from '../../login-basic/user';
import {Meet} from '../../meet/meet';
import {MeetService} from '../../meet/meet.service';


@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  public user: User;
  public meet: Meet;
  public messages: Message[] = [];
  public totalMessages = 0;
  public pageSize = 5;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private meetService: MeetService,
    private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.user = this.getCurrentUser();

    const id = this.route.snapshot.paramMap.get('id');
    this.meetService.getResource(id).subscribe(
      meet => {
        this.meet = meet;
      });

    this.messageService.findByMeet('meets/' + id).subscribe(
      (messages: ResourceCollection<Message>) => {
        this.messages = messages.resources;
        this.totalMessages = this.messages.length;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.messages.length; i++){
          this.messages[i].getRelation('author').subscribe((author: User) => {
            this.messages[i].author = author;
          });
        }
      });
  }

  detail(message: Message): void {
    this.router.navigate(['messages', message.id]);
  }

  getCurrentUser(): User {
    return new User(JSON.parse(localStorage.getItem('currentUser')));
  }

  addItem(newItem: Message) {
    newItem.author = this.getCurrentUser();
    this.messages.push(newItem);
  }

}
