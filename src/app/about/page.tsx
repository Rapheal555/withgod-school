

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-100 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            About <span className="text-blue-600">WithGod School</span>
          </h1>
          <p className="text-xl text-blue-800">
            Nurturing Young Minds Since 2010
          </p>
        </div>
      </section>
      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/school-building.png"
                alt="School History"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-4 rounded-lg shadow-lg">
                <span className="text-3xl text-white">📜</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-blue-800 mb-6">
                Founded in 2010 in the heart of Oke-Itunu Sango, WithGod School
                began as a small neighborhood preschool. Today, we’ve grown into
                a leading primary institution recognized for our innovative
                approach to early childhood education.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-blue-900 font-semibold">
                  🏆 Awarded "Best Nursery School in Ibadan" 2022-2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Add after Story Section */}
      {/* <div className="mt-12">
        <h3 className="text-2xl text-center font-bold text-blue-900 mb-6">Our Journey</h3>
        <div className="flex justify-center lg:flex-row flex-col space-x-8">
          {[
            { year: 2010, event: "School Founded with 12 Students" },
            { year: 2015, event: "Expanded to Primary Education" },
            { year: 2020, event: "Digital Learning Program Launched" },
          ].map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {item.year}
              </div>
              <div className="ml-6 text-blue-800 text-lg">{item.event}</div>
            </div>
          ))}
        </div>
      </div> */}
      {/* Values Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "❤️",
                title: "Compassion",
                text: "Teaching kindness and empathy through daily interactions",
              },
              {
                icon: "🌟",
                title: "Excellence",
                text: "Encouraging every child to reach their full potential",
              },
              {
                icon: "🤝",
                title: "Community",
                text: "Building strong partnerships with families and neighbors",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-blue-800">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Meet Our Teachers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/images/teacher1.jpg",
                name: "Mrs. Adeola",
                role: "Head of Nursery",
                bio: "15+ years experience in early childhood education",
              },
              {
                img: "/images/teacher2.jpg",
                name: "Mr. Tunde",
                role: "Primary Coordinator",
                bio: "Specialist in STEM education for young learners",
              },
              {
                img: "/images/teacher3.jpg",
                name: "Miss Chioma",
                role: "Creative Arts",
                bio: "Passionate about music and artistic expression",
              },
            ].map((teacher, index) => (
              <div
                key={index}
                className="group relative bg-blue-50 rounded-xl overflow-hidden"
              >
                <img
                  src={teacher.img}
                  alt={teacher.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900">
                    {teacher.name}
                  </h3>
                  <p className="text-blue-600 mb-2">{teacher.role}</p>
                  <p className="text-blue-800">{teacher.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
