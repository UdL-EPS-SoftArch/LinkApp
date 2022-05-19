import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './error-handler/error-alert/not-found.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import {GroupListComponent} from './group/group-list/group-list.component';
import {GroupSearchComponent} from './group/group-search/group-search.component';
import { GroupCreateComponent } from './group/group-create/group-create.component';
import { FeedComponent } from './feed/feed/feed.component';
import { MessageListComponent } from './chat/message-list/message-list.component';
import { MessageDetailComponent } from './chat/message-detail/message-detail.component';
import { MeetCreateComponent } from './meet/meet-create/meet-create-component';
import { MeetDetailComponent } from './meet/meet-detail/meet-detail.component';
import {GroupItemComponent} from "./group/group-item/group-item.component";
import {MeetCardComponent} from "./meet/meet-card/meet-card.component";
import {MeetCardListComponent} from "./meet/meet-card-list/meet-card-list.component";
import {GroupStructureComponent} from './group-structure/group-structure.component';
import {PostsComponent} from './post/posts/posts.component';


const routes: Routes = [
  { path: 'feed', component: FeedComponent},
  { path: 'groups/:id/meet-card-list', component: MeetCardListComponent},
  { path: 'meets/:id/message-list', component: MessageListComponent},
  { path: 'meets/:id/message-list', component: MessageListComponent},
  { path: 'meets/:id/message-list/:idMessage', component: MessageDetailComponent},
  { path: 'groups/:id/createMeet', component: MeetCreateComponent},
  { path: 'meets/:id', component: MeetDetailComponent},
  { path: 'users/create', component: UserRegisterComponent},
  { path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'users', component: UserListComponent, canActivate: [LoggedInGuard]},
  { path: 'groups/create', component: GroupCreateComponent},
  { path: 'groups', component: GroupListComponent},
  { path: 'groups/:id', component: GroupItemComponent},
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: 'group/:id/meets', component: GroupStructureComponent},
  { path: 'group/:id/posts', component: GroupStructureComponent},
  { path: 'posts', component: PostsComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
