import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../layout/layout.module';
import { ProductosComponent } from './productos.component';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../../common/loader/loader.module';
import {ProductosRoutes} from './productos.routes';
import {NgxSpinnerModule} from 'ngx-spinner';
import {PlasticMetalComponent} from './plasticMetal/plasticMetal.component';
import { PlasticPartsComponent } from './plasticParts/plasticParts.component';
import { CoolingProductsComponent } from './CoolingProducts/CoolingProducts.component';
import { RadiatorComponent } from './Radiator/Radiator.component';
import { LampsComponent } from './Lamps/Lamps.component';
import { MetalPartsComponent } from './MetalParts/MetalParts.components';
import { CondenserComponent } from './Condenser/Condenser.component';
import { CoolingFanComponent } from './CoolingFan/CoolingFan.component';


@NgModule({
  imports: [
    ProductosRoutes,
    CommonModule,
    LoaderModule,
    LayoutModule,
    NgxSpinnerModule,
    RouterModule.forChild([
      {path: '', component: ProductosComponent}
    ]),
  ],
  declarations: [
    ProductosComponent, 
    PlasticMetalComponent, 
    PlasticPartsComponent , 
    CoolingProductsComponent, 
    RadiatorComponent , 
    LampsComponent,
    MetalPartsComponent,
    CondenserComponent,
    CoolingFanComponent
  ],
  exports: [ProductosComponent]
})
export class ProductosModule {
}
