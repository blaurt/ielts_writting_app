import { RouterModule, Routes } from "@angular/router";
import { AuthPageLayoutComponent, MainLayoutComponent } from "./layouts";
import { LoginPageComponent } from "./modules/auth/components/login-page/login-page.component";
import { SignupPageComponent } from "./modules/auth/components/signup-page/signup-page.component";
import { NgModule } from "@angular/core";
import { WritingComponent } from './modules/writting/components/writing/writing.component';

const routes: Routes = [
  {
    path: "",
    component: AuthPageLayoutComponent,
    children: [
      { path: "", redirectTo: "/login", pathMatch: "full" },
      { path: "login", component: LoginPageComponent },
      {
        path: "signup",
        component: SignupPageComponent
      }
    ]
  },
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      { path: "", redirectTo: "/writting", pathMatch: "full" },
      {
        path: "writting",
        component: WritingComponent
      }
    ]
  }
  // {
  //   path: ""
  //   component: SideLayoutComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: "overview",
  //       component: OverviewPageComponent
  //     },
  //     {
  //       path: "categories",
  //       component: BasicCategoryComponent,
  //       children: [
  //         {
  //           path: "",
  //           component: CategoriesPageComponent,
  //           pathMatch: "full"
  //         },
  //         {
  //           path: "new",
  //           component: CategoriesFormComponent
  //         },
  //         {
  //           path: ":id",
  //           component: CategoriesFormComponent
  //         }
  //       ]
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
