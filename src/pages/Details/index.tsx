import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import PlacesService from '../../services/places.service';
import WeatherService from '../../services/weather.service';
import { IPlaceDetailsResponse, IWeatherResponse } from '../../types';

import Jumbotron from '../../components/Jumbotron';
import Subscription from '../../components/Subscription';

const Details: React.FC = () => {
  const { placeId } = useParams<{ placeId: string }>();
  const { data: place }: { data?: IPlaceDetailsResponse } = useQuery({
    queryKey: ['place', placeId],
    queryFn: () => PlacesService.getPlaceDetails(placeId as string, 1920),
  });
  const { data: weather }: { data?: IWeatherResponse } = useQuery({
    queryKey: 'weather',
    queryFn: () =>
      WeatherService.getCurrentWeather({
        lat: place?.location.lat as number,
        lon: place?.location.lng as number,
      }),
    enabled: !!place?.placeId,
  });

  return (
    <div className="container">
      <Jumbotron
        temp={weather?.main.temp as number}
        weather={weather?.weather[0].main as string}
        name={place?.name as string}
        backgroundUrl={place?.photos[0] as string}
      />
      <Subscription />
    </div>
  );
};

export default Details;
