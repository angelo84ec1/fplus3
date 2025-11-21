import Image from "next/image";
import Bot from "../assets/img-franquicias/icono_whatsapp.png";

const Chat = () => {
  // Función para redirigir a WhatsApp
  const handleWhatsAppClick = () => {
    const phoneNumber = "593999209555"; // Número de WhatsApp
    const message = "Hola, estoy interesado en franquiciar mi negocio"; // Mensaje opcional
    const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}&app_absent=0`;
    window.open(url, "_blank"); // Abrir en nueva pestaña
  };

  return (
    <div className="fixed top-1/2 right-5 transform -translate-y-1/2 z-50 flex justify-center items-center">
      <div
        onClick={handleWhatsAppClick} // Evento onClick
        className="cursor-pointer rounded-full bg-[#25D366] p-3 lg:p-4 shadow-lg hover:bg-[#128c7e] transition transform hover:scale-110"
      >
        <Image
          unoptimized
          draggable={false}
          src={Bot}
          alt="WhatsApp Icon"
          width={50}
          height={50}
          className="w-10 h-10 lg:w-12 lg:h-12"
        />
      </div>
    </div>
  );
};

export default Chat;
