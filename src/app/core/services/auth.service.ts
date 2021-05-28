import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user : Observable<firebase.default.User>

  constructor(
    private af: AngularFireAuth
  ) { 
    this.user = af.user;
  }

  createUser(email: string, password: string) {
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string){
    return this.af.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.af.signOut();
  }

  hasUser(){
    return this.af.authState;    
  }

  

  

    
}
