'use client'
import { useState } from "react";


export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    // { src: "/images/liberty.jpg", alt: "Kids Playing" },
    { src: "/images/fishery-2023.jpg", alt: "" },
    { src: "/images/ciltural-center-2022.jpg", alt: "" },
    { src: "/images/nihort.jpg", alt: "" },
    { src: "/images/liberty.jpg", alt: "" },
    { src: "/images/tribune-2019.jpg", alt: "Classroom" },
    { src: "/images/seven-up-2018.jpg", alt: "School Building" },
    { src: "/images/amusement-park-2016.jpg", alt: "School Uniform" },
    { src: "/images/evans-2014.jpg", alt: "3D Anime Character" },
    { src: "/images/airport-2010.jpg", alt: "Art Class" },
  ];
  const openImage = (src:any) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
   

      {/* Hero Section */}
      <section className="bg-blue-100 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Our <span className="text-blue-600">Gallery</span>
          </h1>
          <p className="text-xl text-blue-800">
            A Glimpse into Life at WithGod School
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
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
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeImage}
        >
          <div className="bg-white rounded-lg max-w-3xl max-h-full overflow-auto">
            <img src={selectedImage} alt="Enlarged" className="w-full h-auto" />
          </div>
        </div>
      )}

      {/* Call-to-Action Banner */}
      <section className="bg-blue-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Want to See More?
          </h2>
          <p className="text-blue-200 mb-8">
            Visit our school to experience the WithGod difference firsthand!
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition-all"
          >
            Schedule a Visit
          </a>
        </div>
      </section>

      
    </div>
  );
}
