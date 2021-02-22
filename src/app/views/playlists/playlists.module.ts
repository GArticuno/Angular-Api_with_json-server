import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { HomeComponent } from './home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PlayListListComponent } from './home/PlayList-list/PlayList-list.component';
import { PlaylistFormDialogComponent } from './home/playlist-form-dialog/playlist-form-dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    PlayListListComponent,
    PlaylistFormDialogComponent
  ],
  imports: [
    CommonModule,
    PlaylistsRoutingModule,
    MatChipsModule,
    MatDialogModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ]
})
export class PlaylistsModule { }
