import { environment } from 'src/environments/environment';

const API_KEY = import.meta.env.NG_APP_API_KEY;

export const API_URL = {
  HOURLY_FORECAST: (lat: number, lon: number) =>
    `${environment.apiUrl}/forecast/hourly?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
};
