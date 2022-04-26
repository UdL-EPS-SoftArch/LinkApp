import { Injectable } from '@angular/core';
import {Group} from '../Group';
import {GROUPS} from '../mock-groups';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  getGroups(): Group[] {
    return GROUPS;
  }
}
