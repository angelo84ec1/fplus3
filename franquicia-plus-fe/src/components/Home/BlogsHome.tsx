import { useEffect, useState, useRef, useCallback } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import blogs from "@/static/Content/BlogGeneral/blogs.json";
import { BlogsGeneral } from "@/types/BlogsGeneral";
import CardBlog from "../CardBlog";

const DESKTOP_VISIBLE = 3;
const AUTO_INTERVAL = 4000;

const BlogEventosSection = () => {
  const [latestBlogs, setLatestBlogs] = useState<BlogsGeneral["blogs"]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalRef = useRef(0);

  useEffect(() => {
    const sorted = [...blogs.blogs].sort(
      (a, b) =>
        new Date(b.fechaOrdenada).getTime() - new Date(a.fechaOrdenada).getTime()
    );
    setLatestBlogs(sorted);
    totalRef.current = sorted.length;
  }, []);

  const stopAuto = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalRef.current);
    }, AUTO_INTERVAL);
  }, [stopAuto]);

  useEffect(() => {
    if (latestBlogs.length > 0) {
      startAuto();
      return stopAuto;
    }
  }, [latestBlogs.length, startAuto, stopAuto]);

  const goNext = useCallback(() => {
    stopAuto();
    setCurrentIndex((prev) => (prev + 1) % totalRef.current);
    startAuto();
  }, [startAuto, stopAuto]);

  const goPrev = useCallback(() => {
    stopAuto();
    setCurrentIndex((prev) => (prev - 1 + totalRef.current) % totalRef.current);
    startAuto();
  }, [startAuto, stopAuto]);

  const goTo = useCallback(
    (index: number) => {
      stopAuto();
      setCurrentIndex(index);
      startAuto();
    },
    [startAuto, stopAuto]
  );

  const visibleBlogs = latestBlogs.length > 0
    ? Array.from({ length: DESKTOP_VISIBLE }, (_, i) =>
        latestBlogs[(currentIndex + i) % latestBlogs.length]
      )
    : [];

  const currentBlog = latestBlogs[currentIndex] ?? null;

  return (
    <div className="my-5">
      <div className="mb-5 text-center">
        <p className="text-4xl" style={{ fontFamily: "Mukata Mahee Bold" }}>
          Blog y Noticias
        </p>
        <p className="text-xl">Tenemos información para ti</p>
      </div>

      {/* Desktop carousel */}
      <div
        className="lg:flex hidden w-full justify-center relative"
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
      >
        <button
          className="absolute left-4 z-10 text-[#fa5e4d] top-1/2 -translate-y-1/2"
          onClick={goPrev}
        >
          <IoIosArrowBack className="text-4xl" />
        </button>

        <div className="w-full max-w-[1024px] flex justify-center h-full gap-10 px-12">
          {visibleBlogs.map((blog, index) => (
            <div key={`${blog.id}-${index}`} className="w-full h-96">
              <CardBlog
                blogImagen={blog.imagen}
                cardWrapperClass="text-white"
                buttonText={blog.valueCategoria}
                cardClass="tipo-letra-bold"
                blogIndividual={blog.url}
                cardText={blog.nombre}
                dateClass="text-white"
                cardDate={blog.fecha}
              />
            </div>
          ))}
        </div>

        <button
          className="absolute right-4 z-10 text-[#fa5e4d] top-1/2 -translate-y-1/2"
          onClick={goNext}
        >
          <IoIosArrowForward className="text-4xl" />
        </button>
      </div>

      {/* Indicadores desktop */}
      <div className="lg:flex hidden justify-center gap-2 mt-4">
        {latestBlogs.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-[#02c5d5] w-6" : "bg-gray-400 w-2"
            }`}
          />
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="block lg:hidden">
        <div className="relative flex justify-center items-center overflow-hidden">
          {currentBlog && (
            <a
              href={`/blogs/${currentBlog.url}`}
              className="slideBlogs active no-underline text-white rounded-3xl overflow-hidden"
              style={{ backgroundImage: `url(${currentBlog.imagen})` }}
            >
              <div className="justify-end overflow-hidden relative flex no-underline text-white flex-col h-full p-2">
                <div className="flex flex-col items-start justify-end h-24">
                  <button
                    type="button"
                    className="text-white bg-[#0d132f] px-1 rounded-lg mb-2"
                  >
                    {currentBlog.valueCategoria}
                  </button>
                  <div className="no-underline">{currentBlog.nombre}</div>
                </div>
                <div className="text-white no-underline">{currentBlog.fecha}</div>
              </div>
            </a>
          )}
          <button
            className="absolute left-2 z-10 text-[#fa5e4d]"
            onClick={goPrev}
          >
            <IoIosArrowBack className="text-4xl" />
          </button>
          <button
            className="absolute right-2 z-10 text-[#fa5e4d]"
            onClick={goNext}
          >
            <IoIosArrowForward className="text-4xl" />
          </button>
        </div>

        {/* Indicadores móvil */}
        <div className="flex justify-center gap-2 mt-3">
          {latestBlogs.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-[#02c5d5] w-6" : "bg-gray-400 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogEventosSection;
