import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon, 
  HeartIcon, 
  ShieldCheckIcon, 
  BeakerIcon,
  CameraIcon,
  PlusCircleIcon,
  ScissorsIcon,
  SparklesIcon,
  BoltIcon,
  CakeIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      id: 'general-consultation',
      name: 'General Consultation',
      description: 'Comprehensive health assessments, routine check-ups, and primary care services for all ages.',
      icon: UserGroupIcon,
      color: 'from-blue-500 to-blue-600',
      features: ['Health Screening', 'Preventive Care', 'Treatment Plans', 'Health Education']
    },
    {
      id: 'emergency-care',
      name: 'Emergency Care',
      description: '24/7 emergency medical services for urgent health conditions and medical emergencies.',
      icon: PlusCircleIcon,
      color: 'from-red-500 to-red-600',
      features: ['Trauma Care', 'Cardiac Emergency', 'Respiratory Support', 'Critical Care']
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics',
      description: 'Specialized healthcare services for infants, children, and adolescents up to 18 years.',
      icon: HeartIcon,
      color: 'from-pink-500 to-pink-600',
      features: ['Child Development', 'Immunizations', 'Growth Monitoring', 'Pediatric Surgery']
    },
    {
      id: 'mental-health',
      name: 'Mental Health',
      description: 'Professional counseling, therapy, and mental wellness support for all mental health conditions.',
      icon: ShieldCheckIcon,
      color: 'from-green-500 to-green-600',
      features: ['Individual Therapy', 'Group Sessions', 'Crisis Intervention', 'Family Counseling']
    },
    {
      id: 'diagnostics',
      name: 'Diagnostics',
      description: 'Advanced diagnostic testing and comprehensive laboratory services for accurate diagnosis.',
      icon: BeakerIcon,
      color: 'from-purple-500 to-purple-600',
      features: ['Blood Tests', 'Urine Analysis', 'Microbiology', 'Pathology']
    },
    {
      id: 'medical-imaging',
      name: 'Medical Imaging',
      description: 'State-of-the-art imaging services including X-rays, ultrasounds, and advanced scans.',
      icon: CameraIcon,
      color: 'from-indigo-500 to-indigo-600',
      features: ['X-Ray', 'Ultrasound', 'CT Scan', 'MRI']
    },
    {
      id: 'surgery-support',
      name: 'Surgery Support',
      description: 'Comprehensive surgical services from pre-operative care to post-surgical recovery.',
      icon: ScissorsIcon,
      color: 'from-orange-500 to-orange-600',
      features: ['Minor Surgery', 'Day Surgery', 'Pre-op Care', 'Post-op Recovery']
    },
    {
      id: 'wellness-programs',
      name: 'Wellness Programs',
      description: 'Holistic wellness programs focused on preventive care and lifestyle management.',
      icon: SparklesIcon,
      color: 'from-teal-500 to-teal-600',
      features: ['Health Screenings', 'Lifestyle Coaching', 'Weight Management', 'Stress Management']
    },
    {
      id: 'physiotherapy',
      name: 'Physiotherapy',
      description: 'Professional rehabilitation services to restore function and improve quality of life.',
      icon: BoltIcon,
      color: 'from-yellow-500 to-yellow-600',
      features: ['Injury Recovery', 'Pain Management', 'Mobility Training', 'Sports Therapy']
    },
    {
      id: 'nutrition-counseling',
      name: 'Nutrition Counseling',
      description: 'Professional dietary guidance and nutritional therapy for optimal health.',
      icon: CakeIcon,
      color: 'from-lime-500 to-lime-600',
      features: ['Diet Planning', 'Weight Management', 'Medical Nutrition', 'Lifestyle Changes']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Medical Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At WellBridge Health, we provide comprehensive healthcare services designed to meet 
            the diverse needs of our community. Our experienced medical professionals are committed 
            to delivering exceptional care with compassion and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action */}
                <div className="flex items-center text-purple-600 font-medium">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing a Service?
            </h2>
            <p className="text-gray-600 mb-6">
              Our healthcare professionals are here to help you find the right care for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+254700123456"
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
              >
                Call Us Now
              </a>
              <Link
                to="/contact"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;