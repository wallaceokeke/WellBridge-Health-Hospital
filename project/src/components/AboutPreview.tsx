import React from 'react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission: Building Bridges to Better Health
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded as a tribute to Brown Memorial's legacy of compassionate care, 
              WellBridge Health continues the tradition of putting patients first. 
              We believe healthcare should be accessible, comprehensive, and delivered 
              with genuine compassion.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our dedicated team of healthcare professionals works tirelessly to 
              build bridges between communities and quality healthcare, ensuring 
              every patient receives the care they deserve.
            </p>
            <Link
              to="/about"
              className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Healthcare team at WellBridge Health"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Healthcare Professionals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;