import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductsService]
})
export default class ProductListComponent {
  private productsServices = inject(ProductsService);
  constructor(){
    this.productsServices.getProducts().subscribe((products) => {
      console.log(products);
    })
  }
}
