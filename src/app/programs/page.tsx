

export default function ProgramsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-100 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Our <span className="text-blue-600">Programs</span>
          </h1>
          <p className="text-xl text-blue-800">
            Building a Strong Foundation for Lifelong Learning
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "👶",
                title: "Nursery Program",
                description:
                  "For children aged 2-4 years, focusing on early childhood development through play-based learning.",
                features: [
                  "Interactive learning",
                  "Social skills",
                  "Basic literacy & numeracy",
                ],
                link: "/programs/nursery",
              },
              {
                icon: "🧒",
                title: "Primary Program",
                description:
                  "For children aged 5-11 years, offering a robust curriculum to prepare students for academic success.",
                features: [
                  "Core subjects",
                  "Creative arts",
                  "Character education",
                ],
                link: "/programs/primary",
              },
              {
                icon: "🏫",
                title: "After-School Care",
                description:
                  "A safe and engaging environment for children after school hours, with activities and supervision.",
                features: [
                  "Homework help",
                  "Recreational activities",
                  "Snacks provided",
                ],
                link: "/programs/after-school",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl mb-6">{program.icon}</div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  {program.title}
                </h2>
                <p className="text-blue-800 mb-6">{program.description}</p>
                <ul className="text-blue-800 list-disc list-inside mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a
                  href={program.link}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Program Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-blue-200">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-3 px-4 text-left">Program</th>
                  <th className="py-3 px-4 text-left">Age Group</th>
                  <th className="py-3 px-4 text-left">Focus Areas</th>
                  <th className="py-3 px-4 text-left">Hours</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    program: "Nursery",
                    age: "2-4 years",
                    focus: "Play-based learning, social skills",
                    hours: "8:00 AM - 12:00 PM",
                  },
                  {
                    program: "Primary",
                    age: "5-11 years",
                    focus: "Core subjects, creative arts",
                    hours: "8:00 AM - 2:00 PM",
                  },
                  {
                    program: "After-School",
                    age: "5-11 years",
                    focus: "Homework help, recreational activities",
                    hours: "2:00 PM - 5:00 PM",
                  },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-blue-200">
                    <td className="py-3 px-4 text-blue-900 font-semibold">
                      {row.program}
                    </td>
                    <td className="py-3 px-4 text-blue-800">{row.age}</td>
                    <td className="py-3 px-4 text-blue-800">{row.focus}</td>
                    <td className="py-3 px-4 text-blue-800">{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Why Choose WithGod School?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="/images/classroom.jpg"
                alt="Classroom"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <ul className="text-blue-800 space-y-6">
                <li className="flex items-center">
                  <span className="text-3xl mr-4">👩‍🏫</span>
                  <div>
                    <h3 className="text-xl font-bold">Experienced Teachers</h3>
                    <p>
                      Our staff are highly trained and passionate about early
                      childhood education.
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="text-3xl mr-4">📚</span>
                  <div>
                    <h3 className="text-xl font-bold">Holistic Curriculum</h3>
                    <p>
                      We balance academics, creativity, and character
                      development.
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="text-3xl mr-4">🏆</span>
                  <div>
                    <h3 className="text-xl font-bold">Proven Results</h3>
                    <p>
                      Our students consistently excel in academics and
                      extracurriculars.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="bg-blue-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Enroll Your Child?
          </h2>
          <p className="text-blue-200 mb-8">
            Give your child the best start in life. Contact us today to schedule
            a visit or enroll!
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition-all"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
