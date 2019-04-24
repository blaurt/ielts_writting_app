import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { supportedProviders } from "src/app/shared/interfacesAndTypes/types";
import { FirebaseService } from "src/app/services/firebase/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  async authenticate(provider: supportedProviders) {
    try {
      const authProvider = new firebase.auth[`${provider}AuthProvider`]();
      const {
        user,
        additionalUserInfo
      } = await firebase.auth().signInWithPopup(authProvider);
      await FirebaseService.registerUser(user.uid, additionalUserInfo);
      this.router.navigate(["/writting"]);
    } catch (error) {
      throw error;
    }
  }
}
