import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../message.service';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {User} from '../../login-basic/user';
import {Message} from '../message';


@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {
  public user: User = new User();
  public message: Message = new Message();

  constructor(private route: ActivatedRoute,
              private messageService: MessageService,
              private authenticationService: AuthenticationBasicService
  ) { }

  ngOnInit(): void {
    const idMessage = this.route.snapshot.paramMap.get('idMessage');
    this.messageService.getResource(idMessage).subscribe(
      message => {
        this.message = message;
        this.message.getRelation('author').subscribe((author: User) => {
          this.message.author = author;
        });
      });
  }

}
