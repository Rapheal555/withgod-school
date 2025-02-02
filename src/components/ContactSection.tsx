export default function ContactSection() {
  return (
    <section className="py-20 bg-blue-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
          Contact <span className="text-blue-600">Us</span>
        </h2>

        {/* Contact Information and Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Contact Information */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Get in Touch
            </h3>
            <p className="text-lg text-blue-800 mb-6">
              We'd love to hear from you! Reach out to us for inquiries, visits,
              or enrollment.
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-blue-600 text-2xl mr-4">📍</span>
                <p className="text-blue-800">
                  Oke-Itunu Sango, Ibadan, Nigeria
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 text-2xl mr-4">📞</span>
                <a href="tel:+2348063025700">
                  <p className="text-blue-800">+234 806 302 5700</p>
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 text-2xl mr-4">📧</span>
                <a href="mailto:adebisi.florence00@gmail.com">
                  <p className="text-blue-800">adebisi.florence00@gmail.com</p>
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-blue-900 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 transition-all duration-300"
                >
                  <span className="text-3xl">📘</span>
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 transition-all duration-300"
                >
                  <span className="text-3xl">📸</span>
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 transition-all duration-300"
                >
                  <span className="text-3xl">🐦</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-lg text-blue-800 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-blue-200 rounded-2xl focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-lg text-blue-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-blue-200 rounded-2xl focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-lg text-blue-800 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full p-3 border border-blue-200 rounded-2xl focus:outline-none focus:border-blue-500"
                  rows={5}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Call-to-Action Banner */}
        <div className="mt-16 bg-blue-600 p-8 rounded-2xl text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Enroll Your Child?
          </h3>
          <p className="text-lg text-blue-100 mb-6">
            Give your child the best start in life. Contact us today to schedule
            a visit or enroll!
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300">
            Get Started
          </button>
        </div>
        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d532.2631265421571!2d3.8895684584565138!3d7.4195755577756515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1738521290093!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="School Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
