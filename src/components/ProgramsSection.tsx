export default function ProgramsSection() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
          Our <span className="text-blue-600">Programs</span>
        </h2>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Nursery Program Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <span className="text-6xl text-blue-600">👶</span>
              <h3 className="text-2xl font-bold text-blue-900 mt-4">
                Nursery Program
              </h3>
              <p className="text-lg text-blue-800 mt-2">
                For children aged 2-4 years, our nursery program focuses on
                early childhood development through play-based learning.
              </p>
              <ul className="text-blue-800 list-disc list-inside mt-4 space-y-2">
                <li>Interactive learning activities</li>
                <li>Social and emotional development</li>
                <li>Introduction to basic literacy and numeracy</li>
              </ul>
              <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Primary Program Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <span className="text-6xl text-blue-600">🧒</span>
              <h3 className="text-2xl font-bold text-blue-900 mt-4">
                Primary Program
              </h3>
              <p className="text-lg text-blue-800 mt-2">
                For children aged 5-11 years, our primary program offers a
                robust curriculum designed to prepare students for future
                academic success.
              </p>
              <ul className="text-blue-800 list-disc list-inside mt-4 space-y-2">
                <li>Core subjects: Math, Science, English</li>
                <li>Creative arts and physical education</li>
                <li>Character and moral education</li>
              </ul>
              <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* After-School Care Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <span className="text-6xl text-blue-600">🏫</span>
              <h3 className="text-2xl font-bold text-blue-900 mt-4">
                After-School Care
              </h3>
              <p className="text-lg text-blue-800 mt-2">
                We provide a safe and engaging environment for children after
                school hours, with activities and supervision.
              </p>
              <ul className="text-blue-800 list-disc list-inside mt-4 space-y-2">
                <li>Homework assistance</li>
                <li>Recreational activities</li>
                <li>Snacks and rest time</li>
              </ul>
              <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Call-to-Action Banner */}
        <div className="mt-16 bg-blue-600 p-8 rounded-2xl text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Enroll Your Child?
          </h3>
          <p className="text-lg text-blue-100 mb-6">
            Give your child the best start in life with our comprehensive
            programs. Contact us today to schedule a visit!
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
