import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PlayListService } from 'src/app/shared/service/PlayList.service';

@Component({
  selector: 'app-playlist-form-dialog',
  templateUrl: './playlist-form-dialog.component.html',
  styleUrls: ['./playlist-form-dialog.component.scss']
})
export class PlaylistFormDialogComponent implements OnInit {

  public playlistForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: PlayListService,
    public dialogRef: MatDialogRef<PlaylistFormDialogComponent>
    ) { }

  ngOnInit(): void {
    this.playlistForm=this.fb.group({
      playListName: ['',[Validators.required]],
      channelName: ['',[Validators.required]],
      playListLink: ['',[Validators.required]],
      playListTheme: ['',[Validators.required]],
    })
  }

  createPlayList(){
    this.rest.postPlayLists(this.playlistForm.value).subscribe();
    this.dialogRef.close();
    this.playlistForm.reset();
    window.location.reload();
  }
  cancel(): void {
    this.dialogRef.close();
    this.playlistForm.reset();
  }
}
