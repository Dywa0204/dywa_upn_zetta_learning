import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { RemoveProductComponent } from './remove-product/remove-product.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';



@NgModule({
  declarations: [
    AddProductComponent,
    RemoveProductComponent,
    AddToCartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddProductComponent,
    RemoveProductComponent,
    AddToCartComponent
  ]
})
export class ProductsModule { }
