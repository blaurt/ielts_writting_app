import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignupPageComponent } from "./components/signup-page/signup-page.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";

@NgModule({
  declarations: [
    LoginPageComponent,
    SignupPageComponent,
    LoginPageComponent,
    SignupPageComponent
  ],
  imports: [CommonModule]
})
export class AuthModule {}
