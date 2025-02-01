'use client'
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
     

      {/* Hero Section */}
      <section className="bg-blue-100 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-xl text-blue-800">
            We're here to answer your questions!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  📍 Visit Us
                </h2>
                <div className="space-y-4">
                  <p className="text-blue-800 text-lg">
                    WithGod Nursery and Primary School
                    <br />
                    Oke-Itunu Sango, Ibadan
                    <br />
                    Oyo State, Nigeria
                  </p>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📞</span>
                    <a
                      href="tel:+2341234567890"
                      className="text-blue-800 text-lg hover:text-blue-600"
                    >
                      +234 123 456 7890
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📧</span>
                    <a
                      href="mailto:info@withgodschool.com"
                      className="text-blue-800 text-lg hover:text-blue-600"
                    >
                      info@withgodschool.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-blue-50 p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  ⏰ Office Hours
                </h2>
                <div className="space-y-2 text-blue-800">
                  <p>Monday-Friday: 7:30 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-blue-50 p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  💬 Follow Us
                </h2>
                <div className="flex space-x-6">
                  {[
                    { icon: "📘", label: "Facebook", url: "#" },
                    { icon: "📸", label: "Instagram", url: "#" },
                    { icon: "🐦", label: "Twitter", url: "#" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="text-3xl text-blue-600 hover:text-blue-700 transition-all"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">
                📩 Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-blue-900 text-lg mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg border border-blue-200 focus:outline-none focus:border-blue-500"
                    placeholder="John Adebayo"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-blue-900 text-lg mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 rounded-lg border border-blue-200 focus:outline-none focus:border-blue-500"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-blue-900 text-lg mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg border border-blue-200 focus:outline-none focus:border-blue-500"
                    placeholder="Admission Inquiry"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-blue-900 text-lg mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full p-3 rounded-lg border border-blue-200 focus:outline-none focus:border-blue-500 h-40"
                    placeholder="Your message here..."
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.09150317559!2d3.896385815355766!3d7.544240812692796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzInMzkuMyJOIDPCsDU0JzAxLjQiRQ!5e0!3m2!1sen!2sng!4v1624456789012!5m2!1sen!2sng"
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

      {/* CTA Banner */}
      <section className="bg-blue-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Visit Us?
          </h2>
          <p className="text-blue-200 mb-8">
            Schedule a school tour and experience our nurturing environment
            firsthand!
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition-all"
          >
            Book a Tour
          </a>
        </div>
      </section>

   
    </div>
  );
}
