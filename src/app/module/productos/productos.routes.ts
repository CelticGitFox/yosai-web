import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../../system/auth/auth.guard';
import {AuthModule} from '../../system/auth/auth.module';
import {PlasticMetalComponent} from './plasticMetal/plasticMetal.component';
import {PlasticPartsComponent} from './plasticParts/plasticParts.component';
import {CoolingProductsComponent} from './CoolingProducts/CoolingProducts.component';
import {ProductosComponent} from './productos.component';
import { RadiatorComponent } from './Radiator/Radiator.component';
import { LampsComponent } from './Lamps/Lamps.component';

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([
      {
        path: '', component: ProductosComponent,
        children: [
          {path: 'PlasticMetal', component: PlasticMetalComponent },
          {path: 'PlasticParts', component: PlasticPartsComponent },
          {path: 'CoolingProducts', component: CoolingProductsComponent },
          {path: 'Radiator', component: RadiatorComponent},
          {path: 'Lamps', component: LampsComponent}
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ProductosRoutes {
}
