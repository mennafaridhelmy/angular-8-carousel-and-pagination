import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { PaginationComponent } from "./components/pagination/pagination.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, PaginationComponent],
  imports: [BrowserModule],
})
export class AppModule {}
