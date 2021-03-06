import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxHateoasClientConfigurationService, NgxHateoasClientModule} from '@lagoshny/ngx-hateoas-client';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './error-handler/error-alert/not-found.component';
import {UserRegisterComponent} from './user/user-register/user-register.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';
import {UserDeleteComponent} from './user/user-delete/user-delete.component';
import {UserSearchComponent} from './user/user-search/user-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgbCollapseModule, NgbDropdownModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginBasicModule} from './login-basic/login-basic.module';
import {ErrorHandlerModule} from './error-handler/error-handler.module';
import {AuthInterceptor} from './login-basic/auth-interceptor';
import {HttpErrorInterceptor} from './error-handler/http-error-interceptor';
import {AuthenticationBasicService} from './login-basic/authentication-basic.service';
import {LoggedInGuard} from './login-basic/loggedin.guard';
import {UserService} from './user/user.service';
import { FeedComponent } from './feed/feed/feed.component';
import { MessageListComponent } from './chat/message-list/message-list.component';
import { MessageDetailComponent } from './chat/message-detail/message-detail.component';
import {MeetCreateComponent} from './meet/meet-create/meet-create-component';
import { FooterComponent } from './footer/footer.component';
import {MeetDetailComponent} from './meet/meet-detail/meet-detail.component';
import { MeetHeaderComponent } from './meet/meet-detail/meet-header/meet-header.component';
import { GroupListComponent } from './group/group-list/group-list.component';
import { GroupItemComponent } from './group/group-item/group-item.component';
import { GroupSearchComponent } from './group/group-search/group-search.component';
import { MeetCardComponent } from './meet/meet-card/meet-card.component';
import { MeetCardListComponent } from './meet/meet-card-list/meet-card-list.component';
import { MeetDeleteComponent } from './meet/meet-detail/meet-delete/meet-delete.component';
import {CommonModule} from "@angular/common";
import {GroupStructureComponent} from './group-structure/group-structure.component';
import {PostsComponent} from './post/posts/posts.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { GroupMembersComponent } from './group-members/group-members.component';
import { CreateMessageComponent } from './chat/create-message/create-message.component';
import { GroupCreateComponent } from './group/group-create/group-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    NotFoundComponent,
    UserListComponent,
    UserDetailComponent,
    UserRegisterComponent,
    MeetCreateComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserSearchComponent,
    MessageListComponent,
    MessageDetailComponent,
    UserSearchComponent,
    FeedComponent,
    MeetHeaderComponent,
    FooterComponent,
    MeetDetailComponent,
    UserSearchComponent,
    GroupListComponent,
    GroupItemComponent,
    GroupSearchComponent,
    CreateMessageComponent,
    GroupSearchComponent,
    GroupStructureComponent,
    PostsComponent,
    PostCreateComponent,
    GroupMembersComponent,
    GroupSearchComponent,
    MeetCardComponent,
    MeetCardListComponent,
    MeetDeleteComponent,
    GroupCreateComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        NgbCollapseModule,
        NgbDropdownModule,
        NgbPaginationModule,
        NgxHateoasClientModule.forRoot(),
        LoginBasicModule,
        ErrorHandlerModule,
        NgbModule,
        ReactiveFormsModule,
        CommonModule,
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    AuthenticationBasicService, LoggedInGuard, UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(hateoasConfig: NgxHateoasClientConfigurationService) {
    hateoasConfig.configure({
      http: {
        rootUrl: environment.API
      }
    });
  }
}
