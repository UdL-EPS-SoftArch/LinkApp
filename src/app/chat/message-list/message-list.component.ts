import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';
import { Message } from '../message';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import {User} from '../../login-basic/user';


@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  public user: User;
  public messages: Message[] = [];
  public totalMessages = 0;
  public pageSize = 5;

  constructor(
    public router: Router,
    private messageService: MessageService,
    private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.user = this.getCurrentUser();
    this.messageService.getPage({ pageParams:  { size: this.pageSize }, sort: { creationDate: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Message>) => {
        this.messages = page.resources;
        this.totalMessages = page.totalElements;
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
}
