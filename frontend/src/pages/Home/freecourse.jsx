import React, { useState } from "react";
import BannerImage from "../../assets/banner-image.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BuyNowModal from "./BuyNowModal";
import SectionHeader from "../../components/FreeCourse/SectionHeader.jsx";
import CourseCard from "../../components/FreeCourse/CourseCard.jsx";

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
    <section id="free-courses" className="font-poppins bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Free Courses"
          title="Explore Free Offered Courses"
          description="Discover amazing free courses to enhance your skills and knowledge. Start learning today!"
        />

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pages[activePage].map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              image={BannerImage}
              isFavorite={Boolean(favorites[index])}
              onToggleFavorite={() => toggleFavorite(index)}
              onBuyNow={() => handleBuyNow(course)}
            />
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
