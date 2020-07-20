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
      { path: 'productos', loadChildren: () => import('./module/productos/productos.module').then(m => m.ProductosModule), component: LayoutHomeComponent },
      { path: 'nosotros', loadChildren: () => import('./module/nosotros/nosotros.module').then(m => m.NosotrosModule), component: LayoutHomeComponent },
      { path: 'contactos', loadChildren: () => import('./module/contactos/contactos.module').then(m => m.ContactosModule), component: LayoutHomeComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }

    ], { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutes {
}
