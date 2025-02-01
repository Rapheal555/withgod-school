'use client'
import { useEffect } from "react";

export default function HeroSection() {
  // Add a simple animation effect for the hero text
  useEffect(() => {
    const heroText = document.querySelector(".hero-text");
    if (heroText) {
      heroText.classList.add("animate-fade-in");
    }
  }, []);

  return (
    <section className="relative bg-blue-100 py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/images/kids-playing.jpg')] bg-cover bg-center opacity-30"></div>

      {/* Content Container */}
      <div className="container mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h1 className="hero-text text-5xl md:text-6xl font-bold text-blue-900 mb-6 opacity-0 transform translate-y-10 transition-all duration-1000">
          Welcome to <span className="text-blue-600">WithGod</span> Nursery and
          Primary School
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-blue-800 mb-8">
          Where Learning Begins with Love, Care, and Excellence
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Enroll Now
          </button>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* 3D Anime Character */}
        <div className="mt-12">
          <img
            src="/images/students.png"
            alt="3D Anime Character"
            className="max-w-full lg:max-w-[80dvw] rounded-2xl mx-auto animate-float"
          />
        </div>

        {/* Fun Animated Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <span className="text-4xl text-blue-600 animate-bounce">🎒</span>
          <span className="text-4xl text-blue-600 animate-spin">📚</span>
          <span className="text-4xl text-blue-600 animate-bounce">✏️</span>
        </div>
      </div>
    </section>
  );
}
