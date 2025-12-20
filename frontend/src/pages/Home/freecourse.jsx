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
        title: "Modern Fiction Picks",
        author: "Ava Martinez",
        rating: 4.7,
        students: 1200,
        duration: "320 pages",
        description: "A curated set of contemporary novels with big ideas and page-turning plots.",
        category: "Fiction"
      },
      {
        title: "Mystery & Thrillers",
        author: "Noah Brooks",
        rating: 4.8,
        students: 2400,
        duration: "280 pages",
        description: "Edge-of-your-seat reads with twists, suspense, and unforgettable detectives.",
        category: "Mystery"
      },
      {
        title: "Design & Creativity",
        author: "Lena Park",
        rating: 4.5,
        students: 1800,
        duration: "210 pages",
        description: "A visual guide to design thinking, typography, and modern creative practice.",
        category: "Art & Design"
      },
    ],
    [
      {
        title: "Programming Fundamentals",
        author: "Ravi Singh",
        rating: 4.6,
        students: 3500,
        duration: "360 pages",
        description: "Build strong coding foundations with clear explanations and practical examples.",
        category: "Technology"
      },
      {
        title: "Business & Leadership",
        author: "Emma Clarke",
        rating: 4.4,
        students: 900,
        duration: "240 pages",
        description: "Strategy, leadership, and decision-making lessons for modern teams.",
        category: "Business"
      },
      {
        title: "Wellness & Mindfulness",
        author: "Maya Patel",
        rating: 4.7,
        students: 2100,
        duration: "200 pages",
        description: "Practical habits and calm routines for a healthier, more focused life.",
        category: "Wellness"
      },
    ],
    [
      {
        title: "Science Essentials",
        author: "Dr. Hannah Lee",
        rating: 4.5,
        students: 1500,
        duration: "300 pages",
        description: "Explore the fundamentals of modern science in an accessible format.",
        category: "Science"
      },
      {
        title: "History in Focus",
        author: "James Carter",
        rating: 4.9,
        students: 1100,
        duration: "260 pages",
        description: "A sweeping look at pivotal moments that shaped the world.",
        category: "History"
      },
      {
        title: "Cooking at Home",
        author: "Chef Maria",
        rating: 4.6,
        students: 2800,
        duration: "180 pages",
        description: "Everyday recipes, smart techniques, and flavors you can trust.",
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
          badge="Free Reads"
          title="Explore our featured reading guides"
          description="Browse editor-picked collections to help you find your next great book."
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

