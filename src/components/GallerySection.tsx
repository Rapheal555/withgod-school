"use client";
import { useState } from "react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/images/kids-playing.jpg", alt: "Kids Playing" },
    { src: "/images/classroom.jpg", alt: "Classroom" },
    { src: "/images/school-building.jpg", alt: "School Building" },
    { src: "/images/uniform-blue.jpg", alt: "School Uniform" },
    { src: "/images/3d-anime-character.png", alt: "3D Anime Character" },
    { src: "/images/art-class.jpg", alt: "Art Class" },
  ];

  const openImage = (src: any) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
          Our <span className="text-blue-600">Gallery</span>
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => openImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-2xl">🔍</span>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeImage}
          >
            <div className="bg-white rounded-2xl max-w-3xl max-h-full overflow-auto">
              <img
                src={selectedImage}
                alt="Enlarged"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}

        {/* Call-to-Action */}
        <div className="mt-12 text-center">
          <p className="text-xl text-blue-800 mb-6">
            Want to see more? Visit our school to experience the WithGod
            difference!
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
            Schedule a Visit
          </button>
        </div>
      </div>
    </section>
  );
}
