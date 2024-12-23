import React from 'react';
import { ShoppingBag, Users, Globe, Shield } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ShopHub</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're on a mission to revolutionize online shopping by providing quality
            products at competitive prices with exceptional customer service.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Happy Customers', value: '1M+' },
            { label: 'Products', value: '50K+' },
            { label: 'Countries', value: '50+' },
            { label: 'Team Members', value: '500+' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShoppingBag,
                title: 'Quality Products',
                description: 'We source only the best products from trusted manufacturers.'
              },
              {
                icon: Users,
                title: 'Customer First',
                description: 'Your satisfaction is our top priority, always.'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Delivering happiness worldwide with fast shipping.'
              },
              {
                icon: Shield,
                title: 'Secure Shopping',
                description: 'Your data and transactions are always protected.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'John Smith',
              role: 'CEO & Founder',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80'
            },
            {
              name: 'Sarah Johnson',
              role: 'COO',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80'
            },
            {
              name: 'Michael Chen',
              role: 'CTO',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80'
            }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}