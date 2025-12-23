import React from "react";
import HeroSection from "./HeroSection.jsx";
import FreeCourse from "./FreeCourse_temp.jsx";
import ContactUs from "./ContactUs.jsx";
import AboutUs from "./AboutUs.jsx";

function HomePage() {
  return (
    <main className="flex flex-col gap-16 md:gap-20">
      <HeroSection />
      <FreeCourse />
      <AboutUs />
      <ContactUs />
    </main>
  );
}

export default HomePage;
