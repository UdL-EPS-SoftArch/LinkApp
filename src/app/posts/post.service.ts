import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Post } from './post';
import {User} from '../login-basic/user';
import {Group} from '../group-structure/group';

@Injectable({providedIn: 'root'})
export class PostService extends HateoasResourceOperation<Post> {

  constructor() {
    super(Post);
  }

  public findByGroup(query: string): Observable<ResourceCollection<Post>> {
    return this.searchCollection('findByGroup', { params: { text: query } });
  }

  public findByGroup2(group: Group): Observable<ResourceCollection<Post>> {
    const options: any = {params: [{key: 'group', value: group.uri}]};
    return this.searchCollection('findByGroup', options);
  }
/*
  public findByGroupAndFather(group: Group, father: Post): Observable<ResourceCollection<Post>> {
    const options: any = {params: [{key: 'round', value: uri}]};
    return this.searchCollection('findByGroupAndFather', { params: { text: query } });
  }
*/
  public findByFather(query: string): Observable<ResourceCollection<Post>> {
    return this.searchCollection('findByFather', { params: { text: query } });
  }

}
