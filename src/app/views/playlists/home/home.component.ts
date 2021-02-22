import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PlaylistFormDialogComponent } from './playlist-form-dialog/playlist-form-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  add(): void {
    const dialogRef = this.dialog.open(PlaylistFormDialogComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
