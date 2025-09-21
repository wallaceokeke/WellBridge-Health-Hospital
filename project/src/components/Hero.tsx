import React from 'react';
import { useBooking } from '../context/BookingContext';

const Hero = () => {
  const { openModal } = useBooking();

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-preview');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Compassionate Care at{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                  Brown Memorial's
                </span>{' '}
                WellBridge Health
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Where patient-first philosophy meets medical excellence. Experience healthcare 
                that puts your wellbeing at the center of everything we do, building bridges 
                to better health for our community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openModal}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Book Now
              </button>
              <button
                onClick={scrollToServices}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Explore Services
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">10+</div>
                <div className="text-gray-600">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">50K+</div>
                <div className="text-gray-600">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-gray-600">Emergency Care</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Medical professionals providing compassionate care"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold text-purple-600">98%</div>
              <div className="text-sm text-gray-600">Patient Satisfaction</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold text-purple-600">5★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;