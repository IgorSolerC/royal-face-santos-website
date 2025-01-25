import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SwiperComponent } from './components/swiper/swiper.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SwiperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'royal-face-santos';
}
