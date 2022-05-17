import {Component, OnInit} from '@angular/core';
import {Group} from '../Group';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {GroupService} from '../group.service';
import {User} from '../../login-basic/user';
import {UserRoleEnum} from '../../role/UserRoleEnum';
import {UserRoleKey} from '../../role/RoleKey';
import {UserRole} from '../../role/UserRole';
import {UserRoleService} from "../../role/userrole.service";

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['../group-list/group-list.component.css']
})
export class GroupItemComponent implements OnInit {
  public group: Group = new Group();
  public user: User = new User();
  private key: UserRoleKey = new UserRoleKey();
  private userRole: UserRole = new UserRole();

  constructor(private route: ActivatedRoute,
              private groupService: GroupService,
              private authenticationService: AuthenticationBasicService,
              private userRoleService: UserRoleService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.groupService.getResource(id).subscribe(
      group => {
        this.group = group;
      });
  }

  joinGroup(element, text): void {
    this.user = this.authenticationService.getCurrentUser();
    this.key.group = this.group.uri;
    this.key.user = '/users/' + this.user.id;
    this.userRole.roleKey = this.key;
    this.userRole.role = 'SUBSCRIBED';
    this.userRoleService.createResource({ body: this.userRole }).subscribe();
    element.textContent = text;
    element.disabled = true;
  }
}
