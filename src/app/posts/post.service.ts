import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Post } from './post';
import {User} from '../login-basic/user';
import {Group} from '../group-structure/group';
import {PagedResourceCollection} from '@lagoshny/ngx-hateoas-client/lib/model/resource/paged-resource-collection';

@Injectable({providedIn: 'root'})
export class PostService extends HateoasResourceOperation<Post> {

  constructor() {
    super(Post);
  }

  public findByGroup(query: string): Observable<ResourceCollection<Post>> {
    return this.searchCollection('findByGroup', { params: { group: query } });
  }

  public findByGroup2(query: string): Observable<PagedResourceCollection<Post>> {
    /*const options: any = {params: [{key: 'group', value: group.uri}]};*/
    return this.searchPage('findByGroup', { params: { text: query } });
  }

  public findByGroupAndFatherIsNull(groupUri: string): Observable<ResourceCollection<Post>> {
    return this.searchCollection('findByGroupAndFatherIsNull', { params: { group: groupUri } });
  }

  public findByGroupAndFather(groupUri: string, fatherURI: string): Observable<ResourceCollection<Post>> {
    const options = {params: {group: groupUri, father: fatherURI}};
    return this.searchCollection('findByGroupAndFather', options);
  }

  public findByFather(query: string): Observable<ResourceCollection<Post>> {
    return this.searchCollection('findByFather', { params: { text: query } });
  }

  public findByTextContaining(query: string): Observable<ResourceCollection<Post>> {
    return this.searchCollection('findByTextContaining', { params: { text: query } });
  }
}
