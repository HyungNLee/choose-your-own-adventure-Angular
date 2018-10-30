import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { StoryPageComponent } from './story-page/story-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FrontPageComponent
  },
  {
    path: 'story/:id',
    component: StoryPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);