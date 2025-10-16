"use client";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import banner from "@/assets/img-franquicias/6A.jpg";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";
import PublicityComponent from "@/components/PublicityComponent";
import { Marcas } from "@/types/Marcas";
import axios from "../utils/axios";
import { Inversion } from "@/types/Inversion";
import { Sector } from "@/types/Sector";
import MarcaCard from "@/components/Marca/MarcaCard";
import BrandsFilter from "@/components/BrandsFilter";
import { CgSpinnerTwoAlt } from "react-icons/cg";

interface Props {
  category: Sector[];
  ubication: Sector[];
  investment: Inversion[];
  directory: Sector[];
  state: Sector[];
}

const BrandsPageComponent = ({
  category,
  ubication,
  investment,
  directory,
  state,
}: Props) => {
  const directorios = directory;
  const estado = state;
  const ubicacion = ubication;
  const categoria = category;
  const inversion = investment;

  const [marcas, setMarcas] = useState<Marcas>();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedUbication, setSelectedUbication] = useState("");
  const [selectedInversion, setSelectedInversion] = useState("");
  const [selectedPrecioMin, setSelectedPrecioMin] = useState("");
  const [selectedPrecioMax, setSelectedPrecioMax] = useState("");
  const [selectedTipo, setSelectedTipo] = useState("");
  const [, setSelectedState] = useState("");
  const [, setSelectedDirectory] = useState("");
  const [charge, setCharge] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const brandsPerPage = 9;

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCharge(false);
    }, 2000); // Timeout set to 2 seconds for consistency

    return () => clearTimeout(timeout);
  }, [charge]);

  const getMarcas = async () => {
    const estado = searchParams.get("estado");
    if (estado) setSelectedState(estado);

    const directorio = searchParams.get("directorio");
    if (directorio) setSelectedDirectory(directorio);

    const categoria = searchParams.get("categoria");
    if (categoria) setSelectedCategory(categoria);

    const ubicacion = searchParams.get("ubicacion");
    if (ubicacion) setSelectedUbication(ubicacion);

    const inversion = searchParams.get("inversion");
    if (inversion) setSelectedInversion(inversion);

    const precio_min_sel = searchParams.get("precio__gte");
    if (precio_min_sel) setSelectedPrecioMin(precio_min_sel);

    const tipo = searchParams.get("tipo");
    if (tipo) setSelectedTipo(tipo);

    const precio_max_sel = searchParams.get("precio__lte");
    if (precio_max_sel) setSelectedPrecioMax(precio_max_sel);

    try {
      const response = await axios.get(`/api/v1/marcas/`, {
        params: {
          page_size: brandsPerPage,
          categoria__nombre: categoria,
          ubicacion__nombre: ubicacion,
          estado__nombre: estado,
          directorio__nombre: directorio,
          precio__gte: precio_min_sel,
          precio__lte: precio_max_sel,
          tipo: tipo,
        },
      });
      setMarcas(response.data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setCharge(true);
    getMarcas();
  }, [searchParams]);

  const newPage = async (page: number) => {
    try {
      const response = await axios.get(`/api/v1/marcas/`, {
        params: {
          page_size: brandsPerPage,
          page,
          categoria__nombre: selectedCategory,
          ubicacion__nombre: selectedUbication,
          inversion__nombre: selectedInversion,
          precio__gte: selectedPrecioMin,
          precio__lte: selectedPrecioMax,
          tipo: selectedTipo,
        },
      });
      setMarcas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeThousandsSeparator = (price: string) => price.replace(/\./g, "");

  useEffect(() => {
    let sectors = "";

    if (
      selectedCategory ||
      selectedUbication ||
      selectedPrecioMax ||
      selectedPrecioMin ||
      selectedInversion ||
      selectedTipo
    ) {
      sectors += "?";
      if (selectedCategory)
        sectors += `categoria=${encodeURIComponent(selectedCategory)}&`;
      if (selectedUbication)
        sectors += `ubicacion=${encodeURIComponent(selectedUbication)}&`;
      if (selectedTipo) sectors += `tipo=${encodeURIComponent(selectedTipo)}&`;
      const parsedInversion = selectedInversion.split("-");
      if (parsedInversion.length === 3) {
        parsedInversion[1] = parsedInversion[2];
        parsedInversion.pop();
        const [minPrice, maxPrice] = parsedInversion.map((price) =>
          removeThousandsSeparator(price)
        );
        sectors += `precio__gte=${encodeURIComponent(minPrice)}&`;
        sectors += `precio__lte=${encodeURIComponent(maxPrice)}&`;
      } else if (selectedInversion === "120.000") {
        sectors += `precio__gte=120000&precio__lte=10000000000000000000000&`;
      } else {
        if (selectedPrecioMin)
          sectors += `precio__gte=${encodeURIComponent(selectedPrecioMin)}&`;
        if (selectedPrecioMax)
          sectors += `precio__lte=${encodeURIComponent(selectedPrecioMax)}&`;
      }

      sectors = sectors.slice(0, -1); // Remove trailing "&"
    }

    const targetUrl = `/franquicias-en-ecuador${sectors}`;
    router.push(targetUrl);
  }, [
    selectedCategory,
    selectedInversion,
    selectedUbication,
    selectedPrecioMax,
    selectedPrecioMin,
    selectedTipo,
  ]);

  return (
    <>
      <section>
        <Navbar />
      </section>

      <section>
        <div className="lg:h-[20em] h-[24em] right-0 left-0">
          <div className="relative w-full h-full">
            <div className="absolute w-full h-full">
              <Image
                unoptimized
                width={10000}
                height={10000}
                draggable={false}
                id="banner"
                src={banner}
                alt={""}
                className="images"
              />
            </div>
            <div className="absolute top-0 bottom-0 lg:left-[80px] left-[60px] flex flex-col text-start text-white justify-center items-start">
              {/* Heading text */}
              <div
                className="text-5xl lg:block hidden font-bold"
                style={{ fontFamily: "Mukata Mahee Bold" }}
              >
                Invierte en una marca <br /> rentable y comprobada
              </div>
              <div
                className="lg:hidden block text-3xl font-bold"
                style={{ fontFamily: "Mukata Mahee Bold" }}
              >
                Invierte en una <br />
                marca <br />
                rentable y <br />
                comprobada
              </div>
              <div className="lg:block hidden text-3xl" data-aos="fade-right">
                y sé dueño de tu propio negocio
              </div>
              <div className="lg:hidden block text-xl" data-aos="fade-right">
                y sé dueño de tu propio <br />
                negocio
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id="filter" className="w-full flex lg:flex-row flex-col py-8">
          <BrandsFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedUbication={selectedUbication}
            setSelectedUbication={setSelectedUbication}
            selectedInversion={selectedInversion}
            setSelectedInversion={setSelectedInversion}
            setSelectedTipo={setSelectedTipo}
            directorios={directorios}
            estados={estado}
            ubicacion={ubicacion}
            categoria={categoria}
            inversion={inversion}
            tipo={selectedTipo}
          />
          <div className="flex w-full justify-center px-4">
            {charge ? (
              <div className="flex justify-center items-center">
                <div className="text-[#fa5e4d] text-9xl animate-spin">
                  <CgSpinnerTwoAlt />
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap mt-5 mb-5 w-full max-w-[1200px]">
                {marcas?.results.map((marca, index) => (
                  <MarcaCard key={index} marca={marca} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {totalPages > 1 && !charge && (
        <section>
          <div className="w-full flex lg:justify-end justify-center">
            <div className="flex justify-center lg:w-[70vw] items-center py-4 gap-4">
              <button
                onClick={() => {
                  setCurrentPage((prev) => Math.max(prev - 1, 1));
                  newPage(Math.max(currentPage - 1, 1));
                }}
                className={`text-5xl w-12 aspect-square ${
                  currentPage === 1
                    ? "text-transparent"
                    : "rounded-full text-[#fa5e4d] hover:bg-slate-200 cursor-pointer"
                }`}
              >
                <IoIosArrowBack />
              </button>
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentPage(index + 1);
                    newPage(index + 1);
                  }}
                  className={`relative flex justify-center items-center border text-2xl w-12 aspect-square rounded-full cursor-pointer ${
                    currentPage === index + 1
                      ? "bg-[#fa5e4d] text-white"
                      : "hover:bg-slate-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => {
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                  newPage(Math.min(currentPage + 1, totalPages));
                }}
                className={`text-5xl w-12 aspect-square ${
                  currentPage === totalPages
                    ? "text-transparent"
                    : "rounded-full text-[#fa5e4d] hover:bg-slate-200 cursor-pointer"
                }`}
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </section>
      )}

      <section>
        <PublicityComponent />
      </section>

      <section>
        <ChatBot />
        <Footer />
      </section>
    </>
  );
};

export default BrandsPageComponent;
