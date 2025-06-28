import React from 'react';
import { Shield, Award, Users, Globe, Clock, Truck, Building2, Heart } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Started as a small pharmaceutical distributor' },
    { year: '2012', title: 'FDA License Obtained', description: 'Received full FDA licensing for nationwide distribution' },
    { year: '2015', title: 'ISO Certification', description: 'Achieved ISO 9001:2015 quality management certification' },
    { year: '2018', title: 'Expansion', description: 'Opened second distribution center, doubled capacity' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched online ordering platform and tracking system' },
    { year: '2023', title: 'Sustainability Initiative', description: 'Implemented green logistics and eco-friendly packaging' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensure every product meets the highest pharmaceutical standards.'
    },
    {
      icon: Heart,
      title: 'Patient Care',
      description: 'Every decision we make is guided by our commitment to improving patient health outcomes.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building long-term relationships with pharmacies based on trust, reliability, and mutual success.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making essential medications accessible to communities nationwide through efficient distribution.'
    }
  ];

  const leadership = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '15+ years in pharmaceutical industry, former FDA regulatory affairs specialist'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Operations Officer',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Supply chain expert with extensive experience in pharmaceutical logistics'
    },
    {
      name: 'Dr. Emily Rodriguez',
      position: 'Chief Quality Officer',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'PharmD with specialization in quality assurance and regulatory compliance'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">About Premium Pharma</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, we've been the trusted bridge between pharmaceutical manufacturers 
              and healthcare providers, ensuring quality medications reach patients when they need them most.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-right">
              <h2 className="text-3xl font-bold text-neutral-800 mb-6">Our Mission</h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                To provide reliable, efficient, and compliant pharmaceutical distribution services 
                that enable healthcare providers to focus on what matters most - patient care.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">99.9%</div>
                  <div className="text-sm text-neutral-600">Order Accuracy</div>
                </div>
                <div className="text-center p-4 bg-secondary-50 rounded-lg">
                  <div className="text-2xl font-bold text-secondary-600">24/7</div>
                  <div className="text-sm text-neutral-600">Support Available</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-left">
              <img
                src="https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our facility"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-neutral-600">
              The principles that guide every decision we make
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="bg-primary-100 p-3 rounded-lg w-fit mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Our Journey</h2>
            <p className="text-lg text-neutral-600">
              Key milestones in our growth and development
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } animate-slide-up`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="flex-1 px-8">
                    <div className={`bg-white rounded-xl p-6 shadow-lg ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}>
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-neutral-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Leadership Team</h2>
            <p className="text-lg text-neutral-600">
              Experienced professionals leading our mission
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-800 mb-1">{leader.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{leader.position}</p>
                  <p className="text-neutral-600 text-sm">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of pharmacies who trust us for reliable pharmaceutical distribution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;