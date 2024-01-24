import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
    //{
     //   path:'user',loadChildren:()=>import('./mymodule/mymodule.module').then(m=>m.MymoduleModule)
   // },
    {
        path:"userhome",component:UserhomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class UserRoutingModule { }
