import React from 'react';
import HeroSlider from '../components/HeroSlider';
import TrendingApps from '../components/TrendingApps';
import ProductivityApps from '../components/ProductivityApps';
import EditorsChoice from '../components/EditorsChoice';
import Footer from '../components/Footer';
import EducationApps from '../components/EducationApps';
import { toast } from 'react-toastify';
const Home = () => {
  
  return (
    <div>
      <HeroSlider />
      <TrendingApps />
      <EducationApps />
      
      <ProductivityApps />
     
      <EditorsChoice />
      
      
      
    </div>
  );
};

export default Home;
