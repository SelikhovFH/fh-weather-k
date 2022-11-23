import React from 'react';

import Card from '../../components/Card';
import Subscription from '../../components/Subscription';

const Home: React.FC = () => {
  return (
    <div className="container">
      <section className="section slider">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      {/* <CardSlider /> */}
      <Subscription className="section" />
    </div>
  );
};

export default Home;
