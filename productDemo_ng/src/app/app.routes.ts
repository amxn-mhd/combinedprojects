import { Routes } from '@angular/router';
// import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PListComponent } from './services/p-list/p-list.component';
import { PAddComponent } from './services/p-add/p-add.component';
import { PDeleteComponent } from './services/p-delete/p-delete.component';
import { PDetailsComponent } from './services/p-details/p-details.component';
import { PUpdateComponent } from './services/p-update/p-update.component';
import { PHomeComponent } from './services/p-home/p-home.component';
export const routes: Routes = [
    // {path:'/list', component:PListComponent}
    {path: 'plist',component:PListComponent},
    {path:'padd',component:PAddComponent},
    {path:'pdelete',component:PDeleteComponent},
    {path:'pdetails',component:PDetailsComponent},
    {path:'pupdate',component:PUpdateComponent},
    {path:'phome',component:PHomeComponent},
    {path:'', redirectTo:'/phome',pathMatch:'full'}
    // {path:'',redirectTo:'phome', component:PHomeComponent},



];
