import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GroupService} from './group.service';
import {AuthenticationBasicService} from '../login-basic/authentication-basic.service';
import {User} from '../login-basic/user';
import {Group} from './group';


@Component({
  selector: 'app-group-structure',
  templateUrl: './group-structure.component.html',
  styleUrls: ['./group-structure.component.css']
})
export class GroupStructureComponent implements OnInit {
  public user: User = new User();
  public group: Group = new Group();

  constructor(private route: ActivatedRoute,
              private groupService: GroupService,
              private authenticationService: AuthenticationBasicService
              ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.groupService.getResource(id).subscribe(
      group => {
        this.group = group;
      });
  }

}
