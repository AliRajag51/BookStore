import React from "react";
import { Users, Award, BookOpen, Globe, Heart, TrendingUp, Target, Shield, Star } from "lucide-react";

function AboutUs() {
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "50K+", label: "Happy Readers", color: "text-pink-600 bg-gradient-to-br from-pink-50 to-pink-100" },
    { icon: <BookOpen className="w-8 h-8" />, value: "10K+", label: "Books Available", color: "text-purple-600 bg-gradient-to-br from-purple-50 to-purple-100" },
    { icon: <Globe className="w-8 h-8" />, value: "150+", label: "Countries Reached", color: "text-pink-500 bg-gradient-to-br from-pink-50 to-pink-100" },
    { icon: <Award className="w-8 h-8" />, value: "25+", label: "Awards Won", color: "text-purple-500 bg-gradient-to-br from-purple-50 to-purple-100" },
  ];

  const team = [
    { name: "Alex Johnson", role: "Founder & CEO", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", description: "Passionate about making knowledge accessible to everyone." },
    { name: "Sarah Williams", role: "Head of Content", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", description: "Curates the best books from around the world." },
    { name: "Michael Chen", role: "Tech Lead", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael", description: "Builds seamless reading experiences." },
    { name: "Emma Davis", role: "Community Manager", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma", description: "Connects readers with their next favorite book." },
  ];

  const values = [
    { icon: <Heart className="w-6 h-6" />, title: "Passion for Reading", description: "We believe in the transformative power of books." },
    { icon: <Target className="w-6 h-6" />, title: "Accessibility First", description: "Making quality education accessible to all." },
    { icon: <Shield className="w-6 h-6" />, title: "Trust & Quality", description: "Curated content from trusted sources." },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Continuous Growth", description: "Always evolving to serve you better." },
  ];

  return (
    <section className="font-poppins bg-gradient-to-b from-white to-gray-50">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            About Book Store
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            We're on a mission to make quality education and reading accessible to everyone, everywhere.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 rounded-full text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              From a small idea to a global community
            </h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, Book Store began with a simple vision: to create a platform where anyone, anywhere could access quality educational resources and books. What started as a small online library has grown into a global community of passionate readers and learners.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we serve millions of readers across 150+ countries, offering a diverse collection of books, courses, and learning materials. Our commitment to accessibility and quality has made us a trusted name in online education.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-xl hover:from-pink-600 hover:to-purple-700 hover:shadow-lg transition transform hover:-translate-y-0.5">
              Explore Our Collection
            </button>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                <BookOpen className="w-24 h-24 text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.color} rounded-2xl shadow-lg p-6 text-center border border-transparent hover:border-pink-200 transition-all`}>
              <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <div className="text-pink-600">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What drives us forward
            </h2>
            <p className="text-gray-600">
              These principles guide every decision we make and every feature we build.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-pink-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 rounded-full text-sm font-medium mb-4">
              Meet Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The people behind Book Store
            </h2>
            <p className="text-gray-600">
              A passionate team dedicated to transforming education through technology.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto border-4 border-gray-100 group-hover:border-pink-100 transition"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-pink-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To democratize access to quality education by providing affordable, accessible, and engaging learning resources to people around the world, regardless of their background or location.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-purple-100">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To create a world where every individual has the opportunity to learn, grow, and achieve their full potential through accessible education and the joy of reading.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your learning journey?</h2>
          <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
            Join thousands of learners who are already transforming their lives through reading and education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-xl hover:bg-gray-100 transition transform hover:-translate-y-0.5">
              Explore Books
            </button>
            <button className="px-6 py-3 bg-pink-700 text-white font-semibold rounded-xl hover:bg-pink-800 transition transform hover:-translate-y-0.5">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;