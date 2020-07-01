import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { CounterComponent } from './components/counter/counter.component';
import { MediaContainerComponent } from './components/media-container/media-container.component';



const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'shopping',
    component: ShoppingComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  },
  {
    path: 'media',
    component: MediaContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
