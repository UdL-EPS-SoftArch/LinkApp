import {Component, Input, OnInit} from '@angular/core';
import {Group} from '../../group-structure/group';
import {Post} from '../posts/post';
import {PostService} from '../posts/post.service';
import {Router} from '@angular/router';
import {PostsComponent} from '../posts/posts.component';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  @Input()
  public group: Group;
  @Input()
  public father: Post;
  public post: Post;

  constructor(
    private router: Router,
    private postService: PostService) { }

  ngOnInit(): void {
    this.post = new Post();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


  onSubmit(): void{
    this.post.group = this.group;
    if (this.father != null){
      this.post.father = this.father;
    }
    this.postService.createResource({body: this.post}).subscribe(
      post => {
        this.router.navigate([post.uri]);
      }
    );
    const positionY = window.scrollY;
    const positionX = window.scrollX;
    window.location.reload();
  }
}
