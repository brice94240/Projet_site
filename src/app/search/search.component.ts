import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchAlbums: EventEmitter<Album[]> = new EventEmitter(); // émission des données vers le parent

  constructor(private ablumService: AlbumService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    let results = this.ablumService.search(form.value['word']);
    if (results.length > 0) {
      this.searchAlbums.emit(results);
    }
    console.log(form);
  }  
}
