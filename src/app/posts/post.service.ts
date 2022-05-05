import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Post } from './post';
import {User} from '../login-basic/user';

@Injectable({providedIn: 'root'})
export class PostService extends HateoasResourceOperation<Post> {

  constructor() {
    super(Post);
  }

  public findByGroupContaining(query: string): Observable<ResourceCollection<Post>> {
    return this.searchCollection('findByGroupContaining', { params: { text: query } });
  }

  public findByFatherContaining(query: string): Observable<ResourceCollection<Post>> {
    return this.searchCollection('findByFatherContaining', { params: { text: query } });
  }

}
