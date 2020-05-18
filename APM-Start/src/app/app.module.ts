import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertTospaces } from './shared/conver-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import {Router}
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertTospaces,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   HttpClientModule,
   Router
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule { }
