"use client";
import { useState } from "react";

// Lista de testimonios con videos de Amazon S3
const testimonials = [
  {
    id: 1,
    title: "Nitro Paradice",
    description: "Una experiencia única de emprendimiento exitoso",
    videoUrl:
      "https://video-websecua.s3.us-east-2.amazonaws.com/fplus/Testimonio+NitroParadice+(Reemplazar+por+el+Antiguo).mp4",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "BlackPhone",
    description: "Innovación y éxito en el sector tecnológico",
    videoUrl:
      "https://video-websecua.s3.us-east-2.amazonaws.com/fplus/Testimonio+BlackPhone+(1).mp4",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    id: 3,
    title: "Little Italy",
    description: "Sabor auténtico italiano en cada bocado",
    videoUrl:
      "https://video-websecua.s3.us-east-2.amazonaws.com/fplus/Testimonio+Little+Italy.mp4",
    gradient: "from-green-500 to-emerald-600",
  },
];

export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center px-6 py-16 bg[-gradient-to-b from-gray-50 to-white]">
      {/* Título mejorado */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
          style={{ color: "#010c43" }}
        >
          TESTIMONIOS
        </h2>
        <div className="w-24 h-1 bg-[#02C5D5] mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 text-lg">
          Historias de éxito de nuestros franquiciados
        </p>
      </div>

      {/* Contenedor de los videos en 3 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
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
            {/* Card con efecto de elevación */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl">
              {/* Thumbnail con gradiente */}
              <div
                className={`relative h-64 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
              >
                {/* Play button animado */}
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                    hoveredId === item.id ? "bg-opacity-30" : "bg-opacity-40"
                  }`}
                ></div>
                
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

                {/* Efecto de brillo en hover */}
                {hoveredId === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
                )}
              </div>

              {/* Información del testimonio */}
              <div className="bg-white p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-[#02C5D5] transition-colors">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                )}
                
                {/* Indicador de "Ver video" */}
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

      {/* Modal de video mejorado */}
      {selectedVideo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-5xl w-full shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h3 className="text-2xl font-bold text-white">
                {selectedVideo.title}
              </h3>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all duration-200 hover:scale-110"
                onClick={() => setSelectedVideo(null)}
                aria-label="Cerrar video"
              >
                <svg
                  className="w-6 h-6"
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

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}