import React from 'react';

import Card from '../../components/Card';
import Subscription from '../../components/Subscription';

const Home: React.FC = () => {
  return (
    <div className="container">
      <div>
        <Card />
      </div>
      {/* <CardSlider /> */}
      <Subscription />
    </div>
  );
};

export default Home;
