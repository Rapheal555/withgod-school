

export default function PrimaryProgram() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-100 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Primary <span className="text-blue-600">Program</span>
          </h1>
          <p className="text-xl text-blue-800">For children aged 5-11 years</p>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                About Our Primary Program
              </h2>
              <p className="text-lg text-blue-800 mb-6">
                Our Primary Program offers a robust curriculum designed to
                prepare students for future academic success. We focus on core
                subjects, creative arts, and character development.
              </p>
              <ul className="text-blue-800 list-disc list-inside mb-6">
                <li>Core subjects: Math, Science, English</li>
                <li>Creative arts and physical education</li>
                <li>Character and moral education</li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all">
                Enroll Now
              </button>
            </div>
            <div>
              <img
                src="/images/primary.jpg"
                alt="Primary Program"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            What Parents Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The Primary Program has been a great foundation for my child's education.",
                name: "Mrs. Chioma",
              },
              {
                quote: "I'm impressed by the focus on character development.",
                name: "Mr. Ahmed",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-blue-800 mb-4">"{testimonial.quote}"</p>
                <p className="text-blue-600 font-semibold">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
