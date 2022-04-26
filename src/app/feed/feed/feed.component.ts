import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { UserService } from '../../user/user.service';
import { User } from '../../login-basic/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  public user: User;

  constructor(private router: Router,
              private location: Location,
              private userService: UserService,
              private authenticationBasicService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.user = new User();
  }

}
