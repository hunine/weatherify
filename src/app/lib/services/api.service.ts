import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from 'src/app/shared/constants/api.constant';

@Injectable()
export class ApiService {
  private httpClient = inject(HttpClient);

  async getHourlyForecast(lat: number, lon: number) {
    try {
      const response = await this.httpClient.get(
        API_URL.HOURLY_FORECAST(lat, lon)
      );

      console.log('response: ', response);
    } catch (error) {
      console.log('error: ', error);
    }
  }
}
