import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router:Router, private firebase: AngularFirestore) { }

    //login
    login(email: string, password: string) {
      this.fireAuth.signInWithEmailAndPassword(email, password).then(() => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['']);
      }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
      });
    }
  
    //register
     register(email: string, password: string) {
      this.fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
        alert('User created successfully');
        this.router.navigate(['/login']);
      }, err => {
        alert(err.message);
        this.router.navigate(['/register']);
      });
    } 
  
  //logout
  logout(){
    this.fireAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    });
  }
  
}