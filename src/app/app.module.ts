import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DescriptionComponent } from './description/description.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginateComponent } from './paginate/paginate.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';

const albumsRoutes: Routes = [
  {
    path: 'albums',
    component: AlbumsComponent
    },
    {
    path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
    },
    {
    path: 'login',
    component: LoginComponent
    },
    {
    path: 'album/:id',
    component: DescriptionComponent
    },  
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    SearchComponent,
    LoginComponent,
    DescriptionComponent,
    PaginateComponent,
    AudioPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(albumsRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
