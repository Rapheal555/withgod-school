

export default function NurseryProgram() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-100 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Nursery <span className="text-blue-600">Program</span>
          </h1>
          <p className="text-xl text-blue-800">For children aged 2-4 years</p>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                About Our Nursery Program
              </h2>
              <p className="text-lg text-blue-800 mb-6">
                Our Nursery Program is designed to provide a nurturing and
                stimulating environment for young learners. Through play-based
                activities, we focus on developing social, emotional, and
                cognitive skills.
              </p>
              <ul className="text-blue-800 list-disc list-inside mb-6">
                <li>Interactive learning activities</li>
                <li>Social and emotional development</li>
                <li>Introduction to basic literacy and numeracy</li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all">
                Enroll Now
              </button>
            </div>
            <div>
              <img
                src="/images/nursery.jpg"
                alt="Nursery Program"
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
                  "My child loves going to school every day! The teachers are amazing.",
                name: "Mrs. Adeola",
              },
              {
                quote:
                  "The Nursery Program has helped my child develop so much socially.",
                name: "Mr. Tunde",
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
