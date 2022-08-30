import { EventEmitter, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@angular/fire/auth";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private auth: Auth) {}

  getAuth = getAuth();
  session = new EventEmitter<Boolean>();

  register({email, password}: any) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  login({email, password}: any) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  logout() {
    return signOut(this.auth);
  }

  checkAuth() {
    onAuthStateChanged(this.getAuth, (user) => {
      if (user) {
        console.log("Sesión abierta");
        this.session.emit(true);
      } else {
        console.log("Sesión cerrada");
        this.session.emit(false);
      }
    });
  }
}
