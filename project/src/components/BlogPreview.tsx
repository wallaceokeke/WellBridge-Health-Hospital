import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 'mental-health-awareness',
      title: '5 Ways to Support Your Mental Health Daily',
      excerpt: 'Simple, practical strategies to maintain good mental health and build resilience in your everyday life.',
      category: 'Mental Health',
      readTime: '5 min read',
      date: 'January 15, 2025',
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'heart-healthy-diet',
      title: 'Heart-Healthy Foods to Include in Your Diet',
      excerpt: 'Discover the best foods for cardiovascular health and learn how to create a heart-healthy meal plan.',
      category: 'Nutrition',
      readTime: '7 min read',
      date: 'January 12, 2025',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'child-vaccination',
      title: 'Complete Guide to Child Vaccination Schedule',
      excerpt: 'Everything parents need to know about keeping their children protected with the right vaccines at the right time.',
      category: 'Pediatrics',
      readTime: '6 min read',
      date: 'January 10, 2025',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Health Resources & Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest health tips, medical insights, and wellness advice 
            from our healthcare professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-purple-600 mb-3">
                  <span className="bg-purple-100 px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
          >
            Read All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;