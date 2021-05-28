import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";

import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { AuthService } from "./core/services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AdminGuard implements CanActivate {  
  isUser: boolean = false;

  constructor(
    private authService: AuthService, 
    private router: Router,  
    private auth: AuthService,  
    ) {    
  } 

  ngOnInit() {
    this.auth.user.subscribe((user) => {
      if (user) {
        this.isUser = true;
      } else {
        this.isUser = false;
      }
    });
    console.log(this.isUser)
  }

  

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService
      .hasUser()
      .pipe(
        map((user) =>
          user === null ? this.router.parseUrl("auth/login") : true
        )
      );
  }
 

  hasUserLogged():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      return this.authService.hasUser().pipe(
        map(user => user === null ? false : true),
        tap(hasUser => {
          if (!hasUser) {
            this.router.navigate(['/auth/login']);
          }
        }),
      );
    }

    logged() {
      return this.isUser;
    }

   
    
}
