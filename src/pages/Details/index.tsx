import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import PlacesService from '../../services/places.service';
import WeatherService from '../../services/weather.service';
import { IWeatherForecast, IPlaceDetails, IHourlyForecast } from '../../types';

import Jumbotron from '../../components/Jumbotron';
import Subscription from '../../components/Subscription';
import HourlyForecast from '../../components/HourlyForecast';

const Details: React.FC = () => {
  const { placeId } = useParams<{ placeId: string }>();
  const { data: place, isSuccess: isPlaceDataLoaded } = useQuery<IPlaceDetails>(
    {
      queryKey: ['place', placeId],
      queryFn: () => PlacesService.getPlaceDetails(placeId as string, 1920),
    }
  );
  const { data: forecast, refetch } = useQuery<IWeatherForecast>({
    queryKey: 'weather',
    queryFn: () =>
      WeatherService.getWeatherForecast({
        lat: place?.location.lat as number,
        lon: place?.location.lng as number,
      }),
    enabled: !!place?.placeId,
  });

  useEffect(() => {
    if (place?.placeId) {
      refetch();
    }
  }, [place, placeId, refetch]);

  return (
    <div className="container">
      <Jumbotron
        className="section"
        name={place?.name as string}
        temp={forecast?.current.temp as number}
        timezone={forecast?.timezone_offset as number}
        weather={forecast?.current.weather[0].main as string}
        backgroundUrl={place?.photos[0] as string}
      />
      {isPlaceDataLoaded && (
        <HourlyForecast
          className="section"
          timezone={forecast?.timezone as string}
          forecast={forecast?.hourly as IHourlyForecast[]}
        />
      )}
      <Subscription />
    </div>
  );
};

export default Details;
