import {Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from './post.service';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {User} from '../../login-basic/user';
import {Post} from './post';
import {PagedResourceCollection} from '@lagoshny/ngx-hateoas-client';
import {UserRoleKey} from './UserRoleKey';
import {UserRole} from './UserRole';
import {Group} from "../../group/group";
import {GroupService} from "../../group/group.service";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnChanges, OnDestroy {
  public user: User = new User();
  public posts: Post[] = [];
  public totalPosts = 0;

  /*Group sent via group-structure*/
  @Input()
  public group: Group;
  @Input()
  public father: Post;
  @Input()
  public layer: number;
  public layerEm: string;

  constructor(private route: ActivatedRoute,
              private groupService: GroupService,
              private postService: PostService,
              private authenticationService: AuthenticationBasicService
  ) { }

  replyPost(postUri: string): void {
    window.scrollTo(0, 0);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }

  ngOnDestroy() {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.layerEm = this.layer.toString().concat('em');
    if (this.father == null) {
      this.postService.findByGroupAndFatherIsNull(this.group.uri).subscribe(
        page => {
          this.posts = page.resources;
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < this.posts.length; i++) {
            this.posts[i].getRelation('user').subscribe((author: User) => {
              this.posts[i].author = author;
            });
          }
        });
    } else {
      this.postService.findByGroupAndFather(this.group.uri, this.father.uri).subscribe(
        page => {
          this.posts = page.resources;
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < this.posts.length; i++) {
            this.posts[i].getRelation('user').subscribe((author: User) => {
              this.posts[i].author = author;
            });
          }
        });
    }
  }
}



