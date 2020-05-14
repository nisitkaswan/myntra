import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRoutingModule } from './products-routing.module';
import { ProductsFiltersComponent } from './products-filters/products-filters.component';



@NgModule({
  declarations: [ProductsListComponent, ProductsFiltersComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
    ProductRoutingModule
  ]
})
export class ProductsModule { }
