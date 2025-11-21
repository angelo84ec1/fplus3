/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import {
  faMotorcycle,
  faMugHot,
  faSprayCan,
  faUtensils,
  faCapsules,
  faBriefcase,
  faSchool,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import { Results } from "@/types/Results";
import Image from "next/image";

interface props {
  marca: Results;
}

const Marca = ({ marca }: props) => {
  const [hoverOn, setHoverOn] = useState("");
  const pathname = usePathname();

  const categoryIcon = (nombreCategoria: string) => {
    switch (nombreCategoria) {
      case "Tiendas":
        return faStore;
      case "Cafetería":
        return faMugHot;
      case "Tienda Automotriz":
        return faMotorcycle;
      case "Servicios":
        return faBriefcase;
      case "Coaching":
        return faBriefcase;
      case "Belleza":
        return faSprayCan;
      case "Educación":
        return faSchool;
      case "Farmacias":
        return faCapsules;
      case "Restaurantes":
        return faUtensils;
      default:
        return faBriefcase;
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="flip-down"
      data-aos-delay="100"
      className="lg:w-1/3 sm:w-2/4 w-full py-0 lg:px-6 md:px-2 px-10 mb-16 lg:aspect-[9/11] h-auto max-h-[450px]"
      data-category={marca.categoria.nombre}
    >
      <div
        className="overflow-hidden h-100 flex flex-col justify-between bg-white border"
        style={{
          borderRadius: "1.5em",
          boxShadow: "0.125em 1.5em 1.25em 0 rgba(0, 0, 0, 0.388)",
        }}
      >
        <Link href={marca.urlmarca}>
          <div>
            {pathname !== "/" && (
              <button
                type="button"
                className="text-xs text-white absolute border-1 px-4 py-1 rounded border-transparent btn-popular bg-white mt-3 ms-3"
              >
                {marca.estado.nombre === "Popular" ? "Premium" : marca.estado.nombre}
              </button>
            )}
            {pathname === "/" && marca.estado.nombre === "Premium" && (
              <button
                type="button"
                className="text-xs text-transparent absolute border-1 px-4 py-1 rounded border-transparent btn-popular bg-transparent mt-3 ms-3"
              >
                {marca.estado.nombre}
              </button>
            )}
            <div className="w-full">
              <img
                loading="eager"
                draggable={false}
                width={500}
                height={500}
                onMouseEnter={() => setHoverOn(marca.urlmarca)}
                onMouseLeave={() => setHoverOn("")}
                className="images"
                src={
                  hoverOn === marca.urlmarca
                    ? marca.imagenlocal
                    : marca.imagenmarca
                }
                alt={
                  hoverOn === marca.urlmarca
                    ? marca.altimagenlocal
                    : marca.altimagenmarca
                }
                title={
                  hoverOn === marca.urlmarca
                    ? marca.titleimagenlocal
                    : marca.titleimagenmarca
                }
              />
            </div>
          </div>
        </Link>
        <div className="xl:-mt-10 lg:-mt-16 -mt-10 pl-4">
          <div className="border-2 border-white h-[2.5em] align-top aspect-square rounded-full overflow-hidden">
            <img
              loading="eager"
              draggable={false}
              width={500}
              height={500}
              className="images"
              src={marca.imagenlogo}
              alt={marca.altimagenlogo}
              title={marca.titleimagenlogo}
            />
          </div>
        </div>
        <div className="py-4 px-6">
          <div className="col-8 col-md-7 d-inline-block">
            <Link
              className="text-black no-underline hover:underline font-bold"
              href={marca.urlmarca}
            >
              <div
                style={{ fontFamily: "Mukata Mahee Bold" }}
                className="card-title titulo-card text-[1.2em] leading-5"
              >
                {marca.nombre}
              </div>
            </Link>
          </div>
          <div className="col-md-4 d-inline-block">
            <p
              style={{ fontFamily: "Mukata Mahee Bold" }}
              className="color-principal tipo-letra d-flex justify-content-end price-bold text-[#0d132f]"
            >
              {Number(marca?.precio).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).replace(",", ".")}
            </p>
          </div>
          <p
            style={{ fontFamily: "Mukata Mahee Regular" }}
            className="card-text text-[#0d132f] tipo-letra cuerpo-card leading-none mt-4 text-sm"
          >
            {marca.descripcion}
          </p>
        </div>
        <div className="lg:py-[0.5em] lg:px-[1em] py-2 px-4 flex justify-between items-center">
          <div className="flex gap-x-1">
            <FontAwesomeIcon
              className="text-[#fa5e4d] lg:text-base text-xs"
              icon={categoryIcon(marca.categoria.nombre)}
            />
            <div className="text-[#0d132f] lg:ml-2 lg:text-[0.875em] text-xs">
              {marca.categoria.nombre}
            </div>
          </div>
          <div className="">
            <Link className="no-underline" href={marca.urlmarca}>
              <div className="d-flex justify-content-end">
              <button
  type="button"
  className="text-base font-semibold text-white bg-[#00c6d5] px-3 py-2 rounded-lg 
  shadow-[0_8px_16px_rgba(0,198,213,0.4),0_4px_8px_rgba(0,0,0,0.2)] 
  hover:px-4
  hover:py-3
  hover:shadow-[0_12px_24px_rgba(0,198,213,0.5),0_6px_12px_rgba(0,0,0,0.3)] 
  hover:bg-[#00b5c4] 
  hover:scale-110
  hover:-translate-y-2
  active:px-5
  active:py-4
  active:scale-115
  active:translate-y-0
  active:shadow-[0_4px_8px_rgba(0,198,213,0.3),0_2px_4px_rgba(0,0,0,0.2)]
  transition-all duration-300 ease-in-out border-0"
>
  Consultar
</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marca;