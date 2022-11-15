import React from 'react';
import axios, { Axios } from 'axios';

import { IWeatherForecast, ILocation } from '../types';

import WeatherIcons from '../assets/icons/weather';

class WeatherService {
  private axios: Axios;

  private token: string;

  private icons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    '01d': WeatherIcons.Sun,
    '01n': WeatherIcons.Moon,
    '02d': WeatherIcons.CloudyDay,
    '02n': WeatherIcons.CloudyNight,
    '03d': WeatherIcons.Clouds,
    '03n': WeatherIcons.Clouds,
    '04d': WeatherIcons.BrokenClouds,
    '04n': WeatherIcons.BrokenClouds,
    '09d': WeatherIcons.ShowerRain,
    '09n': WeatherIcons.ShowerRain,
    '10d': WeatherIcons.RainDay,
    '10n': WeatherIcons.RainNight,
    '11d': WeatherIcons.Thunderstorm,
    '11n': WeatherIcons.Thunderstorm,
    '13d': WeatherIcons.Snow,
    '13n': WeatherIcons.Snow,
    '50d': WeatherIcons.Mist,
    '50n': WeatherIcons.Mist,
  };

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

  getWeatherIcon(icon: string): React.FC<React.SVGProps<SVGSVGElement>> {
    return this.icons[icon];
  }
}

export default new WeatherService();
