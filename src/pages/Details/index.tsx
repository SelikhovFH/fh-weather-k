import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPlacePhoto } from '../../services/places.service';

import Subscription from '../../components/Subscription';

const Details: React.FC = () => {
  const { placeId } = useParams<{ placeId: string }>();
  const { data }: { data: { photoUrl: string } | undefined } = useQuery(
    ['placePhoto', placeId],
    () => getPlacePhoto(placeId as string, window.screen.width)
  );

  return (
    <div className="container">
      <img src={data?.photoUrl} alt="" />
      <Subscription />
    </div>
  );
};

export default Details;
