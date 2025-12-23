import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "../../components/FreeCourse/SectionHeader.jsx";
import CourseCard from "../../components/FreeCourse/CourseCard.jsx";
import { pages } from "../../data/books.js";
import useCart from "../../hooks/useCart.js";

function FreeCourse() {
  const [activePage, setActivePage] = useState(0);
  const [favorites, setFavorites] = useState({});
  const { addItem } = useCart();

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
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
    <section id="free-courses" className="font-poppins bg-gradient-to-b from-white to-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Free Reads"
          title="Explore our featured reading guides"
          description="Browse editor-picked collections to help you find your next great book."
        />

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pages[activePage].map((course) => {
            const anchorId = course.anchor;

            return (
              <div key={course.id} id={anchorId}>
                <CourseCard
                  course={course}
                  image={course.image}
                  isFavorite={Boolean(favorites[course.id])}
                  onToggleFavorite={() => toggleFavorite(course.id)}
                  onAddToCart={() => addItem(course)}
                  detailsHref={`/books/${course.id}`}
                />
              </div>
            );
          })}
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

    </section>
  );
}

export default FreeCourse;

