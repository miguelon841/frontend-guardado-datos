import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetUserComponent } from './get-user/get-user.component';
import { SaveUserComponent } from './save-user/save-user.component';

const routes: Routes = [
    {path: 'getUser', component: GetUserComponent},
    {path: 'saveUser', component: SaveUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
