import React from 'react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import AboutPreview from '../components/AboutPreview';
import Testimonials from '../components/Testimonials';
import BlogPreview from '../components/BlogPreview';

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <Testimonials />
      <BlogPreview />
    </div>
  );
};

export default Home;