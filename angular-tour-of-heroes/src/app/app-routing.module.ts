import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from "./components/heroes/heroes.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dash',
    component: DashboardComponent
  },
  {
    path: 'heroes/:id',
    component: HeroDetailComponent
  },
  {
    path: '',
    redirectTo: '/dash',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
