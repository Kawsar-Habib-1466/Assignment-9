import React from 'react';
import HeroSlider from '../components/HeroSlider';
import TrendingApps from '../components/TrendingApps';

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <TrendingApps />
      {/* Other sections here */}
    </div>
  );
};

export default Home;
