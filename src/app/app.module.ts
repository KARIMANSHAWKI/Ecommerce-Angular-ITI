import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { OrdersComponent } from './components/orders/orders.component';
import { GoodsComponent } from './components/goods/goods.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    AccountComponent,
    OrdersComponent,
    GoodsComponent,
    NotFoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAhscYBl9sbtka0_ojiAQF0Ofxs0ab2OtY',
      authDomain: 'ecommerce-2fdd3.firebaseapp.com',
      projectId: 'ecommerce-2fdd3',
      storageBucket: 'ecommerce-2fdd3.appspot.com',
      messagingSenderId: '160213326028',
      appId: '1:160213326028:web:6f868b0d799d80e340ca69',
      measurementId: 'G-Y2G15JE996',
    }),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
