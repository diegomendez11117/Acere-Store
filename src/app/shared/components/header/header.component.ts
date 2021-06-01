import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "src/app/core/services/auth.service";
import { CartService } from "src/app/core/services/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  total$: Observable<number>;
  isUser: boolean = false;

  constructor(
    private cartService: CartService,
    private auth: AuthService,
    private router: Router
  ) {
    this.total$ = this.cartService.cart$.pipe(
      map((products) => products.length)
    );
  }

  ngOnInit() {
    this.auth.user.subscribe((user) => {
      if (user) {
        this.isUser = true;
      } else {
        this.isUser = false;
      }
    });
  }

  logout() {
    this.auth.logout().then(() => {
      this.router.navigate(["/home"]);
    });
  }

  logged() {
    return this.isUser;
  }

  
}
