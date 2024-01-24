import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MymoduleModule } from './mymodule/mymodule.module';
import { UserhomeComponent } from './mymodule/userhome/userhome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path:'user',loadChildren:()=>import('./mymodule/mymodule.module').then(m=>m.MymoduleModule)
  },
  //{
    //path:'navbar', component:NavbarComponent
 // },
  {
    path:'userhome',component:UserhomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
