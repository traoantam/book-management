import { BookService } from './services/book.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router'; 
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { OrderModule } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './services/auth-guard.service';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    NoAccessComponent,
    HeaderComponent,
    ProfileComponent,
    BooksComponent,
    BookListComponent,
    BookDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    OrderModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent, 
        canActivate: [AuthGuard] 
      },
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'no-access', component: NoAccessComponent },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'books/detail/:id', component: BookDetailComponent, canActivate: [AuthGuard] },
      { path: 'books/add', component: BooksComponent, canActivate: [AuthGuard] },
      { path: 'books/edit/:id', component: BooksComponent, canActivate: [AuthGuard] },
      { path: 'book-list', component: BookListComponent, canActivate: [AuthGuard] }
    ])
  ],
  providers: [
    AuthService,
    BookService,
    AuthGuard,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
