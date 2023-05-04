import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Añade esto
import { HotelService, Hotel } from '../hotel.service';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-specifichotel',
  templateUrl: './specifichotel.component.html',
  styleUrls: ['./specifichotel.component.css']
})
export class SpecifichotelComponent implements OnInit {

  hotel: Hotel | null = null;
  currentImageIndex: number = 0;

  reservationId: string= '';
  checkIn: string= ''; 
  checkOut: string= '';
  people: string= ''; 
  userEmail:string ='';

  constructor(private hotelService: HotelService, private router: Router, private reservationService: ReservationService) {} // Inyecta Router aquí

  ngOnInit(): void {

    this.reservationId = localStorage.getItem('reservation_id') || ''; // Recupera el ID de la reserva desde el almacenamiento local
    this.userEmail= localStorage.getItem('user_email') || '';
    this.checkIn= localStorage.getItem('checkin') || '';
    this.checkOut= localStorage.getItem('checkout') || '';
    this.people= localStorage.getItem('people') || '';


    const selectedHotel = this.hotelService.getSelectedHotel();
    if (selectedHotel) {
      this.hotel = selectedHotel;
    } else {
      alert('No se encontró información del hotel seleccionado.');
    }
  }

  updateSpecificHotelData() {

  this.reservationService.createEmptyReservation(this.userEmail, this.checkIn, this.checkOut, this.people, this.hotel?.name || '', this.hotel?.images[0] || '').then((reservationId) => {
    localStorage.setItem('reservation_id', reservationId); // Guarda el ID de la reserva en el almacenamiento local
  });
}




  prevImage(): void {
    if (this.hotel && this.currentImageIndex > 0) { // Añadido chequeo de this.hotel
      this.currentImageIndex--;
    } else if (this.hotel) {
      this.currentImageIndex = this.hotel.images.length - 1;
    }
  }

  nextImage(): void {
    if (this.hotel && this.currentImageIndex < this.hotel.images.length - 1) { // Añadido chequeo de this.hotel
      this.currentImageIndex++;
    } else if (this.hotel) {
      this.currentImageIndex = 0;
    }
  }
}
