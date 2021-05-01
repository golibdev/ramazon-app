import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HududlarComponent } from './hududlar/hududlar.component';
import { HududComponent } from './hudud/hudud.component';
import { AboutComponent } from './about/about.component';
import { TodayComponent } from './today/today.component';
import { TodaySpecComponent } from './today-spec/today-spec.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'hududlar',
    component: HududlarComponent,
  },
  {
    path: 'hudud/:code',
    component: HududComponent
  },
  {
    path: 'today',
    component: TodayComponent
  },
  {
    path: 'today/:code',
    component: TodaySpecComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
