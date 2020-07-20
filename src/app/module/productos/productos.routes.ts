import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../../system/auth/auth.guard';
import {AuthModule} from '../../system/auth/auth.module';
import {PlasticMetalComponent} from './plasticMetal/plasticMetal.component';
import {ProductosComponent} from './productos.component';

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([
      {
        path: '', component: ProductosComponent,
        children: [
          {path: 'PlasticMetal', component: PlasticMetalComponent },
          {path: 'Listado_Productos', component: PlasticMetalComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ProductosRoutes {
}
