import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { Location } from '@angular/common';
import {Meet} from '../meet';
import {MeetService} from '../meet.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './meet-create-component.html'
})
export class MeetCreateComponent implements OnInit {
  public meet: Meet;

  constructor(private router: Router,
              private location: Location,
              private meetService: MeetService) {
  }

  ngOnInit(): void {
    this.meet = new Meet();
  }

  onSubmit(): void {
    this.meetService.createResource({ body: this.meet }).subscribe(
      () => {
        console.log('HELLOOO');
        console.log(this.meet);
      });
  }

  onCancel(): void {
    this.location.back();
  }
}
