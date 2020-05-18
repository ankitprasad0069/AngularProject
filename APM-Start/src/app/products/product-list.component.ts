import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from '../product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listfilter: string;
    filteredProducts: IProduct[];
    products: IProduct[];
    get listFilter(): string {
        return this._listfilter;
    }
    set listFilter(value: string) {
        this._listfilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    constructor(private service: ProductService) {
        
    }
    ngOnInit(): void {
         this.service.getProducts().subscribe({
             next:(products)=>{
                 this.products=products;
                 this.filteredProducts=this.products;
             }
         });
       // this.filteredProducts = this.products;
    }


    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ChangeTitle(message: string): void {
        // let before=this.pageTitle;
        this.pageTitle = "Product List " + message;
        // this.pageTitle=before;
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}