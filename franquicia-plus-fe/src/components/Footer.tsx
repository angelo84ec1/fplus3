import Image from "next/image";
import logo from "@/assets/img-franquicias/Logo-Blanco.png";
import { useEffect, useState } from "react";
import modalContentJson from "@/static/Content/FooterInfo/footerInfo.json";
import { usePathname, useRouter } from "next/navigation";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#02c5d5]">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#02c5d5]">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#02c5d5]">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
  </svg>
);

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 flex-shrink-0 text-[#02c5d5]">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
  </svg>
);

const Footer = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const router = useRouter();
  const path = usePathname();

  const redirect = (link: string) => {
    if (path === link) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push(link);
    }
  };

  useEffect(() => {
    const page = window.location.pathname.substring(1);
    switch (page) {
      case "somos-franquicia-plus-consultora":
        setModalContent(modalContentJson.about.content);
        break;
      case "consultores-de-franquicias":
        setModalContent(modalContentJson.franchise.content);
        break;
      case "certificado-de-franquicias":
        setModalContent(modalContentJson.certificate.content);
        break;
      default:
        setModalContent(modalContentJson.default.content);
        break;
    }
  }, []);

  const socialLinks = [
    { href: "https://www.instagram.com/fplusglobal", icon: <InstagramIcon />, label: "Instagram" },
    { href: "https://www.facebook.com/fplusecuador", icon: <FacebookIcon />, label: "Facebook" },
    { href: "https://www.linkedin.com/company/78687961", icon: <LinkedInIcon />, label: "LinkedIn" },
    { href: "https://www.youtube.com/@FPlus2006", icon: <YoutubeIcon />, label: "YouTube" },
  ];

  const menuLinks = [
    { label: "Sobre FPlus", path: "/somos-franquicia-plus-consultora/" },
    { label: "Servicios", path: "#" },
    { label: "Testimonios", path: "/testimonios/" },
    { label: "Blogs y Noticias", path: "/blog" },
    { label: "Escríbenos", path: "/contactanos" },
    { label: "Política de privacidad", path: "/politica-de-privacidad" },
  ];

  return (
    <>
      <footer className="w-full">
        <div className="flex flex-col lg:flex-row">

          {/* Columna 1 — Marca */}
          <div className="lg:w-1/3 w-full bg-[#02c5d5] flex flex-col py-12 lg:px-16 px-10 gap-6">
            <a className="w-52" href="/">
              <Image unoptimized draggable={false} src={logo} className="images" alt="FPlus logo" />
            </a>
            <p className="text-white font-semibold text-lg tracking-wide">¡Negocios que Funcionan!</p>
            <div className="w-10 h-0.5 bg-white/40 rounded-full" />
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-[#0d132f] flex items-center justify-center text-white transition-colors duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2 — Contacto */}
          <div className="lg:w-1/3 w-full bg-[#0d132f] flex flex-col py-12 lg:px-16 px-10 gap-6">
            <div>
              <h3 className="text-white text-2xl font-bold mb-1">Contacto</h3>
              <div className="w-8 h-0.5 bg-[#02c5d5] rounded-full" />
            </div>

            <div className="flex flex-col gap-4 text-sm text-gray-300">
              <div className="flex gap-3">
                <LocationIcon />
                <div>
                  <p className="text-white font-semibold text-sm mb-0.5">Quito — Ecuador</p>
                  <p className="leading-relaxed">De los Establos y Av. de los Conquistadores, edificio Cemacol</p>
                  <div className="flex items-center gap-2 mt-1">
                    <PhoneIcon />
                    <span>+593 999 209 555</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <LocationIcon />
                <div>
                  <p className="text-white font-semibold text-sm mb-0.5">Wellington — USA</p>
                  <p className="leading-relaxed">1959 Oak Berry Cir. Wellington, FL 33414</p>
                  <div className="flex items-center gap-2 mt-1">
                    <PhoneIcon />
                    <span>+561 232 1399 / +561 899 3067</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <ClockIcon />
                <div>
                  <p className="text-white font-semibold text-sm mb-0.5">Horario</p>
                  <p>Lunes – Viernes: 8:30 – 17:30</p>
                  <p className="text-gray-400">Cerrado los fines de semana</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 3 — Menú */}
          <div className="lg:w-1/3 w-full bg-[#0d132f] flex flex-col py-12 lg:px-16 px-10 gap-6 border-l border-white/5">
            <div>
              <h3 className="text-white text-2xl font-bold mb-1">Menú</h3>
              <div className="w-8 h-0.5 bg-[#02c5d5] rounded-full" />
            </div>
            <nav className="flex flex-col gap-1">
              {menuLinks.map(({ label, path: linkPath }) => (
                <button
                  key={label}
                  onClick={() => redirect(linkPath)}
                  className="flex items-center gap-2 text-gray-300 hover:text-white group py-1.5 text-sm text-left transition-colors duration-200"
                >
                  <ChevronIcon />
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">{label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="flex justify-center items-center gap-2 w-full bg-[#fa5e4d] text-white text-xs py-2 px-4">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
            <path d="M11.88 9.14c1.28.06 1.61 1.15 1.63 1.39h1.65c-.12-1.78-1.63-2.47-3.28-2.47-1.49 0-3.05.59-3.05 2.43 0 1.49 1.21 2.08 2.41 2.44l1.03.31c.76.22 1.48.58 1.48 1.38 0 .91-.85 1.26-1.63 1.26-1.07 0-1.88-.58-1.92-1.69H8.5c.06 1.78 1.3 2.88 3.35 2.88 1.49 0 3.38-.53 3.38-2.64 0-1.62-1.28-2.22-2.55-2.57l-.96-.28c-.58-.17-1.42-.44-1.42-1.22 0-.74.74-1.02 1.58-.96zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
          </svg>
          <span>Copyright © 2026 FPlus Global. Todos los derechos reservados.</span>
        </div>
      </footer>

      <div
        className={`inset-0 z-40 bg-black bg-opacity-50 fixed flex justify-center items-center ${
          showInfo ? "" : "hidden"
        }`}
      >
        <div className="bg-white absolute top-10 h-full max-h-[90%] w-[500px] rounded-2xl flex flex-col">
          <div className="w-full border-b p-4 h-auto">
            <div className="text-[#02c5d5] font-semibold text-4xl">Franquicia Plus</div>
          </div>
          <div className="overflow-hidden border-b">
            <div className="overflow-y-auto max-h-[100%]">
              <div className="p-4 border-b text-xl" dangerouslySetInnerHTML={{ __html: modalContent }} />
            </div>
          </div>
          <div className="w-full p-4 flex justify-end h-auto">
            <div
              onClick={() => setShowInfo(false)}
              className="cursor-pointer px-2 py-2 bg-[#fa5e4d] border hover:bg-white rounded-xl overflow-hidden hover:border-[#fa5e4d] text-white hover:text-[#fa5e4d]"
            >
              Cerrar
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
