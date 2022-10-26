import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Subscription from '../../components/Subscription';

const Weather: React.FC = () => {
  return (
    <div>
      <Header />
      <div>Weather Page</div>
      <Subscription />
      <Footer />
    </div>
  );
};

export default Weather;
