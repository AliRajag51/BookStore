import React from "react";
import bannerImage from "../assets/banner-image.png";

function Banner() {
  return (
    <section className="font-poppins  from-white to-gray-50">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-20">
          {/* Left Content */}
          <div className="flex-1 w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
              Hello, welcomes here to learn{" "}
              <span className="text-pink-500 block sm:inline">
                something new everyday!!!
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg lg:text-xl max-w-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!
            </p>

            {/* Email Input & Button */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email to login"
                  className="w-full px-4 py-3 sm:py-4 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400 text-base"
                />
              </div>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 sm:py-4 rounded-lg font-medium transition text-base sm:text-lg whitespace-nowrap">
                Secondary Action
              </button>
            </div>

            {/* Stats */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  10K+
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  Students
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  100+
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  Courses
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  5K+
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

export default Banner;
