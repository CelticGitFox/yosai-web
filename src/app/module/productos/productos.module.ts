import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../layout/layout.module';
import { ProductosComponent } from './productos.component';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../../common/loader/loader.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { PlasticMetal } from "./PlasticMetal/PlasticMetal.component";
import {ProductosRoutes} from "./productos.routes";

@NgModule({
  imports: [
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
    PlasticMetal
  ],
  exports: [ProductosComponent]
})
export class ProductosModule {
}
