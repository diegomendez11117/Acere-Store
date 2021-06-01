import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";
import { DefaultComponent } from "../default/default.component";

@Component({
  selector: "app-dash-header",
  templateUrl: "./dash-header.component.html",
  styleUrls: ["./dash-header.component.scss"],
})
export class DashHeaderComponent implements OnInit {
  constructor(
    private defaultComponent: DefaultComponent,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  toggleSideBar(): void {
    this.defaultComponent.sideBarOpen = !this.defaultComponent.sideBarOpen;
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }

  logout() {
    this.auth.logout().then(() => {
      this.router.navigate(["/home"]);
    });
  }
}
