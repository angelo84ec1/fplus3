"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import bannerPc from "@/assets/img-franquicias/Group -30.jpg";
import bannerPhone from "@/assets/img-franquicias/Group -29.jpg";
import mapPc from "@/assets/img-franquicias/Group -32.jpg";
import mapPhone from "@/assets/img-franquicias/Group -33.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ChatBot from "@/components/ChatBot";
import { IoPaperPlaneSharp } from "react-icons/io5";
import axios from "../utils/axios";
import { toast } from "react-toastify";

const countries = [
  { name: 'Ecuador', code: '+593', flag: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Flag_of_Ecuador.png' },
  { name: 'Argentina', code: '+54', flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg' },
  { name: 'Brasil', code: '+55', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg' },
  { name: 'Colombia', code: '+57', flag: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg' },
  { name: 'México', code: '+52', flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg' },
  { name: 'Perú', code: '+51', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg' },
  { name: 'Usa', code: '+1', flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' },
  { name: 'Francia', code: '+33', flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' },
  { name: 'Italia', code: '+39', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg' },
  { name: 'España', code: '+34', flag: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Flag_of_Spain_%28civil%29.svg' },
  {
      name: "United States",
      code: "+1",
      flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    },
    {
      name: "Canada",
      code: "+1",
      flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
    },
    {
      name: "Mexico",
      code: "+52",
      flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
    },
    {
      name: "United Kingdom",
      code: "+44",
      flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    },
    {
      name: "Germany",
      code: "+49",
      flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    },
    {
      name: "France",
      code: "+33",
      flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    },
    {
      name: "Ecuador",
      code: "+593",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/96/Flag_of_Ecuador.png",
    },
    {
      name: "Brazil",
      code: "+55",
      flag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
    },
    {
      name: "Japan",
      code: "+81",
      flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    },
    {
      name: "Australia",
      code: "+61",
      flag: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
    },
    {
      name: "India",
      code: "+91",
      flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },
    {
      name: "China",
      code: "+86",
      flag: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Flag_of_China.svg",
    },
    {
      name: "South Africa",
      code: "+27",
      flag: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
    },
    {
      name: "Argentina",
      code: "+54",
      flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
    },
    {
      name: "Spain",
      code: "+34",
      flag: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
    },
    {
      name: "Italy",
      code: "+39",
      flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    },
    {
      name: "Russia",
      code: "+7",
      flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
    },
    {
      name: "South Korea",
      code: "+82",
      flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
    },
    {
      name: "Nigeria",
      code: "+234",
      flag: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
    },
    {
      name: "Saudi Arabia",
      code: "+966",
      flag: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",
    },
    {
      name: "Turkey",
      code: "+90",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
    },
    {
      name: "Egypt",
      code: "+20",
      flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
    },
    {
      name: "Indonesia",
      code: "+62",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
    },
    {
      name: "Pakistan",
      code: "+92",
      flag: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
    },
    {
      name: "Colombia",
      code: "+57",
      flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
    },
    {
      name: "Kenya",
      code: "+254",
      flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
    },
    {
      name: "Bangladesh",
      code: "+880",
      flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
    },
    {
      name: "New Zealand",
      code: "+64",
      flag: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
    },
    {
      name: "Vietnam",
      code: "+84",
      flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
    },
    {
      name: "Philippines",
      code: "+63",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
    },
    {
      name: "Thailand",
      code: "+66",
      flag: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
    },
    {
      name: "Malaysia",
      code: "+60",
      flag: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
    },  
];

const ContactUsComponent = () => {
  const [names, setNames] = useState("");
  const [surnames, setSurnames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [phoneError, setPhoneError] = useState("");

  // Phone validation function - now returns validation message
  const validatePhone = (phoneNumber: string): { isValid: boolean; message: string } => {
    // Remove any spaces or formatting
    const cleanPhone = phoneNumber.replace(/\s/g, '');
    
    // Empty is considered valid for styling during input
    if (!phoneNumber) {
      return { isValid: true, message: "" };
    }

    // Check if number starts with '593' or '0'
    if (cleanPhone.startsWith('593') || cleanPhone.startsWith('0')) {
      return { 
        isValid: false, 
        message: "El número no debe empezar con '593' ni con '0'" 
      };
    }
    
    // Check if it's exactly 9 digits and only contains numbers
    const phoneRegex = /^\d{9}$/;
    const isValid = phoneRegex.test(cleanPhone);
    
    if (!isValid) {
      if (cleanPhone.length < 9) {
        return { 
          isValid: false, 
          message: "El número debe tener 9 dígitos" 
        };
      }
      return { 
        isValid: false, 
        message: "El número solo debe contener dígitos" 
      };
    }
    
    return { isValid: true, message: "" };
  };

  // Format phone input to only allow numbers and enforce 9-digit limit
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove any non-numeric characters
    const numbersOnly = value.replace(/\D/g, '');
    // Remove '593' or '0' from the start if present
    const cleanNumber = numbersOnly.replace(/^(593|0)/, '');
    // Limit to 9 digits
    const limitedNumbers = cleanNumber.slice(0, 9);
    setPhone(limitedNumbers);
    
    // Update validation state without showing toast
    const validation = validatePhone(limitedNumbers);
    setIsPhoneValid(validation.isValid);
    setPhoneError(validation.message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number on submit
    const phoneValidation = validatePhone(phone);
    if (!phoneValidation.isValid) {
      toast.error(phoneValidation.message);
      setIsPhoneValid(false);
      return;
    }

    if (
      names !== "" &&
      surnames !== "" &&
      email !== "" &&
      phone !== "" &&
      country !== "" &&
      message !== ""
    ) {
      let parametrosn =
        "nombres=" +
        names +
        "&apellidos=" +
        surnames +
        "&email=" +
        email +
        "&telefono=" +
        phone +
        "&pais=" +
        country +
        "&comentarios=" +
        message;
      const response = axios.post("/marca/enviar_email/", parametrosn);
      axios
                .post("https://api.escala.com/new-lead/", {
          contact_first_name: names,
          contact_last_name: surnames,
          contact_email: email,
          account_phone: phone,
          contact_job_title: country,
          cf_contact_comentario_aycp_text: message,
          form_id: "f5db04f4-c5c0-11ee-9cc7-1a08bc4c529e",
          form_name: "Contactos-Web",
          form_fields_metadata: {
            contact_first_name: {
              name: "Nombre",
              type: "text",
              lead: "contact_first_name",
              required: "False",
              options: [],
              default: "",
              regex: "",
              placeholder: "",
            },
            contact_last_name: {
              name: "Apellido",
              type: "text",
              lead: "contact_last_name",
              required: "False",
              options: [],
              default: "",
              regex: "",
              placeholder: "",
            },
            contact_email: {
              name: "Email",
              type: "text",
              lead: "contact_email",
              required: "True",
              options: [],
              default: "",
              regex:
                "[a-z0-9-A-Z!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9-A-Z!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9-A-Z](?:[a-z0-9-A-Z]*[a-z0-9-A-Z])?\\.)+[a-z0-9-A-Z](?:[a-z0-9-A-Z]*[a-z0-9-A-Z])+",
              placeholder: "",
            },
            account_phone: {
              name: "Número telefónico",
              type: "text",
              lead: "account_phone",
              required: "False",
              options: [],
              default: "",
              regex: "",
              placeholder: "",
            },
            contact_job_title: {
              name: "País",
              type: "text",
              lead: "contact_job_title",
              required: "False",
              options: [],
              default: "",
              regex: "",
              placeholder: "",
            },
            cf_contact_comentario_aycp_text: {
              name: "Comentario",
              type: "text",
              lead: "cf_contact_comentario_aycp_text",
              required: "False",
              options: [],
              default: "",
              regex: "",
              placeholder: "",
            },
          },
          create_deals: true,
          update_deal_value: false,
          notify_leads_recipients: [],
          notify_submits: false,
          notify_submits_recipients: [],
          page_url: "file:///C:/Users/ruiz_/Desktop/index%20(2).html",
          page_title: "",
          tenant_id: "a9792f78-9064-11ee-b842-ee9d42ce137e",
          customer_id: "a9792f78-9064-11ee-b842-ee9d42ce137e",
          visitor_id: "ad903a18-7549-4f19-89e0-9012eee0e39c",
          visit_id: "314fe3af-840f-4d4d-b52c-fe2e157dd0d5",
          utm_type: "typein",
          utm_source: "(direct)",
          utm_medium: "(none)",
          utm_campaign: "(none)",
          utm_terms: "(none)",
          utm_content: "(none)",
          escala_acc: "(none)",
          escala_cam: "(none)",
          escala_grp: "(none)",
          escala_ad: "(none)",
          escala_net: "(none)",
          escala_src: "(direct)",
          escala_la: "true",
          escala_ol: "false",
          first_utm_type: "typein",
          first_utm_source: "(direct)",
          first_utm_medium: "(none)",
          first_utm_campaign: "(none)",
          first_utm_terms: "(none)",
          first_utm_content: "(none)",
          first_escala_acc: "(none)",
          first_escala_cam: "(none)",
          first_escala_grp: "(none)",
          first_escala_ad: "(none)",
          first_escala_net: "(none)",
          first_escala_src: "(direct)",
          first_escala_la: "true",
          first_escala_ol: "false",
          device_type: "desktop",
          device_brand: "",
          device_model: "",
          device_client_type: "browser",
          device_client_name: "Chrome",
          device_client_version: "130.0",
          device_client_engine: "Blink",
          device_os_name: "Windows",
          device_os_version: "10.0",
          device_os_platform: "x64",
          contact_phone: null,
          runner_version: "0.2.1",
        })
        .then(console.log)
        .catch(console.error);
      response
        .then(() => {
          if (
            names !== "" &&
            surnames !== "" &&
            email !== "" &&
            phone !== "" &&
            country !== "" &&
            message !== ""
          ) {
            toast.success(
              "Mensaje enviado, pronto un asesor se contactará contigo."
            );
            setNames("");
            setSurnames("");
            setEmail("");
            setPhone("");
            setCountry("");
            setMessage("");
          }

          // console.log("El csrf de response",csrftoken)
        })
        .catch((error) => {
          console.log(error);
          toast.error(
            "Lo sentimos, hubo un error al enviar tu mensaje. Inténtalo nuevamente."
          );
        });
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <main className="w-screen lg:w-full">
        <section>
          <Navbar />
        </section>

        <section>
          <div className="h-20 lg:hidden bg-[#0d132f] "></div>
        </section>

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
              className="absolute top-0 bottom-0 lg:left-28 right-12 flex items-center text-white lg:text-5xl text-3xl"
            >
              CONTÁCTANOS
            </div>
          </div>
        </section>
        <section>
          <div className="bg-white relative w-full flex flex-col-reverse items-center">
            <div className="flex flex-col w-full lg:py-10 lg:ps-[12vw] text-lg px-8 lg:px-0 pb-8 leading-5">
              <div className="mb-4">
                <div
                  style={{ fontFamily: "Mukata Mahee Bold" }}
                  className="text-2xl"
                >
                  Quito - Ecuador
                </div>
                <div>
                  De los Establos y Av. de los Conquistadores, <br />
                  edificio Cemacol
                </div>
                <div className="text-[#0d132f] text-lg">+593 999 209 555</div>
              </div>
              <div className="mb-4">
                <div
                  style={{ fontFamily: "Mukata Mahee Bold" }}
                  className="text-2xl"
                >
                  Wellington - USA
                </div>
                <div>1959 Oak Berry Cir. Wellington, FL 33414</div>
                <div className="text-[#0d132f] text-lg">
                  +561 232 1399 / +561 899 3067
                </div>
              </div>
              <div>
                <div>Lunes-Viernes: 8:30 - 17:30</div>
                <div>Cerrado los fines de semana</div>
              </div>
            </div>
            <div className="lg:absolute relative rounded-3xl overflow-hidden flex-col lg:w-auto w-11/12 flex bottom-14 lg:bottom-auto -top-[25%] lg:left-[62vw] z-10">
              <div
                style={{ fontFamily: "Mukata Mahee Bold" }}
                className="text-white bg-[#0d132f] text-center text-2xl py-4"
              >
                Generemos
                <br />
                negocios de éxito
              </div>
              <form
                onSubmit={handleSubmit}
                className="bg-[#02c5d5] flex flex-col px-4 pt-5 pb-10 gap-y-4"
              >
                <div className="flex lg:flex-row flex-col gap-4 justify-evenly">
                  <input
                    required
                    defaultValue=""
                    value={names}
                    onChange={(e: any) => setNames(e.target.value)}
                    type="text"
                    placeholder="Nombres"
                    className="py-3 pl-2 rounded-lg lg:w-44"
                  />
                  <input
                    required
                    defaultValue=""
                    value={surnames}
                    onChange={(e: any) => setSurnames(e.target.value)}
                    type="text"
                    placeholder="Apellidos"
                    className="py-3 pl-2 rounded-lg lg:w-44"
                  />
                </div>
                <div className="flex lg:flex-row flex-col gap-4 justify-evenly">
                  <input
                    required
                    defaultValue=""
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Correo"
                    className="py-3 pl-2 rounded-lg lg:w-44"
                  />
                  <div className="relative">
                    <input
                      required
                      defaultValue=""
                      value={phone}
                      onChange={handlePhoneChange}
                      type="text"
                      placeholder="WhatsApp"
                      className={`py-3 pl-2 rounded-lg lg:w-44 ${!isPhoneValid ? 'border-2 border-red-500' : ''}`}
                    />
                    {phoneError && (
                      <span className="absolute left-0 -bottom-5 text-xs text-red-500">
                        {phoneError}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-start">
                  <select
                    required
                    defaultValue=""
                    value={country}
                    onChange={(e: any) => setCountry(e.target.value)}
                    className="py-3 pl-2 rounded-lg lg:w-44 w-full"
                  >
                    <option value="" disabled>
                      País
                    </option>
                    {countries.map((country) => (
                      <option value={country.name} key={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-4 justify-start">
                  <textarea
                    required
                    value={message}
                    defaultValue=""
                    onChange={(e: any) => setMessage(e.target.value)}
                    name=""
                    id=""
                    placeholder="Déjanos tu mensaje"
                    rows={3}
                    className="w-full rounded-lg resize-none p-2"
                  ></textarea>
                </div>
                <div className="flex py-4 justify-center w-full">
                  <button
                    type="submit"
                    className="w-auto rounded-lg py-2 px-4 flex gap-2 text-xl bg-[#0d132f] text-[#02c5d5] hover:bg-white hover:text-[#0d132f] items-center"
                  >
                    <IoPaperPlaneSharp /> Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section>
          <div className="z-[1] lg:h-[30em] h-screen w-full relative">
            <div className="absolute inset-0 hidden lg:block">
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                alt=""
                src={mapPc}
                className="images"
              />
            </div>
            <div className="absolute inset-0 block lg:hidden">
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                alt=""
                src={mapPhone}
                className="images"
              />
            </div>
          </div>
        </section>

        <section>
          <Footer />
        </section>
      </main>
      <ChatBot />
    </main>
  );
};

export default ContactUsComponent;