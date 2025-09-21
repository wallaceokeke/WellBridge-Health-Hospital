import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Nairobi',
      rating: 5,
      comment: 'The care I received at WellBridge Health was exceptional. Dr. Sue was incredibly thorough and took the time to explain everything. The staff made me feel like family.',
      service: 'Pediatrics',
      image: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Michael Ochieng',
      location: 'Nairobi',
      rating: 5,
      comment: 'Outstanding emergency care when I needed it most. The response was quick and professional. Dr. Mark and his team saved my life. Forever grateful.',
      service: 'Emergency Care',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Grace Wanjiku',
      location: 'Nairobi',
      rating: 5,
      comment: 'The mental health support I received here helped me through a difficult time. The counselors are compassionate and truly care about their patients.',
      service: 'Mental Health',
      image: 'https://images.pexels.com/photos/3767411/pexels-photo-3767411.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'David Kipkorir',
      location: 'Nairobi',
      rating: 5,
      comment: 'Excellent diagnostic services and very professional staff. The results were accurate and delivered quickly. Highly recommend WellBridge Health.',
      service: 'Diagnostics',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our patients have to say 
            about their experience at WellBridge Health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm text-purple-600 font-medium">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-purple-50 px-8 py-4 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-900 font-semibold">4.9/5 Average Rating</span>
            <span className="text-gray-600">from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;