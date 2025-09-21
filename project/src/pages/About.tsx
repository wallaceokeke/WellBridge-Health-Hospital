import React from 'react';
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  LightBulbIcon,
  UserGroupIcon,
  CheckCircleIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const values = [
    {
      name: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and genuine concern for their wellbeing.',
      icon: HeartIcon
    },
    {
      name: 'Medical Excellence',
      description: 'We maintain the highest standards of medical practice and continuous professional development.',
      icon: ShieldCheckIcon
    },
    {
      name: 'Innovation',
      description: 'We embrace new technologies and treatment methods to provide the best possible care.',
      icon: LightBulbIcon
    },
    {
      name: 'Community Focus',
      description: 'We are committed to serving our community and making healthcare accessible to all.',
      icon: UserGroupIcon
    }
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Foundation',
      description: 'WellBridge Health was founded as a tribute to Brown Memorial, with a mission to provide compassionate healthcare.'
    },
    {
      year: '2012',
      title: 'Expansion',
      description: 'Added specialized services including pediatrics and mental health support.'
    },
    {
      year: '2015',
      title: 'Technology Integration',
      description: 'Implemented electronic health records and advanced diagnostic equipment.'
    },
    {
      year: '2018',
      title: 'Community Outreach',
      description: 'Launched community health programs and free health screening initiatives.'
    },
    {
      year: '2020',
      title: 'Pandemic Response',
      description: 'Adapted services for COVID-19 response and introduced telemedicine options.'
    },
    {
      year: '2025',
      title: 'Digital Innovation',
      description: 'Launched comprehensive online booking system and patient portal.'
    }
  ];

  const leadership = [
    {
      name: 'Dr. Michael Johnson',
      position: 'Chief Medical Officer',
      specialty: 'General Medicine',
      education: 'MD, University of Nairobi',
      experience: '15 years',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dr. Johnson leads our medical team with extensive experience in primary care and hospital administration. He is passionate about patient-centered care and medical excellence.'
    },
    {
      name: 'Dr. Susan Williams',
      position: 'Head of Pediatrics',
      specialty: 'Pediatric Medicine',
      education: 'MD Pediatrics, Kenyatta University',
      experience: '12 years',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dr. Williams specializes in child healthcare and has been instrumental in developing our family-friendly pediatric services. She is known for her gentle approach with young patients.'
    },
    {
      name: 'Dr. Mark Davis',
      position: 'Emergency Department Director',
      specialty: 'Emergency Medicine',
      education: 'MD Emergency Medicine, University of Nairobi',
      experience: '10 years',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dr. Davis brings critical care expertise to our emergency department. His quick thinking and calm demeanor have saved countless lives in emergency situations.'
    },
    {
      name: 'Dr. Emily Brown',
      position: 'Mental Health Coordinator',
      specialty: 'Clinical Psychology',
      education: 'PhD Clinical Psychology, Strathmore University',
      experience: '8 years',
      image: 'https://images.pexels.com/photos/5214707/pexels-photo-5214707.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dr. Brown leads our mental health services with compassion and expertise. She has developed innovative therapy programs that have helped hundreds of patients.'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Patients Served' },
    { number: '15+', label: 'Healthcare Professionals' },
    { number: '10+', label: 'Years of Service' },
    { number: '24/7', label: 'Emergency Care' },
    { number: '98%', label: 'Patient Satisfaction' },
    { number: '5★', label: 'Average Rating' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About WellBridge Health
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded as a tribute to Brown Memorial's legacy of compassionate care, 
            WellBridge Health continues the tradition of putting patients first, 
            building bridges between communities and quality healthcare.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To provide accessible, comprehensive, and compassionate healthcare services 
              that build bridges between our community and optimal health outcomes. We are 
              committed to delivering patient-centered care that honors the dignity and 
              unique needs of every individual we serve.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To be the leading healthcare provider in our region, recognized for medical 
              excellence, innovative care delivery, and unwavering commitment to community 
              health. We envision a future where quality healthcare is accessible to all, 
              fostering healthier communities and better lives.
            </p>
          </div>
        </div>

        {/* Founder's Story */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Founder's Story: A Tribute to Brown Memorial
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                WellBridge Health was born from a deep respect for the legacy of Brown Memorial, 
                a healthcare pioneer who dedicated their life to serving others with compassion 
                and excellence. Inspired by their unwavering commitment to patient care, our 
                founders established WellBridge Health to continue this noble tradition.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Brown Memorial's philosophy of "healing with heart" became the cornerstone of 
                our institution. Every decision we make, every service we provide, and every 
                interaction we have is guided by this principle of putting patients first and 
                treating them like family.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, WellBridge Health stands as a living testament to Brown Memorial's vision 
                of healthcare that bridges gaps, builds communities, and transforms lives through 
                compassionate medical care.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Healthcare legacy"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-sm text-gray-600 mb-2">In memory of</p>
                <p className="font-bold text-purple-600">Brown Memorial</p>
                <p className="text-xs text-gray-500">Healthcare Pioneer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Journey Through the Years
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={event.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-700">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <div key={value.name} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader) => (
              <div key={leader.name} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-2xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-purple-600 font-medium mb-2">
                      {leader.position}
                    </p>
                    <div className="text-sm text-gray-600 space-y-1 mb-4">
                      <p><strong>Specialty:</strong> {leader.specialty}</p>
                      <p><strong>Education:</strong> {leader.education}</p>
                      <p><strong>Experience:</strong> {leader.experience}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Commitment */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Community Commitment
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Health Outreach Programs
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Free monthly health screenings for underserved communities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">School health education programs reaching 5,000+ students annually</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Mobile clinic services for remote areas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Mental health awareness campaigns and support groups</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-purple-600">
                <MapPinIcon className="h-5 w-5" />
                <span className="font-medium">Serving communities across Nairobi and surrounding areas</span>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Community outreach"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;