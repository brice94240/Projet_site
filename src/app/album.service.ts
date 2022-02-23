import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album, List } from './album';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  albums: Album[] = ALBUMS;
  albumList: List[] = ALBUM_LISTS;

  sendCurrentNumberPage = new Subject<number>(); // pour mettre à jour la pagination
  subjectAlbum = new Subject<Album>(); // pour émettre des informations de l'écoute d'un Album

  constructor() { }

  getAlbums(): Album[] {

    return this.albums.sort(
      (a, b) => b.duration - a.duration
    );

  }

  getAlbum(id: string): Album  {

    return this.albums.find(album => album.id === id);

  }

  getAlbumList(id: string): List {

    return this.albumList.find(list => list.id === id);

  }

  count(): number{

    return this.albums.length;

  }

  paginate(start: number, end: number): Album[]{

    // utilisez la méthode slice pour la pagination
    return this.albums.sort(
      (a, b) => b.duration - a.duration
    ).slice(start, end);
   }

   // méthode search
  search(word: string): Album[] {
    const re = new RegExp(word.trim(), 'g');
    return this.albums.filter(album => album.title.match(re) && album.title.match(re).length > 0) ;
  }

  paginateNumberPage(): number{
    if ( typeof environment.numberPage === 'undefined' ) {
      throw new Error('Attention la pagination n\'est pas définie') ;
    }
    return environment.numberPage;
  }

  // Audio-player 
  switchOn(album: Album) {

    this.albums.forEach(
      a => {
        if (a.ref === album.ref)   album.status = 'on';
        else
          a.status = 'off';
      }
    );

    this.subjectAlbum.next(album); // Observer puscher les informations
  }

  // Cette méthode n'a pas besoin d'émettre une information à l'Observable
  switchOff(album: Album) {
    this.albums.forEach(
      a => {
        a.status = 'off';
      }
    );
  }

  currentPage(page: number) {
    return this.sendCurrentNumberPage.next(page);
  }

}
