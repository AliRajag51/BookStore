import React, { useEffect, useState } from "react";
import {
  BookOpen,
  Mail,
  Github,
  Twitter,
  Linkedin,
  ArrowUp,
  Heart,
} from "lucide-react";

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { name: "Home", href: "/#home" },
    { name: "Books", href: "/#free-courses" },
    { name: "About", href: "/#about" },
  ];

  const socialLinks = [
    {
      label: "Twitter",
      href: "https://x.com/Alihaider5432",
      icon: <Twitter className="w-5 h-5" />,
      className: "bg-sky-50 text-sky-600 hover:bg-sky-100",
    },
    {
      label: "GitHub",
      href: "https://github.com/AliRajag51",
      icon: <Github className="w-5 h-5" />,
      className: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ali-haider-b39391367/",
      icon: <Linkedin className="w-5 h-5" />,
      className: "bg-blue-50 text-blue-600 hover:bg-blue-100",
    },
  ];

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3 bg-pink-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-pink-700 hover:scale-110 hover:shadow-xl transform ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0 pointer-events-none"
        }`}
        aria-label="Back to top"
        type="button"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <footer className="font-poppins bg-gradient-to-b from-white to-pink-50/80 border-t border-pink-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg shadow-md">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-pink-600 bg-clip-text text-transparent">
                    Ali Haider
                  </h2>
                  <p className="text-sm text-gray-500">
                    Software Engineer | MERN Stack Solutions
                  </p>
                </div>
              </div>
              <p className="mt-2 text-gray-600 leading-relaxed max-w-lg">
                I build modern, scalable MERN applications for startups and
                product teams. Let&apos;s craft fast, clean, and reliable
                experiences together.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="https://alirajag51.github.io/my-porfolio/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-white border border-pink-200 rounded-lg shadow-sm hover:shadow-md hover:border-pink-300 hover:-translate-y-1 transition-all duration-300"
                >
                  <Mail className="w-4 h-4 text-pink-600 group-hover:rotate-6 transition-transform" />
                  <span className="text-gray-700 group-hover:text-pink-600 transition-colors">
                    Portfolio
                  </span>
                </a>
                <a
                  href="https://github.com/AliRajag51"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all duration-300"
                >
                  <Github className="w-4 h-4 text-gray-700 group-hover:text-black transition-colors" />
                  <span className="text-gray-700 group-hover:text-black transition-colors">
                    GitHub
                  </span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-6 relative inline-block">
                <span className="relative z-10">Quick Links</span>
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-pink-400 to-pink-200 rounded-full"></span>
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="w-1 h-1 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>{link.name}</span>
                    <ArrowUp className="w-3 h-3 rotate-90 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-6 relative inline-block">
                <span className="relative z-10">Connect</span>
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></span>
              </h3>
              <p className="text-sm text-gray-600">
                Reach out for MERN projects or collaboration.
              </p>
              <div className="mt-4 flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${social.className}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-pink-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-500">
                <span>(c) {currentYear} Book Store. All rights reserved.</span>
                <span className="hidden sm:inline mx-2">|</span>
                <span className="block sm:inline">Made with care</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <Heart className="w-5 h-5 text-pink-500" />
                  <div className="absolute inset-0 animate-ping bg-pink-400 rounded-full opacity-20"></div>
                </div>
                <span className="text-sm text-gray-600">by Ali Haider</span>
              </div>
            </div>
            <p className="mt-6 text-center text-xs text-gray-400">
              Built with React & Tailwind CSS | MERN-ready frontend
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
