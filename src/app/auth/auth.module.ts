import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { SaveUserComponent } from './save-user/save-user.component';
import { GetUserComponent } from './get-user/get-user.component';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [SaveUserComponent, GetUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  providers:[AuthService]
})
export class AuthModule { }
