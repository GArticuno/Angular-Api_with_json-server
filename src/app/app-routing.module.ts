import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'playlists', loadChildren: () => import('./views/playlists/playlists.module').then(m => m.PlaylistsModule) },
  {
    path: '',
    redirectTo: '/playlists',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
