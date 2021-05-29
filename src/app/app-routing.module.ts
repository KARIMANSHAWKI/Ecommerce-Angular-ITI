import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { EditGoodsComponent } from './components/edit-goods/edit-goods.component';
import { AdminGuard } from './services/gaurds/admin.guard';
import { AuthGuard } from './services/gaurds/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  {
    path: 'user/orders',
    component: UserOrdersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/edit-goods',
    component: EditGoodsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'goods/create',
    component: GoodsComponent,
    canActivate: [AdminGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
