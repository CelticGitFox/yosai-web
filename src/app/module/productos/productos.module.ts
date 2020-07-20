import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../layout/layout.module';
import { ProductosComponent } from './productos.component';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../../common/loader/loader.module';
import {ProductosRoutes} from './productos.routes';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ListadoProductosComponent} from './listadoProductos/listadoProductos.component';
import {PlasticMetalComponent} from './plasticMetal/plasticMetal.component';


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
  declarations: [ProductosComponent, ListadoProductosComponent, PlasticMetalComponent],
  exports: [ProductosComponent]
})
export class ProductosModule {
}
