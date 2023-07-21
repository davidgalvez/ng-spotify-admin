import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';

const routes: Routes = [{
  path:'',
  component: UserComponent,
  children:[
    {
      path:'list',
      component: UserListComponent
    },
    {
      path:'add',
      component:UserAddComponent
    },
    {
      path:'edit',
      component:UserEditComponent
    },
    {
      path:'delete',
      component:UserDeleteComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
