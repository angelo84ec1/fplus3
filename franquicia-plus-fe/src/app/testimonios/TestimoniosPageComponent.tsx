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

        <section className="flex flex-col lg:flex-row items-center justify-center gap-8 p-6 bg-gray-100">
          {/* Video 1 */}
          <div className="w-full bg-black lg:w-1/2">
            <iframe
              className="w-full h-64 lg:h-80 rounded-lg shadow-lg"
              src="https://video-websecua.s3.us-east-2.amazonaws.com/fplus/Testimonio+Mochi+Helado+Artesanal+formato+Historia+(SUBIR+PLATAFORMA).mp4"
              title="Testimonio 1"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-white text-center mt-4">
    Testimonio sobre Mochi Helado Artesanal
  </p>
          </div>

          {/* Video 2 */}
          <div className="w-full bg-[#020928] lg:w-1/2">
            <iframe
              className="w-full h-64 lg:h-80 rounded-lg shadow-lg"
              src="https://video-websecua.s3.us-east-2.amazonaws.com/fplus/Testimonio+Nitro+Paradice+(SUBIR+PLATAFORMA).mp4"
              title="Testimonio 2"
              allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-white text-center mt-4">
    Testimonio sobre Nitro Paradice
  </p>
  </div>

            {/* Video 3 */}
            <div className="w-full bg-[#020928] lg:w-1/2">
            <iframe
              className="w-full h-64 lg:h-80 rounded-lg shadow-lg"
              src="https://video-websecua.s3.us-east-2.amazonaws.com/Testimonio+BlackPhone.mp4"
              title="Testimonio 3"
              allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-white text-center mt-4">
    Testimonio sobre BlackPhone
  </p>
          </div>
        </section>
      </main>

      {/* Footer en la parte inferior */}
      <Footer />
    </div>
  );
};

export default TestimoniosPageComponent;

