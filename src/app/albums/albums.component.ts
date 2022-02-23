import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  titlePage = 'Page princiaple Albums Music';
  albums: Album[];
  selectedAlbum: Album;
  status: string = null;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    // this.albums = this.albumService.getAlbums();
    // this.albums = this.albumService.paginate(0, 5);
    this.albums = this.albumService.paginate(
      0,
      this.albumService.paginateNumberPage()
      );
  }

  onSelect(album: Album) {
    // console.log(album);
    this.selectedAlbum = album;
  }

  playParent($event){
    this.status = $event.id; // identifiant unique
    this.albumService.switchOn($event);
  }

  search($event){
    if ($event) {
      this.albums = $event;
    }
  }

  // mise à jour de la pagination
  paginate($event) {
    this.albums = this.albumService.paginate($event.start, $event.end);
  }
}
