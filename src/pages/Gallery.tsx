import React, { useState, useMemo } from 'react';
import { Building2, Truck, Users, Award, Factory, Shield, Search } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleItems, setVisibleItems] = useState(8);

  const categories = [
    { id: 'all', name: 'All Products', count: 120, icon: '💊', color: 'primary' },
    { id: 'facilities', name: 'Facilities', count: 45, icon: '🏢', color: 'secondary' },
    { id: 'logistics', name: 'Logistics', count: 28, icon: '🚛', color: 'accent' },
    { id: 'team', name: 'Team', count: 18, icon: '👥', color: 'primary' },
    { id: 'certifications', name: 'Certifications', count: 15, icon: '🏆', color: 'secondary' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'facilities',
      url: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'State-of-the-Art Distribution Center',
      description: 'Our 75,000 sq ft climate-controlled facility with advanced automation systems',
      featured: true,
      tags: ['modern', 'automated', 'climate-controlled']
    },
    {
      id: 2,
      category: 'facilities',
      url: 'https://images.pexels.com/photos/3873151/pexels-photo-3873151.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Advanced Quality Control Laboratory',
      description: 'ISO-certified testing facility with cutting-edge analytical equipment',
      featured: false,
      tags: ['quality', 'testing', 'iso-certified']
    },
    {
      id: 3,
      category: 'logistics',
      url: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Delivery Fleet',
      description: 'GPS-tracked refrigerated vehicles ensuring safe medication transport',
      featured: true,
      tags: ['delivery', 'refrigerated', 'gps-tracked']
    },
    {
      id: 4,
      category: 'facilities',
      url: 'https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Temperature-Controlled Storage',
      description: 'Multi-zone cold storage units for sensitive pharmaceutical products',
      featured: false,
      tags: ['cold-storage', 'temperature-controlled', 'pharmaceutical']
    },
    {
      id: 5,
      category: 'team',
      url: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Expert Pharmacist Team',
      description: 'Licensed pharmacists ensuring regulatory compliance and quality assurance',
      featured: false,
      tags: ['pharmacists', 'licensed', 'compliance']
    },
    {
      id: 6,
      category: 'logistics',
      url: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Automated Loading Systems',
      description: 'Robotic systems for efficient and accurate order fulfillment',
      featured: false,
      tags: ['automated', 'robotic', 'efficient']
    },
    {
      id: 7,
      category: 'certifications',
      url: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'FDA Compliance Certification',
      description: 'Full FDA licensing with regular compliance audits and certifications',
      featured: false,
      tags: ['fda', 'compliance', 'certified']
    },
    {
      id: 8,
      category: 'team',
      url: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: '24/7 Customer Support Center',
      description: 'Dedicated support team providing round-the-clock assistance',
      featured: false,
      tags: ['support', '24/7', 'customer-service']
    }
  ];

  const filteredItems = useMemo(() => {
    let filtered = galleryItems;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  const loadMore = () => {
    setVisibleItems(prev => prev + 8);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-3 rounded-xl">
              <Factory className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold gradient-text-pharma mb-3">Company Gallery</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Explore our world-class facilities, meet our expert team, and discover why we're the 
            trusted choice for pharmaceutical wholesale distribution.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border-2 border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                  <span className={`text-xs px-1 py-0.5 rounded-full ${
                    selectedCategory === category.id ? 'bg-white/20' : 'bg-neutral-200 text-neutral-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Section */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Featured Highlights</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {galleryItems.filter(item => item.featured).map((item, index) => (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        ⭐ Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.slice(0, visibleItems).map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <h3 className="font-bold text-neutral-800 mb-1 group-hover:text-primary-600 transition-colors text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 mb-2 line-clamp-2">{item.description}</p>
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 bg-primary-100 text-primary-800 rounded-full text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleItems < filteredItems.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-200"
            >
              Load More Images ({filteredItems.length - visibleItems} remaining)
            </button>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Our Impact in Numbers</h2>
            <p className="text-primary-100">Leading the pharmaceutical distribution industry</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '75,000+', label: 'Sq Ft Facility', icon: '🏢' },
              { number: '1,200+', label: 'Pharmacy Partners', icon: '🤝' },
              { number: '15,000+', label: 'Products Available', icon: '💊' },
              { number: '24/7', label: 'Customer Support', icon: '📞' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold mb-1">{stat.number}</div>
                <div className="text-primary-100 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-neutral-800 mb-3">Want to Visit Our Facility?</h3>
            <p className="text-neutral-600 mb-4 text-sm">
              Schedule a tour of our state-of-the-art distribution center and see our operations firsthand.
            </p>
            <button className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-200">
              Schedule a Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;