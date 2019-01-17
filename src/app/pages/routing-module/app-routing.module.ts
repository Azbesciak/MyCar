import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Paths} from './paths';


const routes: Routes = [
  {path: Paths.HOME, loadChildren: '../search/search.module#SearchModule'},
  {path: Paths.RESULTS, loadChildren: '../result-list/result-list.module#ResultListModule'},
  {path: Paths.USER, loadChildren: '../user-dashboard/user-dashboard.module#UserDashboardModule'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
