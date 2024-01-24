import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserRoutingModule } from './user/user-routing.module.ts';

@NgModule({
  declarations: [
    UserhomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class MymoduleModule { }
