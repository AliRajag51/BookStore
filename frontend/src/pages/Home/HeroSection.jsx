import React, { useEffect, useState } from "react";
import bannerImage from "../../assets/banner-image.png";

function HeroSection() {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const [stats, setStats] = useState({ users: 0, books: 0, activeBooks: 0 });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const response = await fetch(`${API_URL}/api/stats`);
        const data = await response.json();
        if (!response.ok) return;
        setStats(data.stats || {});
      } catch {
        // Ignore fetch errors for now
      }
    };

    loadStats();
  }, [API_URL]);

  const formatCount = (value) => {
    if (!Number.isFinite(value)) return "0";
    if (value >= 1000000) {
      const num = (value / 1000000).toFixed(1).replace(/\.0$/, "");
      return `${num}M+`;
    }
    if (value >= 1000) {
      const num = (value / 1000).toFixed(1).replace(/\.0$/, "");
      return `${num}K+`;
    }
    return `${value}+`;
  };

  return (
    <section id="home" className="font-poppins  from-white to-gray-50">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-20">
          {/* Left Content */}
          <div className="flex-1 w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
              Discover your next favorite{" "}
              <span className="text-pink-500 block sm:inline">
                book, every week
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg lg:text-xl max-w-xl">
              Curated reading lists, new releases, and timeless classics
              delivered straight to your shelf. Join a community that reads
              with purpose.
            </p>

            {/* Highlights */}
            <div className="mt-6 sm:mt-8">
              <div className="flex-1 rounded-xl border border-pink-100 bg-pink-50/50 p-4">
                <p className="text-sm text-pink-600 font-medium">
                  This week&apos;s highlights
                </p>
                <p className="mt-1 text-gray-700 text-base sm:text-lg">
                  Fresh releases, staff picks, and indie gems curated for you.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="/#fiction"
                    className="inline-flex items-center px-4 py-2 text-sm rounded-full bg-white text-gray-600 border border-gray-200 hover:border-pink-200 hover:text-pink-600 transition"
                  >
                    Fiction
                  </a>
                  <a
                    href="/#business"
                    className="inline-flex items-center px-4 py-2 text-sm rounded-full bg-white text-gray-600 border border-gray-200 hover:border-pink-200 hover:text-pink-600 transition"
                  >
                    Mystery
                  </a>
                  <a
                    href="/#mystery"
                    className="inline-flex items-center px-4 py-2 text-sm rounded-full bg-white text-gray-600 border border-gray-200 hover:border-pink-200 hover:text-pink-600 transition"
                  >
                    Business
                  </a>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {formatCount(stats.users)}
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  Readers
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {formatCount(stats.activeBooks)}
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  Curated Lists
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {formatCount(stats.books)}
                </div>
                <div className="text-gray-600 text-sm sm:text-base">Books</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full lg:w-1/2 flex justify-center">
            <img
              src={bannerImage}
              alt="Books Banner"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;


