import React, { useState } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone Numbers',
      details: ['+254 700 123 456', '+254 720 987 654'],
      action: 'tel:+254700123456'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Address',
      details: ['info@wellbridgehealth.co.ke', 'emergency@wellbridgehealth.co.ke'],
      action: 'mailto:info@wellbridgehealth.co.ke'
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      details: ['123 Healthcare Avenue', 'Nairobi, Kenya'],
      action: 'https://maps.google.com/maps?q=Nairobi+Kenya'
    },
    {
      icon: ClockIcon,
      title: 'Operating Hours',
      details: ['24/7 Emergency Care', 'Mon-Fri: 8AM-6PM Regular Services'],
      action: null
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/wellbridgehealth',
      color: 'bg-blue-600 hover:bg-blue-700',
      icon: '📘'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/wellbridgehealth',
      color: 'bg-pink-600 hover:bg-pink-700',
      icon: '📷'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/wellbridge-health',
      color: 'bg-blue-700 hover:bg-blue-800',
      icon: '💼'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/wellbridgehealth',
      color: 'bg-sky-500 hover:bg-sky-600',
      icon: '🐦'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact WellBridge Health
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're here to help you with your healthcare needs. Get in touch with us 
            through any of the channels below or visit us at our facility.
          </p>
        </div>

        {/* Emergency Call-to-Action */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold text-red-800 mb-4">
            Medical Emergency?
          </h2>
          <p className="text-red-700 mb-6">
            For urgent medical situations, call our emergency line immediately
          </p>
          <a
            href="tel:+254700123456"
            className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
          >
            <PhoneIcon className="h-6 w-6 mr-3" />
            Emergency: +254 700 123 456
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-3 rounded-xl">
                        <IconComponent className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-gray-600">
                              {info.action ? (
                                <a
                                  href={info.action}
                                  className="hover:text-purple-600 transition-colors"
                                  target={info.action.startsWith('http') ? '_blank' : '_self'}
                                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                                >
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp Chat */}
            <div className="bg-green-50 p-6 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp Chat</h3>
                  <p className="text-gray-600 text-sm">
                    Chat with our support team instantly
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/254700123456?text=Hello%2C%20I%20need%20help%20with..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
              >
                Start WhatsApp Chat
              </a>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${social.color} text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110`}
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Appointment Inquiry</option>
                    <option value="services">Services Information</option>
                    <option value="billing">Billing Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Please describe how we can help you..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Visit Our Facility
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Find Us Here
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">WellBridge Health</p>
                    <p className="text-gray-600">123 Healthcare Avenue</p>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ClockIcon className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Visiting Hours</p>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Emergency Only</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="https://maps.google.com/maps?q=Nairobi+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
                >
                  Get Directions
                </a>
              </div>
            </div>
            <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPinIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Interactive Map</p>
                <p className="text-sm text-gray-400">
                  Click "Get Directions" for navigation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;