import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './main-components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FeaturedPostComponent } from './components/featured-post/featured-post.component';
import { RelatedPostsComponent } from './components/related-posts/related-posts.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './pipes/truncate.pipe';
import { RandomcolorDirective } from './directives/randomcolor.directive';
import { TagsMenuComponent } from './components/tags-menu/tags-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    PostDetailComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    FeaturedPostComponent,
    RelatedPostsComponent,
    SinglePostComponent,
    TruncatePipe,
    RandomcolorDirective,
    TagsMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
