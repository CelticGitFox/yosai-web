import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from './system/auth/auth.module';
import { AuthGuard } from './system/auth/auth.guard';
import { LayoutHomeComponent } from './layout/layout-home/layout-home.component';

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule), component: LayoutHomeComponent },
      { path: 'nosotros', loadChildren: () => import('./module/nosotros/nosotros.module').then(m => m.NosotrosModule), component: LayoutHomeComponent },
      { path: 'servicios', loadChildren: () => import('./module/servicios/servicios.module').then(m => m.ServiciosModule), component: LayoutHomeComponent },
      { path: 'contactos', loadChildren: () => import('./module/contactos/contactos.module').then(m => m.ContactosModule), component: LayoutHomeComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }

    ], { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutes {
}
