import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Truck, 
  Clock, 
  Award, 
  Users, 
  Package, 
  CheckCircle,
  ArrowRight,
  Star,
  Building,
  Globe,
  Zap,
  Phone,
  Mail,
  MapPin,
  Heart,
  Thermometer,
  Stethoscope,
  Pill,
  Activity
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'FDA Licensed',
      description: 'Fully licensed and compliant with all federal regulations'
    },
    {
      icon: Truck,
      title: 'Nationwide Delivery',
      description: 'Fast, reliable delivery across all 50 states'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and order assistance'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'ISO certified with rigorous quality control standards'
    }
  ];

  const stats = [
    { number: '15,000+', label: 'Products Available' },
    { number: '1,200+', label: 'Pharmacy Partners' },
    { number: '15+', label: 'Years Experience' },
    { number: '99.9%', label: 'Order Accuracy' }
  ];

  const trustedBrands = [
    'Pfizer', 'Johnson & Johnson', 'Merck', 'Bristol Myers Squibb', 
    'AbbVie', 'Novartis', 'Roche', 'GSK'
  ];

  const pharmacySuggestions = [
    {
      icon: Heart,
      title: 'Patient Care Programs',
      description: 'Medication therapy management and patient counseling services',
      color: 'red'
    },
    {
      icon: Thermometer,
      title: 'Clinical Services',
      description: 'Immunizations, health screenings, and chronic disease management',
      color: 'blue'
    },
    {
      icon: Stethoscope,
      title: 'Specialty Pharmacy',
      description: 'Complex medications for rare diseases and chronic conditions',
      color: 'green'
    },
    {
      icon: Pill,
      title: 'Compounding Services',
      description: 'Custom medication formulations for specific patient needs',
      color: 'purple'
    },
    {
      icon: Activity,
      title: 'Digital Health',
      description: 'Mobile apps, online refills, and medication adherence tracking',
      color: 'indigo'
    },
    {
      icon: Users,
      title: 'Pharmacy Automation',
      description: 'Robotic dispensing systems and inventory management solutions',
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Top Info Bar - Integrated into Home */}
      <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 text-white py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-1 sm:mb-0">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3" />
              <span className="font-medium">+9188248 01254</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3" />
              <span className="font-medium">nikssaini05@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Shield className="w-3 h-3 text-green-400" />
              <span className="text-xs">FDA Licensed</span>
            </div>
            <div className="flex items-center space-x-1">
              <Award className="w-3 h-3 text-yellow-400" />
              <span className="text-xs">ISO Certified</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span className="text-xs">Nationwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Your Trusted
                <span className="block text-secondary-400">Wholesale</span>
                <span className="block">Pharmacy Partner</span>
              </h1>
              <p className="text-lg text-primary-100 mb-6 leading-relaxed">
                Premium pharmaceutical distribution with nationwide reach. 
                Serving pharmacies with quality products, competitive pricing, and reliable delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/wholesale-order"
                  className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Place Wholesale Order</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-800 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  View Product Catalog
                </Link>
              </div>
            </div>
            
            <div className="relative animate-slide-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h2 className="text-xl font-bold mb-4">Why Choose Us?</h2>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-secondary-600 p-2 rounded-lg">
                        <feature.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{feature.title}</h3>
                        <p className="text-xs text-primary-100">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pharmacy Business Suggestions */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
              Modern Pharmacy Solutions
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Enhance your pharmacy business with these innovative services and technologies 
              that improve patient care and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pharmacySuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 hover-lift animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`bg-${suggestion.color}-100 p-3 rounded-lg w-fit mb-4`}>
                  <suggestion.icon className={`w-6 h-6 text-${suggestion.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-2">{suggestion.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{suggestion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
              Comprehensive Wholesale Solutions
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              From bulk ordering to regulatory compliance, we provide end-to-end 
              pharmaceutical distribution services tailored to your pharmacy's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Package,
                title: 'Bulk Ordering',
                description: 'Streamlined ordering process with competitive wholesale pricing for high-volume purchases.',
                color: 'primary'
              },
              {
                icon: Users,
                title: 'Pharmacy Partnerships',
                description: 'Dedicated account management and customized solutions for independent and chain pharmacies.',
                color: 'secondary'
              },
              {
                icon: Shield,
                title: 'Regulatory Compliance',
                description: 'Complete compliance with FDA, DEA, and state regulations with full documentation.',
                color: 'accent'
              },
              {
                icon: Truck,
                title: 'Logistics & Delivery',
                description: 'Advanced cold-chain logistics and same-day delivery options for critical medications.',
                color: 'primary'
              },
              {
                icon: Globe,
                title: 'National Coverage',
                description: 'Extensive distribution network covering all major metropolitan and rural areas.',
                color: 'secondary'
              },
              {
                icon: Zap,
                title: 'Emergency Supply',
                description: '24/7 emergency medication supply service for urgent patient needs.',
                color: 'accent'
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 hover-lift animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`bg-${service.color}-100 p-3 rounded-lg w-fit mb-4`}>
                  <service.icon className={`w-6 h-6 text-${service.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-2">{service.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-neutral-800 mb-3">
              Trusted Brand Partners
            </h2>
            <p className="text-neutral-600">
              We distribute products from the world's leading pharmaceutical manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {trustedBrands.map((brand, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-4 text-center hover:bg-primary-50 transition-colors duration-200 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-sm font-semibold text-neutral-700">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg mb-6 text-primary-100 max-w-2xl mx-auto">
              Join thousands of pharmacies nationwide who trust us for their wholesale pharmaceutical needs.
              Get competitive pricing and reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/wholesale-order"
                className="bg-white text-primary-600 hover:bg-neutral-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Start Ordering Today
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;