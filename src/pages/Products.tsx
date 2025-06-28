import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, Star, CheckCircle, ShoppingCart, Eye, Heart } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [cart, setCart] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Products', count: 120, icon: '💊', color: 'primary' },
    { id: 'tablets', name: 'Tablets', count: 45, icon: '💊', color: 'secondary' },
    { id: 'injections', name: 'Injections', count: 28, icon: '💉', color: 'accent' },
    { id: 'syrups', name: 'Syrups', count: 18, icon: '🧪', color: 'primary' },
    { id: 'medical-equipment', name: 'Medical Equipment', count: 15, icon: '🩺', color: 'secondary' },
    { id: 'supplements', name: 'Supplements', count: 14, icon: '🌿', color: 'accent' }
  ];

  const products = [
    {
      id: 1,
      name: 'Amoxicillin 500mg',
      category: 'tablets',
      strength: '500mg',
      image: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&w=400',
      mrp: 125.00,
      wholesalePrice: 89.50,
      availability: 'In Stock',
      rating: 4.8,
      reviews: 234,
      description: 'Broad-spectrum antibiotic for bacterial infections',
      manufacturer: 'PharmaCorp',
      batchNo: 'AMX2024001',
      expiryDate: '2025-12-31',
      discount: 28,
      isNew: false,
      isBestseller: true
    },
    {
      id: 2,
      name: 'Insulin Injection',
      category: 'injections',
      strength: '100IU/ml',
      image: 'https://images.pexels.com/photos/3873193/pexels-photo-3873193.jpeg?auto=compress&cs=tinysrgb&w=400',
      mrp: 450.00,
      wholesalePrice: 385.00,
      availability: 'In Stock',
      rating: 4.9,
      reviews: 189,
      description: 'Fast-acting insulin for diabetes management',
      manufacturer: 'DiabetesCare',
      batchNo: 'INS2024002',
      expiryDate: '2025-08-15',
      discount: 14,
      isNew: true,
      isBestseller: true
    },
    {
      id: 3,
      name: 'Paracetamol Syrup',
      category: 'syrups',
      strength: '120mg/5ml',
      image: 'https://images.pexels.com/photos/3873151/pexels-photo-3873151.jpeg?auto=compress&cs=tinysrgb&w=400',
      mrp: 85.00,
      wholesalePrice: 62.00,
      availability: 'In Stock',
      rating: 4.7,
      reviews: 156,
      description: 'Fever and pain relief syrup for children',
      manufacturer: 'PediCare',
      batchNo: 'PAR2024003',
      expiryDate: '2026-03-20',
      discount: 27,
      isNew: false,
      isBestseller: false
    },
    {
      id: 4,
      name: 'Digital Thermometer',
      category: 'medical-equipment',
      strength: 'Digital',
      image: 'https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg?auto=compress&cs=tinysrgb&w=400',
      mrp: 350.00,
      wholesalePrice: 285.00,
      availability: 'In Stock',
      rating: 4.6,
      reviews: 98,
      description: 'Accurate digital thermometer with LCD display',
      manufacturer: 'MedTech',
      batchNo: 'DT2024004',
      expiryDate: '2027-01-10',
      discount: 19,
      isNew: true,
      isBestseller: false
    },
    {
      id: 5,
      name: 'Omega-3 Capsules',
      category: 'supplements',
      strength: '1000mg',
      image: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&w=400',
      mrp: 680.00,
      wholesalePrice: 520.00,
      availability: 'Limited',
      rating: 4.5,
      reviews: 67,
      description: 'High-quality omega-3 fatty acid supplement',
      manufacturer: 'NutriHealth',
      batchNo: 'OM2024005',
      expiryDate: '2025-11-30',
      discount: 24,
      isNew: false,
      isBestseller: false
    },
    {
      id: 6,
      name: 'Metformin 500mg',
      category: 'tablets',
      strength: '500mg',
      image: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&w=400',
      mrp: 95.00,
      wholesalePrice: 72.00,
      availability: 'In Stock',
      rating: 4.8,
      reviews: 201,
      description: 'Type 2 diabetes management medication',
      manufacturer: 'DiabetesCare',
      batchNo: 'MET2024006',
      expiryDate: '2025-09-15',
      discount: 24,
      isNew: false,
      isBestseller: true
    }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.wholesalePrice - b.wholesalePrice;
        case 'rating':
          return b.rating - a.rating;
        case 'discount':
          return b.discount - a.discount;
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

  const addToCart = (productId: number) => {
    setCart(prev => prev.includes(productId) ? prev : [...prev, productId]);
  };

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 text-center animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-3 rounded-xl">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold gradient-text-pharma mb-3">Product Catalog</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Discover our comprehensive selection of premium pharmaceutical products and medical equipment
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search products, manufacturers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border-2 border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap gap-3 items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border-2 border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 text-sm"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="discount">Sort by Discount</option>
              </select>

              <div className="flex border-2 border-neutral-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-all duration-200 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-white text-neutral-600 hover:bg-primary-50'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-all duration-200 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-white text-neutral-600 hover:bg-primary-50'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Categories */}
          <div className="lg:w-64">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="font-bold text-neutral-800 mb-4 flex items-center text-sm">
                <Filter className="w-4 h-4 mr-2 text-primary-600" />
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                        selectedCategory === category.id
                          ? 'bg-primary-600 text-white'
                          : 'text-neutral-600 hover:bg-primary-50 hover:text-primary-600'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span>{category.icon}</span>
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          selectedCategory === category.id ? 'bg-white/20' : 'bg-neutral-200 text-neutral-600'
                        }`}>
                          {category.count}
                        </span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Quick Stats */}
              <div className="mt-6 p-3 bg-primary-50 rounded-lg">
                <h4 className="font-semibold text-neutral-800 mb-2 text-sm">Quick Stats</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Total Products:</span>
                    <span className="font-bold text-primary-600">{filteredProducts.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>In Cart:</span>
                    <span className="font-bold text-secondary-600">{cart.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wishlist:</span>
                    <span className="font-bold text-accent-600">{wishlist.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Display */}
          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-neutral-600 font-medium text-sm">
                Showing <span className="font-bold text-primary-600">{filteredProducts.length}</span> products
              </p>
              <div className="flex items-center space-x-3 text-xs text-neutral-500">
                <span>Cart: {cart.length} items</span>
                <span>Wishlist: {wishlist.length} items</span>
              </div>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up overflow-hidden"
                    style={{animationDelay: `${index * 0.05}s`}}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-2 left-2 flex flex-col space-y-1">
                        {product.isNew && (
                          <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                            🆕 NEW
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="bg-yellow-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                            ⭐ BESTSELLER
                          </span>
                        )}
                        {product.discount > 20 && (
                          <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                            🔥 {product.discount}% OFF
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-2 right-2 flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className={`p-1.5 rounded-full transition-all duration-200 ${
                            wishlist.includes(product.id)
                              ? 'bg-red-500 text-white'
                              : 'bg-white/90 text-neutral-600 hover:bg-red-50 hover:text-red-500'
                          }`}
                        >
                          <Heart className="w-3 h-3" />
                        </button>
                        <button className="p-1.5 bg-white/90 text-neutral-600 rounded-full hover:bg-primary-50 hover:text-primary-600 transition-all duration-200">
                          <Eye className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Availability Status */}
                      <div className="absolute bottom-2 left-2">
                        <div className={`flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                          product.availability === 'In Stock' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          <CheckCircle className="w-2 h-2" />
                          <span>{product.availability}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-bold text-neutral-800 text-sm group-hover:text-primary-600 transition-colors">
                          {product.name}
                        </h3>
                        <div className="text-right">
                          <p className="text-xs text-neutral-500 line-through">MRP: ₹{product.mrp}</p>
                          <p className="text-lg font-bold text-primary-600">₹{product.wholesalePrice}</p>
                        </div>
                      </div>
                      
                      <p className="text-xs text-neutral-600 mb-1">Strength: {product.strength}</p>
                      <p className="text-xs text-neutral-500 mb-2 line-clamp-2">{product.description}</p>
                      <p className="text-xs text-neutral-500 mb-2">Manufacturer: {product.manufacturer}</p>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-neutral-300'
                              }`}
                            />
                          ))}
                          <span className="text-xs text-neutral-600 ml-1">({product.reviews})</span>
                        </div>
                        <span className="text-xs text-neutral-500">Batch: {product.batchNo}</span>
                      </div>
                      
                      <button
                        onClick={() => addToCart(product.id)}
                        disabled={cart.includes(product.id)}
                        className={`w-full py-2 px-3 rounded-lg font-semibold text-xs transition-all duration-200 ${
                          cart.includes(product.id)
                            ? 'bg-green-100 text-green-800 cursor-not-allowed'
                            : 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700'
                        }`}
                      >
                        {cart.includes(product.id) ? (
                          <span className="flex items-center justify-center space-x-1">
                            <CheckCircle className="w-3 h-3" />
                            <span>Added to Cart</span>
                          </span>
                        ) : (
                          <span className="flex items-center justify-center space-x-1">
                            <ShoppingCart className="w-3 h-3" />
                            <span>Add to Cart</span>
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {filteredProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="flex items-center p-4 border-b border-neutral-200 last:border-b-0 hover:bg-neutral-50 transition-all duration-200 animate-slide-up"
                    style={{animationDelay: `${index * 0.02}s`}}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg mr-4 shadow-md"
                      loading="lazy"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-bold text-neutral-800">{product.name}</h3>
                        <div className="flex items-center space-x-1">
                          {product.isNew && <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-bold">NEW</span>}
                          {product.isBestseller && <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-bold">BESTSELLER</span>}
                        </div>
                      </div>
                      <p className="text-sm text-neutral-600 mb-1">Strength: {product.strength} | Manufacturer: {product.manufacturer}</p>
                      <p className="text-sm text-neutral-500 mb-2">{product.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(product.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-neutral-300'
                                }`}
                              />
                            ))}
                            <span className="text-sm text-neutral-600 ml-1">({product.reviews})</span>
                          </div>
                          
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            product.availability === 'In Stock' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {product.availability}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="text-right">
                            <p className="text-sm text-neutral-500 line-through">MRP: ₹{product.mrp}</p>
                            <p className="text-xl font-bold text-primary-600">₹{product.wholesalePrice}</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            <button
                              onClick={() => toggleWishlist(product.id)}
                              className={`p-2 rounded-full transition-all duration-200 ${
                                wishlist.includes(product.id)
                                  ? 'bg-red-100 text-red-600'
                                  : 'bg-neutral-100 text-neutral-600 hover:bg-red-50 hover:text-red-500'
                              }`}
                            >
                              <Heart className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => addToCart(product.id)}
                              disabled={cart.includes(product.id)}
                              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                                cart.includes(product.id)
                                  ? 'bg-green-100 text-green-800 cursor-not-allowed'
                                  : 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700'
                              }`}
                            >
                              {cart.includes(product.id) ? 'Added' : 'Add to Cart'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;