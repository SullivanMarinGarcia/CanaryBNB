import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Importa AngularFirestoreModule

/* componentes */
import { AppComponent } from './app.component';
import { HeaderloggedComponent } from './headerlogged/headerlogged.component';
import { HeaderunloggedComponent } from './headerunlogged/headerunlogged.component';
import { HomeComponent } from './home/home.component';
import { DisponiblesComponent } from './disponibles/disponibles.component';
import { HotelfilterComponent } from './hotelfilter/hotelfilter.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SpecifichotelComponent } from './specifichotel/specifichotel.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { ReservationHistorialComponent } from './reservation-historial/reservation-historial.component';

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
    ReservationHistorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // Añade AngularFirestoreModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
