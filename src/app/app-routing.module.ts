import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

const appRoutes : Routes = [
  {path: '',component: HomeComponent}, 
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  
  ],
  exports: [
    RouterModule
  ]
  
})
export class AppRoutingModule { }
