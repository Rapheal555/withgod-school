export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
          About <span className="text-blue-600">WithGod</span> School
        </h2>

        {/* Grid Layout for Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image */}
          <div className="relative">
            <img
              src="/images/school-building.png"
              alt="School Building"
              className="rounded-2xl shadow-2xl"
            />
            {/* Fun Overlay Element */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 p-4 rounded-2xl shadow-lg">
              <span className="text-white text-2xl">🏫</span>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-blue-800 mb-6">
              At WithGod Nursery and Primary School, we are committed to
              providing a nurturing and stimulating environment where children
              can grow academically, socially, and spiritually. Our mission is
              to empower every child to reach their full potential in a safe and
              loving atmosphere.
            </p>

            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Why Choose Us?
            </h3>
            <ul className="text-lg text-blue-800 list-disc list-inside space-y-4">
              <li>
                Experienced and caring teachers dedicated to your child's
                success.
              </li>
              <li>
                A holistic curriculum that balances academics, creativity, and
                character development.
              </li>
              <li>
                State-of-the-art facilities designed for a fun and engaging
                learning experience.
              </li>
              <li>
                A strong focus on moral and spiritual values to guide your
                child's growth.
              </li>
            </ul>

            {/* Fun Fact Section */}
            <div className="mt-8 p-6 bg-blue-100 rounded-2xl">
              <p className="text-blue-900 text-lg">
                <span className="font-bold">Fun Fact:</span> Our school uniform
                is a beautiful shade of blue, symbolizing trust, wisdom, and
                confidence! 🎨
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 bg-blue-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            What Parents Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-blue-800 mb-4">
                "WithGod School has been a blessing for our family. The teachers
                are amazing, and my child loves going to school every day!"
              </p>
              <p className="text-blue-600 font-semibold">— Mrs. Adeola</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-blue-800 mb-4">
                "The school's focus on character development is truly
                commendable. I can see positive changes in my child's behavior."
              </p>
              <p className="text-blue-600 font-semibold">— Mr. Tunde</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
