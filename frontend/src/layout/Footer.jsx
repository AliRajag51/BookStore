import React from "react";

function Footer() {
  return (
    <footer className="font-poppins py-12 text-center text-gray-600">
      
      <div className="flex justify-center gap-6 mb-6">
        <a href="#">About us</a>
        <a href="#">Contact</a>
        <a href="#">Jobs</a>
        <a href="#">Press kit</a>
      </div>

      <div className="flex justify-center gap-6 text-xl mb-6">
        <i className="ri-twitter-fill"></i>
        <i className="ri-youtube-fill"></i>
        <i className="ri-facebook-fill"></i>
      </div>

      <p className="text-sm">
        Copyright © 2024 Book Store. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;



