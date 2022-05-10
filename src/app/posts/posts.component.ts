import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from './post.service';
import {AuthenticationBasicService} from '../login-basic/authentication-basic.service';
import {User} from '../login-basic/user';
import {Post} from './post';
import {Group} from '../group-structure/group';
import {GroupService} from '../group-structure/group.service';
import {PagedResourceCollection} from '@lagoshny/ngx-hateoas-client';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
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

  ngOnInit(): void {
    this.layerEm = this.layer.toString().concat(' em');
    if (this.father == null){
      this.postService.findByGroupAndFatherIsNull(this.group.uri).subscribe(
        page => {
          this.posts = page.resources;
        });
    }else{
      this.postService.findByGroupAndFather(this.group.uri, this.father.uri).subscribe(
        page => {
          this.posts = page.resources;
        });
    }
  }

}



