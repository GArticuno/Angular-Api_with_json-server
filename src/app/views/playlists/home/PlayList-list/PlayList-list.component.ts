import { Component, OnInit } from '@angular/core';
import { PlayListService } from 'src/app/shared/service/PlayList.service';
import { PlayList } from 'src/app/shared/model/PlayList.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-PlayList-list',
  templateUrl: './PlayList-list.component.html',
  styleUrls: ['./PlayList-list.component.scss']
})
export class PlayListListComponent implements OnInit {

  PlayListsSource: PlayList[] = [];
  PlayListsTerror: PlayList[] = [];
  PlayListsAventura: PlayList[] = [];
  urlSafe!: SafeResourceUrl;
  source: boolean = false;
  terror: boolean = false;
  aventura: boolean = false;

  constructor(
    private rest: PlayListService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
   this.getPlayLists();
  }

  getPlayLists(){
    this.rest.getPlayLists().subscribe(data => {
      this.PlayListsSource = data;
      console.log(this.PlayListsSource)
      this.PlayListsSource.forEach( play =>{
        play.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(play.PlayListLink);
      })
      this.source=true;
    });

    this.rest.getPlayListsByGender("Terror").subscribe(data => {
      this.PlayListsTerror = data;
      console.log(this.PlayListsTerror)
      this.PlayListsTerror.forEach( play =>{
        play.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(play.PlayListLink);
      })
      this.terror=true;
    });

    this.rest.getPlayListsByGender("Aventura").subscribe(data => {
      this.PlayListsAventura = data;
      console.log(this.PlayListsAventura)
      this.PlayListsAventura.forEach( play =>{
        play.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(play.PlayListLink);
      })
      this.aventura=true;
    });
  }

}