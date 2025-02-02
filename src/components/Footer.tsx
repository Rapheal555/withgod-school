export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About WithGod School</h3>
            <p className="text-blue-200">
              WithGod Nursery and Primary School is dedicated to providing a
              nurturing and stimulating environment for children to grow
              academically, socially, and spiritually.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-blue-200 hover:text-blue-400 transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-blue-200 hover:text-blue-400 transition-all duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/programs"
                  className="text-blue-200 hover:text-blue-400 transition-all duration-300"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-blue-200 hover:text-blue-400 transition-all duration-300"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-blue-200 hover:text-blue-400 transition-all duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">📍</span>
                <p className="text-blue-200">
                  Oke-Itunu Sango, Ibadan, Nigeria
                </p>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">📞</span>
                <a href="tel:+2348063025700">
                <p className="text-blue-200">+234 806 302 5700</p>
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">📧</span>
                <a href="mailto:adebisi.florence00@gmail.com">
                  <p className="text-blue-200">adebisi.florence00@gmail.com</p>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-200 transition-all duration-300"
              >
                <span className="text-2xl">📘</span>
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-200 transition-all duration-300"
              >
                <span className="text-2xl">📸</span>
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-200 transition-all duration-300"
              >
                <span className="text-2xl">🐦</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 my-8"></div>

        {/* Copyright Section */}
        <div className="text-center text-blue-300">
          <p>
            &copy; {new Date().getFullYear()} WithGod Nursery and Primary
            School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
