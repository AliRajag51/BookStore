import React, { useState } from "react";
import BannerImage from '../assets/banner-image.png';
import { Heart, Share2, Star, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";
import BuyNowModal from "./BuyNowModal"; // We'll create this next

function FreeCourse() {
  const pages = [
    [
      { 
        title: "Gaming Book", 
        author: "John GameDev", 
        rating: 4.5,
        students: 1200,
        duration: "8h 30m",
        description: "Master game development with this comprehensive guide covering all major game engines.",
        category: "Gaming"
      },
      { 
        title: "Story Book", 
        author: "Sarah Writer", 
        rating: 4.8,
        students: 2400,
        duration: "6h 15m",
        description: "Learn the art of storytelling and creative writing techniques.",
        category: "Literature"
      },
      { 
        title: "Design Principles", 
        author: "Alex Designer", 
        rating: 4.3,
        students: 1800,
        duration: "5h 45m",
        description: "Understand fundamental design principles for modern applications.",
        category: "Design"
      },
    ],
    [
      { 
        title: "Programming Book", 
        author: "Mike Coder", 
        rating: 4.7,
        students: 3500,
        duration: "12h 00m",
        description: "Complete programming course from beginner to advanced levels.",
        category: "Programming"
      },
      { 
        title: "Sports Book", 
        author: "Coach Wilson", 
        rating: 4.2,
        students: 900,
        duration: "4h 20m",
        description: "Sports science and athletic training methodologies.",
        category: "Sports"
      },
      { 
        title: "Business Strategy", 
        author: "Emma Entrepreneur", 
        rating: 4.6,
        students: 2100,
        duration: "7h 30m",
        description: "Learn business strategies for startups and established companies.",
        category: "Business"
      },
    ],
    [
      { 
        title: "Science Book", 
        author: "Dr. Smith", 
        rating: 4.4,
        students: 1500,
        duration: "9h 15m",
        description: "Explore the latest discoveries in modern science.",
        category: "Science"
      },
      { 
        title: "Art History", 
        author: "Prof. Art", 
        rating: 4.9,
        students: 1100,
        duration: "6h 45m",
        description: "Journey through art history from Renaissance to Modern.",
        category: "Art"
      },
      { 
        title: "Cooking Guide", 
        author: "Chef Maria", 
        rating: 4.7,
        students: 2800,
        duration: "5h 00m",
        description: "Master cooking techniques from around the world.",
        category: "Cooking"
      },
    ],
  ];

  const [activePage, setActivePage] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showBuyNowModal, setShowBuyNowModal] = useState(false);
  const [favorites, setFavorites] = useState({});

  const handleBuyNow = (course) => {
    setSelectedCourse(course);
    setShowBuyNowModal(true);
  };

  const toggleFavorite = (index) => {
    setFavorites(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const nextPage = () => {
    setActivePage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setActivePage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  // The hover effect is called: "Image Zoom/Scale on Hover"
  return (
    <section className="font-poppins bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
            Free Courses
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Explore Free Offered Courses
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover amazing free courses to enhance your skills and knowledge. Start learning today!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pages[activePage].map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              {/* Image Container with Hover Effect */}
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 p-6">
                <div className="relative">
                  <img
                    src={BannerImage}
                    alt={course.title}
                    className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(index)}
                    className="absolute top-2 right-2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg"
                  >
                    <Heart 
                      className={`w-5 h-5 ${favorites[index] ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                    />
                  </button>
                  
                  {/* Category Badge */}
                  <span className="absolute bottom-2 left-2 px-3 py-1 bg-black/70 text-white text-xs rounded-full backdrop-blur-sm">
                    {course.category}
                  </span>
                </div>
                
                {/* Share Button */}
                <button className="absolute bottom-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-black">
                      {course.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">by {course.author}</p>
                  </div>
                  <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full font-medium">
                    Free
                  </span>
                </div>

                <p className="mt-3 text-gray-600 line-clamp-2">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Price & Button */}
                <div className="mt-6 flex justify-between items-center pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">$0</span>
                    <span className="text-gray-400 line-through ml-2">$49.99</span>
                  </div>
                  <button 
                    onClick={() => handleBuyNow(course)}
                    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-full hover:from-pink-600 hover:to-purple-700 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-8 mt-12">
          <button
            onClick={prevPage}
            className="p-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          
          {/* Dots */}
          <div className="flex gap-3">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActivePage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activePage === index
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextPage}
            className="p-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Buy Now Modal */}
      {showBuyNowModal && selectedCourse && (
        <BuyNowModal
          course={selectedCourse}
          onClose={() => {
            setShowBuyNowModal(false);
            setSelectedCourse(null);
          }}
        />
      )}
    </section>
  );
}

export default FreeCourse;