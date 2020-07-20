import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserUIComponent } from './user/user-ui/user-ui.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUiComponent } from './admin/admin-ui/admin-ui.component';

const routes: Routes = [
{ path: '', component: UserComponent},
{path: 'result', component: UserUIComponent},
{path: 'admin', component: AdminComponent},
{path: 'add', component: AdminUiComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
