import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DefaultComponent } from './components/default/default.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
    //   {
    //     path: '',
    //     component: DashboardComponent
    //   },
    //   {
    //     path: 'table',
    //     component: TableComponent
    //   },
    //   {
    //     path: 'products',
    //     component: ProductListComponent
    //   },   
    //   {
    //     path: 'products/create',
    //     component: FormProductComponent
    //   }, 
      
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
