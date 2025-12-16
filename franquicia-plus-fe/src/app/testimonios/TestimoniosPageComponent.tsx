"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import bannerPc from "@/assets/img-franquicias/Group-test.png";
import bannerPhone from "@/assets/img-franquicias/Group-testphone.png";
import portadaNitro from "@/assets/img-franquicias/portada-nitro-paradise.png";
import portadaBlackphone from "@/assets/img-franquicias/portada-blackphone.png";
import portadaItaly from "@/assets/img-franquicias/portada-italy-matriz.png";
import portadaItalychillos from "@/assets/img-franquicias/italy-valle-chillos.png";
import portadamochis from "@/assets/img-franquicias/mochis-franc.png";
import Image from "next/image";
import React, { useState } from "react";
import { StaticImageData } from "next/image";

// Lista de testimonios con videos de Amazon S3
const testimonials = [
  {
    id: 1,
    title: "Nitro Paradice",
    description: "Somos el Bubble Tea, Helado y Café del futuro basado en el nitrógeno como elemento principal con una experiencia familiar y divertida.",
    videoUrl:
      "https://video-websecua.s3.us-east-2.amazonaws.com/fplus/Testimonio+NitroParadice+(Reemplazar+por+el+Antiguo).mp4",
    gradient: "from-purple-500 to-pink-500",
    thumbnailImage: portadaNitro,
  },
  {
    id: 2,
    title: "BlackPhone",
    description: "Venta de productos Apple Open Box, Trade-In y accesorios, ofreciendo garantía de 2 años y experiencia de compra premium en Ecuador.",
    videoUrl:
      "https://video-websecua.s3.us-east-2.amazonaws.com/fplus/Testimonio+BlackPhone+(1).mp4",
    gradient: "from-gray-700 to-gray-900",
    thumbnailImage: portadaBlackphone,
  },
  {
    id: 3,
    title: "Little Italy",
    description: "La mejor calidad de pizzas en Horno de Leña, con la elaboración del producto frente a cada cliente en un ambiente muy italiano.",
    videoUrl:
      "https://video-websecua.s3.us-east-2.amazonaws.com/fplus/Testimonio+Little+Italy.mp4",
    gradient: "from-green-500 to-emerald-600",
    thumbnailImage: portadaItaly,
  },
  {
    id: 4,
    title: "Little Italy Chillos",
    description: "La mejor calidad de pizzas en Horno de Leña, con la elaboración del producto frente a cada cliente en un ambiente muy italiano.",
    videoUrl:
      "https://video-websecua.s3.us-east-2.amazonaws.com/fplus/Testimonio+Franquiciado+Little+Italy+Los+Chillos.mp4",
    gradient: "from-green-500 to-emerald-600",
    thumbnailImage: portadaItalychillos,
  },
  {
    id: 5,
    title: "Mochi Helado Artesanal",
    description: "Manufactura y venta al por menor y mayor de mochis rellenos de helado artesanal.",
    videoUrl:
      "https://video-websecua.s3.us-east-2.amazonaws.com/fplus/Testimonio+Mochi+Helado+Artesanal+(formato+historia).mp4",
    gradient: "from-blue-500 to-purple-600",
    thumbnailImage: portadamochis,
  },
];

// Componente para el thumbnail
function VideoThumbnail({ 
  gradient, 
  thumbnailImage 
}: { 
  gradient: string;
  thumbnailImage?: string | StaticImageData;
}) {
  const [imageError, setImageError] = useState(false);

  const imageSrc = typeof thumbnailImage === 'string' 
    ? thumbnailImage 
    : thumbnailImage?.src;

  return (
    <div className="relative aspect-video bg-black overflow-hidden">
      {imageSrc && !imageError ? (
        <img
          src={imageSrc}
          alt="Video thumbnail"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
          <div className="text-white text-4xl font-bold">▶</div>
        </div>
      )}
    </div>
  );
}

const TestimoniosPageComponent: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar en la parte superior */}
      <Navbar />

      {/* Contenido principal */}
      <main className="w-screen lg:w-full">
        <section>
          <div className="lg:h-[20em] h-[200px] w-full relative flex justify-end">
            <div className="w-full h-full lg:flex hidden">
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                alt=""
                src={bannerPc}
                className="images"
              />
            </div>
            <div className="w-screen h-full lg:hidden flex">
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                alt=""
                src={bannerPhone}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              style={{ fontFamily: "Mukata Mahee Bold" }}
              className="absolute top-0 bottom-0 lg:left-1/2 right-1/2 flex justify-center items-center text-white lg:text-5xl text-3xl"
            >
              TESTIMONIOS
            </div>
          </div>
        </section>

        <section className="py-12 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto">
            {/* Título de la sección */}
            <div className="text-center mb-12">
              <h2 
                style={{ fontFamily: "Mukata Mahee Bold" }}
                className="text-3xl lg:text-4xl text-gray-800 mb-3"
              >
                LO QUE OPINAN NUESTROS CLIENTES 
              </h2>
              <div className="w-24 h-1 bg-[#02C5D5] mx-auto rounded-full"></div>
              <p className="text-gray-600 text-lg mt-4">
              CONOCE LAS EXPERIENCIAS DE QUIÉNES CONFIAN EN NOSOTROS.
              </p>
            </div>

            {/* Grid de videos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="group relative cursor-pointer"
                  onClick={() =>
                    setSelectedVideo({ url: item.videoUrl, title: item.title })
                  }
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl">
                    {/* Thumbnail */}
                    <div className="relative">
                      <VideoThumbnail 
                        gradient={item.gradient}
                        thumbnailImage={item.thumbnailImage}
                      />
                      
                      {/* Overlay */}
                      <div
                        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                          hoveredId === item.id ? "bg-opacity-30" : "bg-opacity-40"
                        }`}
                      ></div>
                      
                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-white transition-all duration-300 ${
                            hoveredId === item.id
                              ? "scale-110 bg-opacity-100"
                              : "bg-opacity-90"
                          }`}
                        >
                          <svg
                            className="w-10 h-10 text-gray-800 ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="bg-white p-6">
                      <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-[#02C5D5] transition-colors">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      )}
                      
                      <div className="mt-4 flex items-center text-[#02C5D5] font-medium text-sm">
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          Ver testimonio
                        </span>
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-5xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h3 className="text-2xl font-bold text-white">
                {selectedVideo.title}
              </h3>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all duration-200 hover:scale-110"
                onClick={() => setSelectedVideo(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <video
                className="w-full aspect-video rounded-xl shadow-lg"
                src={selectedVideo.url}
                controls
                autoPlay
                controlsList="nodownload"
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer en la parte inferior */}
      <Footer />
    </div>
  );
};

export default TestimoniosPageComponent;