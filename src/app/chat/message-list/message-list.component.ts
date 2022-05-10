import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';
import { Message } from '../message';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';


@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  public messages: Message[] = [];
  public pageSize = 5;
  public page = 1;
  public totalMessages = 0;

  constructor(
    public router: Router,
    private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messageService.getPage({ pageParams:  { size: this.pageSize }, sort: { creationDate: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Message>) => {
        this.messages = page.resources;
        this.totalMessages = page.totalElements;
      });
  }

  changePage(): void {
    this.messageService.getPage({ pageParams: { page: this.page - 1, size: this.pageSize }, sort: { creationDate: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Message>) => this.messages = page.resources);
  }

  detail(message: Message): void {
    this.router.navigate(['messages', message.id]);
  }
}