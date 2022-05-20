import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {Location} from '@angular/common';
import {Group} from '../group';
import {GroupService} from '../group.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './group-create.component.html'
})

export class GroupCreateComponent implements OnInit {
  public group: Group;

  constructor(private router: Router,
              private location: Location,
              private groupService: GroupService) {
  }

  ngOnInit(): void {
    this.group = new Group();
  }

  onSubmit(): void {
    this.groupService.createResource({ body: this.group }).subscribe(
      group => {
        this.router.navigate([group.uri]);
      });
  }

  onCancel(): void {
    this.location.back();
  }
}
