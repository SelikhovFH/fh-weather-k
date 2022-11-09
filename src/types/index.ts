export interface IPlaceDetailsResponse {
  placeId: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  photos: string[];
}

export interface IWeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    icon: string;
    description: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number | string;
  };
  clouds: {
    all: number;
  };
  rain: {
    '1h': number;
    '3h': number;
  };
  snow: {
    '1h': number;
    '3h': number;
  };
  dt: number;
  sys: {
    type: string;
    id: number;
    message: string;
    country: number;
    sunrise: number;
    sunset: number;
  };
  id?: number | string;
  name?: string;
  cod: string;
}
