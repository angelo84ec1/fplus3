"use client";
import BannerHome from "@/components/Home/BannerHome";
import ChatBot from "@/components/ChatBot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCellsLarge,
  faUtensils,
  faCapsules,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import downArrow from "@/assets/img/flecha-hacia-abajo-para-navegar.png";
import HomeCarouselPhone from "@/components/Home/HomeCarouselPhone";
import HomeCarouselPc from "@/components/Home/HomeCarouselPc";
import RecommendedCategories from "@/components/Home/RecommendedCategories";
import BlogsHome from "@/components/Home/BlogsHome";
import PublicityComponent from "@/components/PublicityComponent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Marcas } from "@/types/Marcas";
import MarcaCard from "../Marca/MarcaCard";
import { CgSpinnerTwoAlt } from "react-icons/cg";

interface props {
  popBrands: Marcas;
  Brands: Marcas;
}
const HomePageComponent = ({ popBrands, Brands }: props) => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [popularBrands, setPopularBrands] = useState(popBrands);
  const [newBrands, setNewBrands] = useState(Brands);
  const [categories] = useState([
    { id: "Todo", value: "Todo", icon: faTableCellsLarge },
    { id: "Restaurantes", value: "Restaurantes", icon: faUtensils },
    { id: "Farmacias", value: "Farmacias", icon: faCapsules },
    { id: "Servicios", value: "Servicios", icon: faBriefcase },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("Todo");
  const [selectedTipo, setselectedTipo] = useState("");
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY > 100 &&
        window.scrollY <
          document.documentElement.scrollHeight - window.innerHeight - 100
      ) {
        setIsAtBottom(false);
      } else {
        setIsAtBottom(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const scrollSearchBox = () => {
    const searchBox = document.getElementById("searchBox");
    searchBox?.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  const getPopularBrands = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/marcas/?page_size=99&estado__nombre=Premium&tipo=${selectedTipo}`;
      const response = await fetch(url);

      if (response.status > 400) throw new Error("Status code err");
      let data = await response.json();
      setPopularBrands(data);
    } catch (e: any) {
      return null;
    }
  };

  const getNewBrands = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/marcas/?page_size=99&estado__nombre=Nuevo&tipo=${selectedTipo}`;
      const response = await fetch(url);

      if (response.status > 400) throw new Error("Status code err");
      let data = await response.json();
      setNewBrands(data);
    } catch (e: any) {
      return null;
    }
  };

  const onChangeTipo = (tipo: any) => {
    setLoading(true);
    setselectedTipo(tipo);
  };

  useEffect(() => {
    const runUpdate = async () => {
      await getPopularBrands();
      await getNewBrands();
    }
    runUpdate().then(() => {
      console.log("updated");
      setLoading(false);
    });
  }, [selectedTipo]);

  return (
    <>
      <main>
        <section>
          <Navbar />
        </section>
        <BannerHome onChangeTipo={onChangeTipo} />
        {loading ? (
          <section>
            <div className="bg-[#0d132f] h-20 z-[1] relative" />
            <div className="h-full min-h-[60vh] w-full flex justify-center items-center">
              <div
                style={{ fontFamily: "Mukata Mahee Bold" }}
                className="text-[#fa5e4d] text-9xl animate-spin"
              >
                <CgSpinnerTwoAlt />
              </div>
            </div>
          </section>
        ) : (
          <section className="pt-8 lg:pt-12 flex justify-center w-full relative">
            <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] w-full px-4">
              {/* Título principal */}
              <div className="flex flex-wrap mb-8 lg:mb-10">
                <div className="w-full text-center">
                  <p
                    className="text-3xl sm:text-4xl lg:text-5xl mb-4 mt-8"
                    data-aos="fade-down"
                    data-aos-delay="100"
                    style={{
                      fontFamily: "Mukata Mahee Extra Bold",
                    }}
                  >
                    Encuentra tu Negocio
                  </p>
                  <div className="w-full flex justify-center">
                    <p
                      className="text-sm sm:text-base lg:text-lg w-full sm:w-[85%] lg:w-full px-4 lg:px-0"
                      data-aos="fade-down"
                      data-aos-delay="300"
                      style={{
                        color: "#9f9c9d",
                        fontFamily: "Mukata Mahee Regular",
                        lineHeight: "1.875em",
                      }}
                    >
                      Invierte en una empresa de éxito y se parte de un equipo
                      ganador
                    </p>
                  </div>
                </div>
              </div>

              {/* Categorías y marcas */}
              <div className="w-full flex justify-center">
                <div className="w-full lg:w-full">
                  {/* Tabs de categorías */}
                  <div className="border-b mb-6">
                    <ul className="flex justify-center gap-2 flex-wrap">
                      {categories.map((category) => (
                        <li
                          onChange={() => handleCategoryChange(category.value)}
                          key={category.id}
                          className={`${
                            selectedCategory === category.value
                              ? "text-[#CC4B3D]"
                              : "text-[#0d132f]"
                          } opcion flex hover:text-[#CC4B3D] cursor-pointer`}
                        >
                          <label
                            className="border-0 text-xs sm:text-sm lg:text-base px-3 lg:px-10 py-2 gap-1 flex justify-center items-center cursor-pointer"
                            htmlFor={category.id}
                          >
                            <FontAwesomeIcon icon={category.icon} className="text-sm lg:text-base" />
                            <span className="whitespace-nowrap">{category.value}</span>
                          </label>
                          <input
                            id={category.id}
                            type="radio"
                            name="categories"
                            value={category.value}
                            className="categoriesHome"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Grid de marcas */}
                  <div className="flex flex-wrap mb-8 lg:mb-12">
                    {popularBrands.results.map((marca, index) => {
                      if (
                        selectedCategory === "Todo" ||
                        selectedCategory === marca.categoria.nombre
                      ) {
                        return <MarcaCard marca={marca} key={index} />;
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sección de video - 100% horizontal, sin espacios */}
        <section className="w-full leading-none">
          <a
            href="https://experiencia.escala.com/escala-franquiciaplus"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full leading-none"
          >
            <video
              className="w-full h-auto object-contain block bg-white m-0 leading-none"
              loop
              autoPlay
              preload="auto"
              muted
              playsInline
            >
              <source type="video/mp4" src="/video.mp4" />
            </video>
          </a>
        </section>

        {/* Sección de nuevas franquicias */}
        <section className="text-white pt-12 lg:pt-16 pb-12 lg:pb-16 flex justify-center gradientHomeBg w-full">
          <div className="sm:max-w-[540px] md:max-w-[1100px] lg:max-w-[1800px] xl:max-w-[1300px] 2xl:max-w-[1200px] w-full flex items-center flex-col px-4">
            <div className="flex flex-col mb-8 lg:mb-12 text-center gap-3 lg:gap-2">
              <div
                style={{ fontFamily: "Mukata Mahee Bold" }}
                className="text-3xl sm:text-4xl lg:text-[2.5em]"
              >
                Encuentra más franquicias
              </div>
              <div className="text-base sm:text-lg lg:text-[1em] px-4">
                Sé el primero en soñar y aprovecha los beneficios de negocios
                rentables.
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="w-full">
                <div className="flex flex-wrap mb-8 lg:mb-10">
                  {newBrands.results.map((marca, index) => (
                    <MarcaCard marca={marca} key={index} />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <button
                onClick={scrollSearchBox}
                className="cursor-pointer px-8 sm:px-12 lg:px-16 py-3 lg:py-4 rounded-2xl border-2 border-transparent hover:border-[#fa5e4d] hover:text-[#fa5e4d] text-lg sm:text-xl lg:text-2xl bg-[#02C5D5] flex justify-center items-center text-black no-underline transition-all duration-300 font-medium"
              >
                Buscar más categorías
              </button>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section>
          <div className="block lg:hidden">
            <HomeCarouselPhone />
          </div>
          <div className="hidden lg:block">
            <HomeCarouselPc />
          </div>
        </section>
        
        {/* Categorías recomendadas */}
        <section>
          <RecommendedCategories />
        </section>
        
        {/* Blogs */}
        <section>
          <BlogsHome />
        </section>
        
        {/* Publicidad */}
        <section>
          <PublicityComponent />
        </section>
        
        {/* Footer */}
        <section>
          <Footer />
        </section>
      </main>
      <ChatBot />
      <div
        className={`fixed bottom-2 left-0 right-0 ${
          isAtBottom ? "hidden" : "flex"
        } justify-center z-30`}
      >
        <div className="animate-bounce lg:h-[10vh] h-[5vh]">
          <Image
            unoptimized
            src={downArrow}
            className="images"
            alt=""
            draggable={false}
          />
        </div>
      </div>
    </>
  );
};

export default HomePageComponent;