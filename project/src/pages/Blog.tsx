import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CalendarIcon, 
  ClockIcon, 
  UserIcon, 
  TagIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 'mental-health-awareness',
      title: '5 Ways to Support Your Mental Health Daily',
      excerpt: 'Simple, practical strategies to maintain good mental health and build resilience in your everyday life. Learn how small daily habits can make a significant impact on your mental wellbeing.',
      content: 'Mental health is just as important as physical health...',
      category: 'Mental Health',
      author: 'Dr. Emily Brown',
      readTime: '5 min read',
      date: '2025-01-15',
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 'heart-healthy-diet',
      title: 'Heart-Healthy Foods to Include in Your Diet',
      excerpt: 'Discover the best foods for cardiovascular health and learn how to create a heart-healthy meal plan that tastes great and supports your heart.',
      content: 'A heart-healthy diet can reduce your risk of heart disease...',
      category: 'Nutrition',
      author: 'Dr. Susan Williams',
      readTime: '7 min read',
      date: '2025-01-12',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 'child-vaccination',
      title: 'Complete Guide to Child Vaccination Schedule',
      excerpt: 'Everything parents need to know about keeping their children protected with the right vaccines at the right time. A comprehensive vaccination guide.',
      content: 'Vaccines are one of the most important tools...',
      category: 'Pediatrics',
      author: 'Dr. Susan Williams',
      readTime: '6 min read',
      date: '2025-01-10',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 'stress-management',
      title: 'Effective Stress Management Techniques',
      excerpt: 'Learn proven methods to manage stress in your daily life. From breathing exercises to lifestyle changes, discover what works best for you.',
      content: 'Stress is a natural part of life, but chronic stress...',
      category: 'Wellness',
      author: 'Dr. Emily Brown',
      readTime: '8 min read',
      date: '2025-01-08',
      image: 'https://images.pexels.com/photos/3760264/pexels-photo-3760264.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 'diabetes-prevention',
      title: 'Understanding and Preventing Type 2 Diabetes',
      excerpt: 'Learn about risk factors, warning signs, and lifestyle changes that can help prevent type 2 diabetes. Early prevention is key to long-term health.',
      content: 'Type 2 diabetes is a chronic condition that affects...',
      category: 'Preventive Care',
      author: 'Dr. Michael Johnson',
      readTime: '10 min read',
      date: '2025-01-05',
      image: 'https://images.pexels.com/photos/3737592/pexels-photo-3737592.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 'exercise-benefits',
      title: 'The Complete Benefits of Regular Exercise',
      excerpt: 'Discover how regular physical activity can improve your physical and mental health. Learn about different types of exercise and how to get started.',
      content: 'Regular exercise is one of the best things you can do...',
      category: 'Fitness',
      author: 'Dr. Mark Davis',
      readTime: '6 min read',
      date: '2025-01-03',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const categories = [
    'all',
    'Mental Health',
    'Nutrition',
    'Pediatrics',
    'Wellness',
    'Preventive Care',
    'Fitness'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Health Resources & Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest health tips, medical insights, and wellness advice 
            from our healthcare professionals at WellBridge Health.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 border border-gray-300'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        {featuredPosts.length > 0 && selectedCategory === 'all' && !searchTerm && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <UserIcon className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
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
          </div>
        )}

        {/* Regular Articles */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {searchTerm || selectedCategory !== 'all' ? 'Search Results' : 'Latest Articles'}
            <span className="text-lg font-normal text-gray-600 ml-2">
              ({filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'})
            </span>
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <MagnifyingGlassIcon className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or category filter
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <UserIcon className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
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
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Health Tips
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Subscribe to our newsletter for the latest health insights and wellness tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-300"
            />
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;