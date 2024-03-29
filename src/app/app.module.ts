import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, PaginationComponent, CarouselComponent],
  imports: [
    BrowserModule,
  ],
})
export class AppModule {}
