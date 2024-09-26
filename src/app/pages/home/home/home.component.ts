import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WindComponent } from '@lib/components/icons/wind/wind.component';
import { HumidityComponent } from '../../../lib/components/icons/humidity/humidity.component';
import { TemperatureCardComponent } from '@lib/components/temperature-card/temperature-card.component';

const components = [WindComponent, HumidityComponent, TemperatureCardComponent];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [...components],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  detail = {
    temperature: 20,
    temperatureFeelsLike: 19,
    windSpeed: 6.1,
    humidity: 90,
    mainWeather: 'Cloudy',
  };

  weeklyForecasts = [
    {
      header: 'Today',
      temperature: 20,
      description: 'Mist',
      isActive: true,
    },
    {
      header: 'Tue',
      temperature: 32,
      description: 'Sunny',
      isActive: false,
    },
    {
      header: 'Wed',
      temperature: 25,
      description: 'Rain',
      isActive: false,
    },
    {
      header: 'Thu',
      temperature: 22,
      description: 'Snow',
      isActive: false,
    },
    {
      header: 'Fri',
      temperature: 28,
      description: 'Cloudy',
      isActive: false,
    },
    {
      header: 'Sat',
      temperature: 24,
      description: 'Sunny',
      isActive: false,
    },
  ];

  hourlyForecasts = [
    {
      header: '1 PM',
      temperature: 20,
      description: 'Mist',
      isActive: true,
    },
    {
      header: '2 PM',
      temperature: 32,
      description: 'Sunny',
      isActive: true,
    },
    {
      header: '3 PM',
      temperature: 25,
      description: 'Rain',
      isActive: true,
    },
    {
      header: '4 PM',
      temperature: 22,
      description: 'Snow',
      isActive: true,
    },
    {
      header: '5 PM',
      temperature: 28,
      description: 'Cloudy',
      isActive: true,
    },
    {
      header: '6 PM',
      temperature: 24,
      description: 'Sunny',
      isActive: true,
    },
  ];

  get detailTemperature(): number {
    return this.detail.temperature;
  }

  get detailTemperatureFeelsLike(): number {
    return this.detail.temperatureFeelsLike;
  }

  get detailWindSpeed(): number {
    return this.detail.windSpeed;
  }

  get detailHumidity(): number {
    return this.detail.humidity;
  }

  get detailMainWeather(): string {
    return this.detail.mainWeather;
  }
}
