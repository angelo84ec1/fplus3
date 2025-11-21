"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import bannerPc from "@/assets/img-franquicias/Group-test.png";
import bannerPhone from "@/assets/img-franquicias/Group-testphone.png";
import Image from "next/image";
import React from "react";

const TestimoniosPageComponent: React.FC = () => {
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
            <div className="text-center mb-10">
              <h2 
                style={{ fontFamily: "Mukata Mahee Bold" }}
                className="text-3xl lg:text-4xl text-gray-800 mb-3"
              >
                Lo que dicen nuestros franquiciados
              </h2>
              <p className="text-gray-600 text-lg">
                Conoce las experiencias reales de quienes confian en nosotros
              </p>
            </div>

            {/* Grid de videos - 2 columnas en desktop, 1 en mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Video 1 */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://video-websecua.s3.us-east-2.amazonaws.com/fplus/Testimonio+Mochi+Helado+Artesanal+(formato+historia).mp4"
                    title="Testimonio Mochi Helado Artesanal"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-5 bg-white">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Mochi Helado Artesanal
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Descubre cómo transformaron su negocio con nuestra franquicia
                  </p>
                </div>
              </div>

              {/* Video 2 */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://video-websecua.s3.us-east-2.amazonaws.com/fplus/Testimonio+NitroParadice+(Reemplazar+por+el+Antiguo).mp4"
                    title="Testimonio Nitro Paradice"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-5 bg-white">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Nitro Paradice
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Una experiencia única de emprendimiento exitoso
                  </p>
                </div>
              </div>

              {/* Video 3 */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://video-websecua.s3.us-east-2.amazonaws.com/fplus/Testimonio+BlackPhone+(1).mp4"
                    title="Testimonio BlackPhone"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-5 bg-white">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    BlackPhone
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Innovación y éxito en el sector tecnológico
                  </p>
                </div>
              </div>

              {/* Video 4 */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative bg-gradient-to-br from-red-600 to-orange-600 aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://video-websecua.s3.us-east-2.amazonaws.com/fplus/Testimonio+Little+Italy.mp4"
                    title="Testimonio Little Italy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-5 bg-white">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Little Italy
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sabor auténtico italiano en cada bocado
                  </p>
                </div>
              </div>

              {/* Video 5 */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative bg-gradient-to-br from-green-600 to-emerald-600 aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://video-websecua.s3.us-east-2.amazonaws.com/fplus/Testimonio+Franquiciado+Little+Italy+Los+Chillos.mp4"
                    title="Testimonio Little Italy Los Chillos"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-5 bg-white">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Little Italy Los Chillos
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Éxito comprobado en Los Chillos con nuestra franquicia
                  </p>
                </div>
              </div>
            </div>

      
          </div>
        </section>
      </main>

      {/* Footer en la parte inferior */}
      <Footer />
    </div>
  );
};

export default TestimoniosPageComponent;