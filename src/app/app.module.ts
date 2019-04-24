import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { AuthPageLayoutComponent } from "./layouts/auth-page-layout/auth-page-layout.component";
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./modules/auth/auth.module";
import { WritingComponent } from "./modules/writting/components/writing/writing.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AuthPageLayoutComponent,
    MainLayoutComponent,
    AuthPageLayoutComponent,
    WritingComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
