"use client";
import { useState } from "react";
import Image from "next/image";
import pc1 from "../../assets/img-franquicias/img_video_testimonios.png";

// Lista de testimonios con videos de Amazon S3
const testimonials = [
  {
    id: 1,
    img: pc1,
    videoUrl:
      "https://video-websecua.s3.us-east-2.amazonaws.com/fplus/Testimonio+Mochi+Helado+Artesanal+formato+Historia+(SUBIR+PLATAFORMA).mp4",
  },
  {
    id: 2,
    img: pc1,
    videoUrl:
      "https://video-websecua.s3.us-east-2.amazonaws.com/fplus/Testimonio+Nitro+Paradice+(SUBIR+PLATAFORMA).mp4",
  },
];

export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center p-6">
      {/* Título con color #232c4d */}
      <h2 className="text-4xl font-bold mb-6" style={{ color: "#010c43" }}>
        TESTIMONIOS
      </h2>

      {/* Contenedor de las imágenes en dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => setSelectedVideo(item.videoUrl)}
          >
            <Image
              src={item.img}
              alt={`Testimonio ${item.id}`}
              width={300}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Modal de video (centrado y encima de todo) */}
      {selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-2xl w-full">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={() => setSelectedVideo(null)}
            >
              ✖
            </button>

            {/* Reproductor de video para Amazon S3 */}
            <video
              className="w-full aspect-video rounded-lg"
              src={selectedVideo}
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </div>
  );
}

