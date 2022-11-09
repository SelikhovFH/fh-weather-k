import axios, { Axios } from 'axios';
import { IWeatherResponse } from '../types';

class WeatherService {
  private axios: Axios;

  private token: string;

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_OPENWEATHER_API_URL,
    });
    this.token = process.env.REACT_APP_OPENWEATHER_API_KEY as string;
  }

  async getCurrentWeather(location: {
    lat: number;
    lon: number;
  }): Promise<IWeatherResponse> {
    const { data } = await this.axios.get('/weather', {
      params: {
        ...location,
        appid: this.token,
        units: 'metric',
      },
    });

    return data;
  }
}

export default new WeatherService();
