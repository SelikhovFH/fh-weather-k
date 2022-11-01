import React from 'react';

import Subscription from '../../components/Subscription';

import styles from './Home.module.scss';
import Card from '../../components/Card';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <Card />
      </div>
      {/* <CardSlider /> */}
      <Subscription />
    </div>
  );
};

export default Home;
