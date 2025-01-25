import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './swiper.component.html', 
  styleUrls: ['./swiper.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class SwiperComponent {
  @Input() images: string[] = [];
}