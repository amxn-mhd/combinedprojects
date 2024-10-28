import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChidlAComponent } from './first/chidl-a/chidl-a.component';
import { ChidlBComponent } from './first/chidl-b/chidl-b.component';
export const routes: Routes = [
    {
        path: 'first-component',component:FirstComponent,
        children:[
            {path:'',redirectTo:'child-a',pathMatch:'full'},
            {
                path:'child-a',
                component:ChidlAComponent,
            },
            {
                path:'child-b',
                component:ChidlBComponent,
            }

        ]
    },
    {path: 'second-component',component:SecondComponent},
    {path: '404notfound',component:PageNotFoundComponent},
    {path:'', redirectTo:'/first-component',pathMatch:'full'}
];