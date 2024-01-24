import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent} from '.user/user.module';

const routes: Routes = [
    //{
     //   path:'user',loadChildren:()=>import('./mymodule/mymodule.module').then(m=>m.MymoduleModule)
   // },
    {
        path:"userhome",component:UserComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class UserRoutingModule { }