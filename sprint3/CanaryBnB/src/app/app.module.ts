import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderloggedComponent } from './headerlogged/headerlogged.component';
import { HeaderunloggedComponent } from './headerunlogged/headerunlogged.component';
import { HomeComponent } from './home/home.component';
//import { DisponiblesComponent } from './disponibles/disponibles.component'; // Importa DisponiblesComponent

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule aquí
import { HttpClientModule } from '@angular/common/http';
import { DisponiblesComponent } from './disponibles/disponibles.component';
import { HotelfilterComponent } from './hotelfilter/hotelfilter.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SpecifichotelComponent } from './specifichotel/specifichotel.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderloggedComponent,
    HeaderunloggedComponent,
    HomeComponent,
    DisponiblesComponent,
    HotelfilterComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    SpecifichotelComponent,
    PaymentGatewayComponent,
   
    //DisponiblesComponent // Añade DisponiblesComponent aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Añade FormsModule aquí
    ReactiveFormsModule, // Añade ReactiveFormsModule aquí
    HttpClientModule, // Añade HttpClientModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
