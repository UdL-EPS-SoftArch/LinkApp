import { Component, OnInit, Input } from '@angular/core';
import {Group} from '../Group';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../user/user.service";
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";
import { GroupService } from '../group.service';
import {User} from "../../login-basic/user";

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css']
})
export class GroupItemComponent implements OnInit {
  public group: Group = new Group();

  constructor(private route: ActivatedRoute,
              private groupService: GroupService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.groupService.getResource(id).subscribe(
      group => {
        this.group = group;
      });
  }

}
