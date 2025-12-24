import React from "react";
import { Link } from "react-router-dom";
import { Heart, Share2, Star, Clock, Users } from "lucide-react";

function CourseCard({
  course,
  image,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
  detailsHref,
  onShare,
}) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2">
      {/* Image Container with Hover Effect */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 p-6">
        <div className="relative">
          <img
            src={image}
            alt={course.title}
            className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
          />

          {detailsHref && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                to={detailsHref}
                className="px-4 py-2 text-sm bg-white/90 rounded-full shadow hover:bg-white transition"
              >
                View details
              </Link>
            </div>
          )}

          {/* Favorite Button */}
          <button
            onClick={onToggleFavorite}
            className="absolute top-2 right-2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
          </button>

          {/* Category Badge */}
          <span className="absolute bottom-2 left-2 px-3 py-1 bg-black/70 text-white text-xs rounded-full backdrop-blur-sm">
            {course.category}
          </span>
        </div>

        {/* Share Button */}
        <button
          type="button"
          onClick={onShare}
          className="absolute bottom-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg"
        >
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
            {course.price === 0 ? "Free" : `$${course.price}`}
          </span>
        </div>

        <p className="mt-3 text-gray-600 line-clamp-2">{course.description}</p>

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
            <span className="text-2xl font-bold text-gray-900">
              {course.price === 0 ? "Free" : `$${course.price}`}
            </span>
            <span className="text-gray-400 line-through ml-2">$49.99</span>
          </div>
          <button
            onClick={onAddToCart}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-full hover:from-pink-600 hover:to-purple-700 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
