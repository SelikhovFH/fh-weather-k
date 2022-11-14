import axios, { Axios } from 'axios';
import { IWeatherForecast, ILocation } from '../types';

class WeatherService {
  private axios: Axios;

  private token: string;

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_OPENWEATHER_API_URL,
    });
    this.token = process.env.REACT_APP_OPENWEATHER_API_KEY as string;
  }

  async getWeatherForecast(location: ILocation): Promise<IWeatherForecast> {
    const { data } = await this.axios.get<IWeatherForecast>('/onecall', {
      params: {
        lat: location.lat,
        lon: location.lon,
        units: 'metric',
        appid: this.token,
      },
    });

    return data;
  }
}

export default new WeatherService();
