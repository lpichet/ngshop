import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CartComponent } from './cart/cart/cart.component';

export const routes: Routes = [
    {path:'login', component: LoginComponent, title: 'Login'},
    {path:'product/:id', component: ProductDetailComponent, title: 'Product'},
    {path: 'products/:category', component: ProductListComponent, title: 'Product List'},
    {path: 'products', component: ProductListComponent, title: 'Product List'},
    { path: 'cart', component: CartComponent, title: 'Cart'},
    {path: '', redirectTo: '/products', pathMatch: "full"}
];
