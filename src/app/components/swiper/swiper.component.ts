import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './swiper.component.html', 
  styleUrl: './swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class SwiperComponent {

}
