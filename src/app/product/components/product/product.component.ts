import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { Router } from "@angular/router";
import { AdminGuard } from "src/app/core/services/admin.guard";
import { AuthService } from "src/app/core/services/auth.service";
import { CartService } from "src/app/core/services/cart.service";

import { Product } from "../../../core/models/product.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  isUser:boolean = false;
  today = new Date();

  constructor(
    private cartService: CartService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.user.subscribe((user) => {
      if (user) {
        this.isUser = true;
      } else {
        this.isUser = false;
      }
    });
  }

  logged() {
    return this.isUser;
  }

  ngOnDestroy() {}

  addCart() {
    if (this.isUser) {
      this.cartService.addCart(this.product);
    } else {
      this.router.navigate(['/auth/login']);
    }
  }
}
