import { Component } from '@angular/core';
import { WindComponent } from '@lib/components/icons/wind/wind.component';
import { HumidityComponent } from "../../../lib/components/icons/humidity/humidity.component";

const components = [WindComponent];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [...components, HumidityComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  greeting: string = 'Good Morning';
  clock = '12:27 PM';
  date: string = '21.04.2021';
  city: string = 'Multan';
  mainWeather: string = 'Cloudy';
  temperature: number = 20;
  temperatureFeelsLike: number = 20;
  windSpeed: number = 6.1;
  humidity: number = 90;
}
