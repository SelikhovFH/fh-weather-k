import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Subscription from '../../components/Subscription';

import styles from './Weather.module.scss';

const Weather: React.FC = () => {
  return (
    <div>
      <Header />
      {/* <CardSlider /> */}
      <Subscription className={styles.section} />
      <Footer />
    </div>
  );
};

export default Weather;
