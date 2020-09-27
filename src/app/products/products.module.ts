import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppMaterialModule } from '../app-material/app-material.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  declarations: [ProductsComponent, ProductFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    AppMaterialModule,
    MatPaginatorModule
  ]
})
export class ProductsModule { }
