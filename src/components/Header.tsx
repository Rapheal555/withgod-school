'use client'
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Main Header Content */}
        <div className="flex justify-between items-center h-20">
          {/* Logo and School Name */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <span className="text-4xl">🏫</span>{" "}
            {/* Replace with 3D anime mascot image */}
            <h1 className="text-2xl font-bold">
              WithGod <span className="text-blue-400">School</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link hover:text-blue-300">
              Home
            </Link>
            <Link href="/about" className="nav-link hover:text-blue-300">
              About
            </Link>
            <Link href="/programs" className="nav-link hover:text-blue-300">
              Programs
            </Link>
            <Link href="/gallery" className="nav-link hover:text-blue-300">
              Gallery
            </Link>
            <Link
              href="/contact"
              className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
            >
              Enroll Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 pb-4">
            <Link
              href="/"
              className="nav-link hover:text-blue-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="nav-link hover:text-blue-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/programs"
              className="nav-link hover:text-blue-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/gallery"
              className="nav-link hover:text-blue-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="bg-blue-600 px-6 py-2 rounded-full text-center hover:bg-blue-700 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Enroll Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
