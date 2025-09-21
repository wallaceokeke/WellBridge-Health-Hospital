import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon, 
  HeartIcon, 
  ShieldCheckIcon, 
  BeakerIcon,
  CameraIcon,
  PlusCircleIcon
} from '@heroicons/react/24/outline';

const ServicesPreview = () => {
  const services = [
    {
      id: 'general-consultation',
      name: 'General Consultation',
      description: 'Comprehensive health assessments and primary care services',
      icon: UserGroupIcon,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'emergency-care',
      name: 'Emergency Care',
      description: '24/7 emergency medical services and urgent care',
      icon: PlusCircleIcon,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics',
      description: 'Specialized healthcare for children and adolescents',
      icon: HeartIcon,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'mental-health',
      name: 'Mental Health',
      description: 'Professional counseling and mental wellness support',
      icon: ShieldCheckIcon,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'diagnostics',
      name: 'Diagnostics',
      description: 'Advanced diagnostic testing and laboratory services',
      icon: BeakerIcon,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'medical-imaging',
      name: 'Medical Imaging',
      description: 'X-rays, ultrasounds, and advanced imaging services',
      icon: CameraIcon,
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="services-preview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions tailored to meet your family's needs, 
            delivered with compassion and medical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-purple-600 font-medium">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;