import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'quescomments',
    loadChildren: () => import('./quescomments/quescomments.module').then( m => m.QuescommentsPageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'weeklyforcast',
    loadChildren: () => import('./weeklyforcast/weeklyforcast.module').then( m => m.WeeklyforcastPageModule)
  },
  {
    path: 'forecast',
    loadChildren: () => import('./forecast/forecast.module').then( m => m.ForecastPageModule)
  },
  {
    path: 'annualforecast',
    loadChildren: () => import('./annualforecast/annualforecast.module').then( m => m.AnnualforecastPageModule)
  },
  {
    path: 'cropmanagement',
    loadChildren: () => import('./cropmanagement/cropmanagement.module').then( m => m.CropmanagementPageModule)
  },
  {
    path: 'crop-cities',
    loadChildren: () => import('./crop-cities/crop-cities.module').then( m => m.CropCitiesPageModule)
  },
  {
    path: 'cropsowing',
    loadChildren: () => import('./cropsowing/cropsowing.module').then( m => m.CropsowingPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
