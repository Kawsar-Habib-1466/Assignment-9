import React from 'react';
import HeroSlider from '../components/HeroSlider';
import TrendingApps from '../components/TrendingApps';
import ProductivityApps from '../components/ProductivityApps';
import EditorsChoice from '../components/EditorsChoice';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <TrendingApps />
      <ProductivityApps />
      <EditorsChoice />
      {/* Other sections here */}
      <Footer />
    </div>
  );
};

export default Home;
