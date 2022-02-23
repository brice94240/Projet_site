import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album, List } from '../album';
import { AlbumService } from '../album.service';
import { ALBUM_LISTS } from '../mock-albums';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
  animations: [
    trigger('details', [
      state('open', style({
        backgroundColor : 'yellow'
      })),
      state('opening', style({
        backgroundColor : 'red',
      })),
      transition('opening => open', [
        animate('1s')
      ]),
    ]),
  ],
})
export class AlbumDetailsComponent implements OnInit {
 
  @Input() album: Album;
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();
  isOpen : boolean = false;

  albumLists: List[];
  songs: any;
  list: any;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {

   if(this.album) {
    //this.songs = this.albumLists.find(elem => elem.id === this.album.id)?.list
    this.songs = this.albumService.getAlbumList(this.album.id)?.list;
   }
  }

  play(album: Album) {
    this.onPlay.emit(album); // émettre un album vers le parent
  }
}
