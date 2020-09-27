import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [ //Rotas para os respectivos componentes
  { path: '', component: ProductsComponent },
  { path: 'novo', component: ProductFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
