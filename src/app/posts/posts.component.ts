import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from './post.service';
import {AuthenticationBasicService} from '../login-basic/authentication-basic.service';
import {User} from '../login-basic/user';
import {Post} from './post';
import {Group} from '../group-structure/group';
import {GroupService} from '../group-structure/group.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public user: User = new User();
  public group: Group = new Group();
  public post: Post = new Post();

  constructor(private route: ActivatedRoute,
              private groupService: GroupService,
              private postService: PostService,
              private authenticationService: AuthenticationBasicService
  ) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getResource('1').subscribe(
      post => {
        this.post = post;
      });
  }

}



