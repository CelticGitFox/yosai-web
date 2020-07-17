import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../layout/layout.module';
import { ContactosComponent } from './contactos.component';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../../common/loader/loader.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';
@NgModule({

  imports: [
    CommonModule,
    LoaderModule,
    LayoutModule,
    NgxSpinnerModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: ContactosComponent}
    ]),
  ],
  declarations: [ContactosComponent],
  exports: [ContactosComponent]
})
export class ContactosModule {
}
