"use client";
import { useState } from "react";
import { StaticImageData } from "next/image";
import portadaNitro from "../../assets/img-franquicias/portada-nitro-paradise.png";
import portadaBlackphone from "../../assets/img-franquicias/portada-blackphone.png";
import portadaItaly from "../../assets/img-franquicias/portada-italy-matriz.png";
import portadaItalychillos from "../../assets/img-franquicias/italy-valle-chillos.png";
import portadamochis from "../../assets/img-franquicias/mochis-franc.png";

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

// Componente para el thumbnail optimizado para móvil
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
    <div className="relative h-48 bg-black overflow-hidden">
      {imageSrc && !imageError ? (
        <img
          src={imageSrc}
          alt="Video thumbnail"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
          <div className="text-white text-3xl font-bold">▶</div>
        </div>
      )}
    </div>
  );
}

export default function TestimonialsPhone() {
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  return (
    <div className="flex flex-col items-center px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
      {/* Título optimizado para móvil */}
      <div className="text-center mb-8">
        <h2
          className="text-3xl font-bold mb-3 tracking-tight"
          style={{ color: "#010c43" }}
        >
          TESTIMONIOS
        </h2>
        <div className="w-20 h-1  bg-[#02C5D5] mx-auto rounded-full"></div>
        <p className="mt-3 text-gray-600 text-sm px-4">
          LO QUE OPINAN NUESTROS CLIENTES  </p>
      </div>

      {/* Contenedor de los videos en columna para móvil */}
      <div className="flex flex-col gap-6 w-full max-w-md">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="group relative cursor-pointer active:scale-95 transition-transform duration-200"
            onClick={() =>
              setSelectedVideo({ url: item.videoUrl, title: item.title })
            }
          >
            {/* Card optimizada para móvil */}
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              {/* Thumbnail con imagen o gradiente */}
              <div className="relative">
                <VideoThumbnail 
                  gradient={item.gradient}
                  thumbnailImage={item.thumbnailImage}
                />
                
                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-95 shadow-lg">
                    <svg
                      className="w-8 h-8 text-gray-800 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Información del testimonio */}
              <div className="bg-white p-4">
                <h3 className="text-xl font-bold mb-1 text-gray-800">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de video optimizado para móvil */}
      {selectedVideo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 p-3 animate-fadeIn"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative bg-gray-900 rounded-xl w-full max-w-lg shadow-2xl animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal compacto */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h3 className="text-lg font-bold text-white truncate pr-2">
                {selectedVideo.title}
              </h3>
              <button
                className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-red-500 active:bg-red-600 text-white transition-colors"
                onClick={() => setSelectedVideo(null)}
                aria-label="Cerrar video"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Reproductor de video */}
            <div className="p-3">
              <video
                className="w-full aspect-video rounded-lg shadow-lg"
                src={selectedVideo.url}
                controls
                autoPlay
                playsInline
                controlsList="nodownload"
                preload="metadata"
              />
            </div>

            {/* Instrucción para cerrar */}
            <div className="p-3 text-center">
              <p className="text-xs text-gray-400">
                Toca fuera del video para cerrar
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}