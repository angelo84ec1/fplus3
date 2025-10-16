/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
"use client";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { DetalleMarca } from "@/types/DetalleMarca";
import { useEffect, useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import axios from "../utils/axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DotProps } from "react-multi-carousel";
import Image from "next/image";
import cash from "@/assets/img/Paginasinternas/rentabilidad.png";
import bag from "@/assets/img/Paginasinternas/negocio.png";
import graph from "@/assets/img/Paginasinternas/posiciona.png";
import compass from "@/assets/img/Paginasinternas/zona.png";
import pin from "@/assets/img/Paginasinternas/ubica.png";
import signature from "@/assets/img/Paginasinternas/know.png";
import board from "@/assets/img/Paginasinternas/formacion.png";
import megaphone from "@/assets/img/Paginasinternas/megafonopubli.png";
import spotLight from "@/assets/img/Paginasinternas/fondo-luces.jpg";
import { toast } from "react-toastify";
import { Sector } from "@/types/Sector";
import { NextResponse } from "next/server";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { Inversion } from "@/types/Inversion";

const getUbications = async () => {
  const { data } = await axios.get("/api/v1/ubicacion/");
  return data;
};

interface props {
  detalleMarca: DetalleMarca;
}
const countries = [
  {
    name: "Afghanistan",
    code: "+93",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Afghanistan_%282021%29.svg",
  },
  {
    name: "Albania",
    code: "+355",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
  },
  {
    name: "Algeria",
    code: "+213",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",
  },
  {
    name: "Andorra",
    code: "+376",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg",
  },
  {
    name: "Angola",
    code: "+244",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg",
  },
  {
    name: "Antigua and Barbuda",
    code: "+1-268",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg",
  },
  {
    name: "Argentina",
    code: "+54",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
  },
  {
    name: "Armenia",
    code: "+374",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg",
  },
  {
    name: "Australia",
    code: "+61",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
  },
  {
    name: "Austria",
    code: "+43",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
  },
  {
    name: "Azerbaijan",
    code: "+994",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
  },
  {
    name: "Bahamas",
    code: "+1-242",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg",
  },
  {
    name: "Bahrain",
    code: "+973",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg",
  },
  {
    name: "Bangladesh",
    code: "+880",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
  },
  {
    name: "Barbados",
    code: "+1-246",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg",
  },
  {
    name: "Belarus",
    code: "+375",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg",
  },
  {
    name: "Belgium",
    code: "+32",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
  },
  {
    name: "Belize",
    code: "+501",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg",
  },
  {
    name: "Benin",
    code: "+229",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg",
  },
  {
    name: "Bhutan",
    code: "+975",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg",
  },
  {
    name: "Bolivia",
    code: "+591",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg",
  },
  {
    name: "Bosnia and Herzegovina",
    code: "+387",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg",
  },
  {
    name: "Botswana",
    code: "+267",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg",
  },
  {
    name: "Brazil",
    code: "+55",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
  },
  {
    name: "Brunei",
    code: "+673",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg",
  },
  {
    name: "Bulgaria",
    code: "+359",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
  },
  {
    name: "Burkina Faso",
    code: "+226",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg",
  },
  {
    name: "Burundi",
    code: "+257",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg",
  },
  {
    name: "Cameroon",
    code: "+237",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg",
  },
  {
    name: "Canada",
    code: "+1",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
  },
  {
    name: "Chile",
    code: "+56",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
  },
  {
    name: "China",
    code: "+86",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_China.svg",
  },
  {
    name: "Colombia",
    code: "+57",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
  },
  {
    name: "Costa Rica",
    code: "+506",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica.svg",
  },
  {
    name: "Ecuador",
    code: "+593",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg",
  },
  {
    name: "Egypt",
    code: "+20",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
  },
  {
    name: "El Salvador",
    code: "+503",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg",
  },
  {
    name: "Ethiopia",
    code: "+251",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg",
  },
  {
    name: "France",
    code: "+33",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
  },
  {
    name: "Germany",
    code: "+49",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
  },
  {
    name: "Ghana",
    code: "+233",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg",
  },
  {
    name: "Guatemala",
    code: "+502",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg",
  },
  {
    name: "Guyana",
    code: "+592",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg",
  },
  {
    name: "Honduras",
    code: "+504",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg",
  },
  {
    name: "India",
    code: "+91",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
  },
  {
    name: "Indonesia",
    code: "+62",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
  },
  {
    name: "Iran",
    code: "+98",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg",
  },
  {
    name: "Iraq",
    code: "+964",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg",
  },
  {
    name: "Israel",
    code: "+972",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg",
  },
  {
    name: "Italy",
    code: "+39",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
  },
  {
    name: "Japan",
    code: "+81",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
  },
  {
    name: "Kazakhstan",
    code: "+7",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg",
  },
  {
    name: "Kenya",
    code: "+254",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
  },
  {
    name: "Kuwait",
    code: "+965",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg",
  },
  {
    name: "Malaysia",
    code: "+60",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
  },
  {
    name: "Mali",
    code: "+223",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg",
  },
  {
    name: "Mexico",
    code: "+52",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
  },
  {
    name: "Morocco",
    code: "+212",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",
  },
  {
    name: "Mozambique",
    code: "+258",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg",
  },
  {
    name: "Netherlands",
    code: "+31",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
  },
  {
    name: "Nicaragua",
    code: "+505",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg",
  },
  {
    name: "Nigeria",
    code: "+234",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
  },
  {
    name: "Norway",
    code: "+47",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
  },
  {
    name: "Pakistan",
    code: "+92",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
  },
  {
    name: "Panama",
    code: "+507",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg",
  },
  {
    name: "Paraguay",
    code: "+595",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg",
  },
  {
    name: "Peru",
    code: "+51",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg",
  },
  {
    name: "Philippines",
    code: "+63",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
  },
  {
    name: "Qatar",
    code: "+974",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg",
  },
  {
    name: "Russia",
    code: "+7",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
  },
  {
    name: "Rwanda",
    code: "+250",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg",
  },
  {
    name: "Saudi Arabia",
    code: "+966",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",
  },
  {
    name: "Senegal",
    code: "+221",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg",
  },
  {
    name: "South Africa",
    code: "+27",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
  },
  {
    name: "South Korea",
    code: "+82",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
  },
  {
    name: "Spain",
    code: "+34",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
  },
  {
    name: "Sudan",
    code: "+249",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg",
  },
  {
    name: "Suriname",
    code: "+597",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg",
  },
  {
    name: "Sweden",
    code: "+46",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg",
  },
  {
    name: "Tanzania",
    code: "+255",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg",
  },
  {
    name: "Thailand",
    code: "+66",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
  },
  {
    name: "Turkey",
    code: "+90",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
  },
  {
    name: "Uganda",
    code: "+256",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg",
  },
  {
    name: "Ukraine",
    code: "+380",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
  },
  {
    name: "United Arab Emirates",
    code: "+971",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
  },
  {
    name: "United Kingdom",
    code: "+44",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg",
  },
  {
    name: "United States",
    code: "+1",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
  },
  {
    name: "Uruguay",
    code: "+598",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg",
  },
  {
    name: "Venezuela",
    code: "+58",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg",
  },
  {
    name: "Vietnam",
    code: "+84",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
  },
  {
    name: "Zambia",
    code: "+260",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg",
  },
  {
    name: "Zimbabwe",
    code: "+263",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg",
  }
];


const city = [
  {
    name: "Ambato",
  },
  {
    name: "Quito",  
  },

]

const BrandComponent = ({ detalleMarca }: props) => {
  const brandDetails = detalleMarca;
  const [ubications, setUbications] = useState<Sector[]>();
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("abc");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [phone2, setPhone2] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [brand, setBrand] = useState("");
  const [phoneCode, setPhoneCode] = useState("+593"); // Có
  const [flag, setFlag] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Flag_of_Ecuador.png"
  ); // Bandera inicial de Ecuador
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [phoneError, setPhoneError] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const [inversion, setInversion] = useState<Inversion[]>([]);
  /*const [city, setCity] = useState<City[]>([]); */

  const [inversionElegida, setInversionElegida] = useState<string>("");

  const getInversion = async () => {
    const response = await axios.get("/api/v1/inversion/");
    setInversion(response.data);
  };

  useEffect(() => {
    getInversion();
  }, []);

  const handleInversionChange = (e: any) => {
    setInversionElegida(e.target.value);
  };


  /*const handCity = (e: any) => {
    setCity(e.target.value);
  }; */


  const handleCountryChange = (e: any) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    console.log(selectedCountry);

    // Buscar los datos del país seleccionado (código y bandera)
    const selectedCountryData = countries.find(
      (c) => c.name === selectedCountry
    );

    if (selectedCountryData) {
      console.log(selectedCountryData);
      setPhoneCode(selectedCountryData.code); // Actualiza el código de teléfono
      setFlag(selectedCountryData.flag); // Actualiza la bandera
      setPhone(selectedCountryData.code); // Inicializa el campo de teléfono con el nuevo código
      setPhone2("");
    }
  };

  // Phone validation function
  const validatePhoneNumber = (phoneNumber: string): { isValid: boolean; message: string } => {
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

  const handlePhoneChange = (e: any) => {
    const value = e.target.value;
    // Remove any non-numeric characters
    const numbersOnly = value.replace(/\D/g, '');
    // Remove '593' or '0' from the start if present
    const cleanNumber = numbersOnly.replace(/^(593|0)/, '');
    // Limit to 9 digits
    const limitedNumbers = cleanNumber.slice(0, 9);
    
    setPhone(`${phoneCode}${limitedNumbers}`); // Mantener el código y actualizar el número
    setPhone2(limitedNumbers);
    
    // Update validation state without showing toast
    const validation = validatePhoneNumber(limitedNumbers);
    setIsPhoneValid(validation.isValid);
    setPhoneError(validation.message);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number on submit
    const phoneValidation = validatePhoneNumber(phone2);
    if (!phoneValidation.isValid) {
      toast.error(phoneValidation.message);
      setIsPhoneValid(false);
      return;
    }
    
    if (
      name !== "" &&
      surname !== "" &&
      email !== "" &&
      phone !== "" &&
      country !== "" &&
      province !== "" &&
      brand !== "" &&
      message !== "" &&
      inversionElegida !== ""
    ) {
    // Asegurar que phone es una cadena antes de procesarla
    let formattedPhone = phone;
    if (typeof phone === "string") {
      // Si phone comienza con el código de país, eliminar el 0 después del código
      if (phone.startsWith(phoneCode)) {
        formattedPhone = phoneCode + phone.substring(phoneCode.length).replace(/^0/, "");
      } else {
        // Si no tiene código de país, solo eliminar el primer 0 si existe
        formattedPhone = phone.replace(/^0/, "");
        formattedPhone = phoneCode + formattedPhone;
      }
    }
    
    // Imprimir el valor corregido en la consola
    console.log("Formatted Phone:", formattedPhone);

      let parametrosn =
        "nombre=" +
        name +
        "&apellido=" +
        surname +
        "&pais=" +
        country +
        "&provincia=" +
        province +
        "abc" +
        "&telefono=" +
        formattedPhone +
        "&email=" +
        email +
        "&comentarios=" +
        message +
        "&nombremarca=" +
        brand +
        "&inversion=" +
        `${inversionElegida}`;

      const response = axios.post("/marca/send_email/", parametrosn, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Bearer 123456",
        },
      });
      console.log(formattedPhone);

      axios
        .post("https://api.escala.com/new-lead/", {
          contact_first_name: name,
          contact_last_name: surname,
          contact_job_title: country,
          contact_phone_number: formattedPhone,
          contact_email: email,
          cf_contact_comentario_aycp_text: message,
          inversion: inversionElegida,
          account_name: brand,
          cf_contact_marca_de_interes_yton_text: brand,
          form_id: "8689a576-ae58-11ee-9c93-22ce4c57bdd0",
          form_name: "Marcas",
          form_fields_metadata: {
              contact_first_name: {
                  name: "Nombre",
                  type: "text",
                  lead: "contact_first_name",
                  required: "False",
                  options: [],
                  default: "",
                  regex: "",
                  placeholder: ""
              },
              contact_last_name: {
                  name: "Apellido",
                  type: "text",
                  lead: "contact_last_name",
                  required: "False",
                  options: [],
                  default: "",
                  regex: "",
                  placeholder: ""
              },
              contact_job_title: {
                  name: "País",
                  type: "text",
                  lead: "contact_job_title",
                  required: "False",
                  options: [],
                  default: "",
                  regex: "",
                  placeholder: ""
              },
              contact_phone_number: {
                  name: "Teléfono",
                  type: "text",
                  lead: "contact_phone_number",
                  required: "False",
                  options: [],
                  default: "",
                  regex: "",
                  placeholder: ""
              },
              contact_email: {
                  name: "Email",
                  type: "text",
                  lead: "contact_email",
                  required: "True",
                  options: [],
                  default: "",
                  regex: "[a-z0-9-A-Z!#$%&'*+/=?^_{|}~-]+(?:\\.[a-z0-9-A-Z!#$%&'*+/=?^_{|}~-]+)@(?:[a-z0-9-A-Z](?:[a-z0-9-A-Z][a-z0-9-A-Z])?\\.)+[a-z0-9-A-Z](?:[a-z0-9-A-Z]*[a-z0-9-A-Z])+",
                  placeholder: ""
              },
              cf_contact_comentario_aycp_text: {
                  name: "Comentario",
                  type: "text",
                  lead: "cf_contact_comentario_aycp_text",
                  required: "False",
                  options: [],
                  default: "",
                  regex: "",
                  placeholder: ""
              },
              account_name: {
                  name: "Marca",
                  type: "text",
                  lead: "account_name",
                  required: "True",
                  options: [],
                  default: "",
                  regex: "",
                  placeholder: ""
              },
              cf_contact_marca_de_interes_yton_text: {
                  name: "Marca de interés",
                  type: "text",
                  lead: "cf_contact_marca_de_interes_yton_text",
                  required: "False",
                  options: [],
                  default: "",
                  regex: "",
                  placeholder: ""
              },
             inversion: {
            name: "Inversion",
            type: "text",
            lead: "inversion",
            required: "False",
            options: [],
            default: "",
            regex: "",
            placeholder: ""
        }

          },
          create_deals: true,
          update_deal_value: false,
          notify_leads: true,
          notify_leads_recipients: [
              "asesoria@fplusglobal.com"
          ],
          notify_submits: false,
          notify_submits_recipients: [],
          page_url: "http://127.0.0.1:5500/index.html",
          page_title: "",
          tenant_id: "a9792f78-9064-11ee-b842-ee9d42ce137e",
          customer_id: "a9792f78-9064-11ee-b842-ee9d42ce137e",
          visitor_id: "d5a9a89d-6fbf-400f-bc4e-cc6e147bda69",
          visit_id: "fbfe1e23-9a88-4508-91a0-e4afcaecfce9",
          utm_type: "referral",
          utm_source: "127.0.0.1",
          utm_medium: "referral",
          utm_campaign: "(none)",
          utm_terms: "(none)",
          utm_content: "/",
          escala_acc: "(none)",
          escala_cam: "(none)",
          escala_grp: "(none)",
          escala_ad: "(none)",
          escala_net: "(none)",
          escala_src: "127.0.0.1",
          escala_la: "true",
          escala_ol: "false",
          first_utm_type: "referral",
          first_utm_source: "127.0.0.1",
          first_utm_medium: "referral",
          first_utm_campaign: "(none)",
          first_utm_terms: "(none)",
          first_utm_content: "/",
          first_escala_acc: "(none)",
          first_escala_cam: "(none)",
          first_escala_grp: "(none)",
          first_escala_ad: "(none)",
          first_escala_net: "(none)",
          first_escala_src: "127.0.0.1",
          first_escala_la: "true",
          first_escala_ol: "false",
          device_type: "desktop",
          device_brand: "",
          device_model: "",
          device_client_type: "browser",
          device_client_name: "Chrome",
          device_client_version: "131.0",
          device_client_engine: "Blink",
          device_os_name: "Windows",
          device_os_version: "10.0",
          device_os_platform: "x64",
          contact_phone: null,
          runner_version: "0.2.1"
      })
        .then(console.log)
        .catch(console.error);
      response
        .then(() => {
          if (
            name !== "" &&
            surname !== "" &&
            email !== "" &&
            phone !== "" &&
            //   province !== "" &&
            country !== "" &&
            message !== ""
          ) {
            toast.success(
              "Mensaje enviado, pronto un asesor se contactará contigo."
            );
            setName("");
            setSurname("");
            setEmail("");
            setPhone("");
            // setProvince("");
            setCountry("");
            setMessage("");
          }

          // console.log("El csrf de response",csrftoken)
        })
        .catch((error) => {
          console.log(error);
          // toast.error(
          //   "Lo sentimos, hubo un error al enviar tu mensaje. Inténtalo nuevamente."
          // );
          toast.success(
            "Mensaje enviado, pronto un asesor se contactará contigo."
          );
        });
    }
  };

  useEffect(() => {
    getUbications().then((newData) => setUbications(newData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const CustomDot = ({ index, onClick, active }: DotProps) => {
    return (
      <li
        className={`block lg:hidden w-3 mx-2 cursor-pointer aspect-square rounded-full ${
          active ? "bg-black" : "bg-[#d6d6d6]"
        }`}
        onClick={() => onClick!()}
      ></li>
    );
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const details = [
    {
      image: cash,
      alt: "cash",
      title: "Alta <br />Rentabilidad",
      color: brandDetails?.color_ocho_cajas,
    },
    {
      image: bag,
      alt: "bag",
      title: "Negocio <br />Comprobado",
      color: brandDetails?.color_ocho_cajas,
    },
    {
      image: graph,
      alt: "graph",
      title: "Marca <br />Posicionada",
      color: brandDetails?.color_ocho_cajas,
    },
    {
      image: compass,
      alt: "compass",
      title: "Exclusividad <br />Zona Geográfica",
      color: brandDetails?.color_ocho_cajas,
    },
    {
      image: pin,
      alt: "pin",
      title: "Ubicación y <br />Montaje",
      color: brandDetails?.color_ocho_cajas,
    },
    {
      image: signature,
      alt: "signature",
      title: "Know-How <br />del Negocio",
      color: brandDetails?.color_ocho_cajas,
    },
    {
      image: board,
      alt: "board",
      title: "Formación y <br />Capacitación",
      color: brandDetails?.color_ocho_cajas,
    },
    {
      image: megaphone,
      alt: "megaphone",
      title: "Asistencia <br />Publicitaria",
      color: brandDetails?.color_ocho_cajas,
    },
  ];

  const whiteBoxes = [
    {
      title: "Regalias",
      value: brandDetails?.regalias,
    },
    {
      title: "Fee de Marketing",
      value: brandDetails?.fee_de_marketing,
    },
    {
      title: "Duración del contrato",
      value: brandDetails?.duracion_contrato,
    },
    {
      title: "¿Valor de Renovación?",
      value: Number(brandDetails?.valor_renovacion)
        .toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        })
        .replace(",", "."),
    },
    {
      title: "Metros local",
      value: brandDetails?.metros_local,
    },
    {
      title: "Recuperación inversión",
      value: brandDetails?.recuperacion_inversion,
    },
  ];

  useEffect(() => {
    setBrand(brandDetails?.nombre);
  }, [brandDetails]);

  return (
    <main>
      <section>
        <Navbar />
      </section>

      <section>
        <div className="bg-[#0d132f] h-20 z-[1] relative" />
      </section>
      {brandDetails ? (
        <>
          <section
            style={{
              backgroundColor: brandDetails?.color_detalle_marca,
              color: brandDetails?.color_texto_detalle_marca,
            }}
          >
            <div className="py-4 relative  w-full flex justify-center">
              <div>
                <button
                  onClick={() => router.back()}
                  className="absolute flex items-center left-5"
                >
                  <IoIosArrowBack /> Regresar al buscador
                </button>
              </div>
              <div className="flex flex-col justify-center items-center lg:mt-0 mt-10">
                <div className="h-24 mb-5">
                  <img
                    loading="eager"
                    width={10000}
                    height={10000}
                    draggable={false}
                    data-aos="fade-down"
                    src={brandDetails.imagen_detalle_marca}
                    alt={brandDetails.alt_imagen_detalle_marca}
                    title={brandDetails.title_imagen_detalle_marca}
                    className="images"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="max-w-[700px] text-center text-lg"
                >
                  {brandDetails?.descripcion}
                </div>
              </div>
            </div>

            <div
              style={{ backgroundColor: brandDetails?.color_detalle_marca }}
              className={`lg:h-screen h-[40vh] overflow-hidden`}
            >
              <img
                loading="eager"
                width={10000}
                height={10000}
                draggable={false}
                src={brandDetails?.imagen_banner}
                alt=""
                className="images"
              />
            </div>

            <div
              className={`flex justify-center bg-[${brandDetails?.color_promesa_valor}]`}
              style={{ backgroundColor: brandDetails?.color_promesa_valor }}
            >
              <iframe
                className="w-[80%] h-[13.4375rem] lg:h-80 lg:w-auto aspect-video rounded-3xl my-10"
                style={{ boxShadow: "4px 21px 21px rgba(0,0,0,.45)" }}
                width="560"
                height="315"
                src={brandDetails?.video_marca}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div
              className="h-full"
              style={{ backgroundColor: brandDetails?.color_promesa_valor }}
            >
              <div className="flex py-8 lg:flex-row flex-col overflow-hidden">
                <div className="flex items-center justify-center lg:w-2/5">
                  <div className="max-w-[90%] w-auto lg:h-[20em] h-40 overflow-hidden">
                    <img
                      loading="eager"
                      width={10000}
                      height={10000}
                      draggable={false}
                      src={brandDetails?.imagen_producto}
                      alt={brandDetails?.alt_imagen_producto}
                      title={brandDetails?.title_imagen_producto}
                      className="w-full h-full object-contain"
                      data-aos="fade-right"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:w-3/5 lg:mt-0 mt-5">
                  <div
                    data-aos="fade-down"
                    style={{
                      fontFamily: "Mukata Mahee Bold",
                      color: brandDetails?.color_texto_titulo_promesa_valor,
                    }}
                    className="lg:text-7xl text-2xl ml-2"
                  >
                    {brandDetails?.titulo_promesa_valor}
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    style={{
                      color: brandDetails?.color_texto_cuerpo_promesa_valor,
                    }}
                    className="lg:text-2xl text-base lg:pt-0 lg:px-0 px-4 pt-4"
                  >
                    {brandDetails?.cuerpo_promesa_valor}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="h-full overflow-hidden">
              <div className="w-screen flex justify-center overflow-hidden">
                <Carousel
                  arrows
                  draggable
                  showDots
                  infinite
                  autoPlay
                  autoPlaySpeed={3000}
                  customDot={<CustomDot />}
                  customRightArrow={
                    <button className="hidden lg:block absolute right-4 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full">
                      <IoIosArrowForward className="text-xl" />
                    </button>
                  }
                  customLeftArrow={
                    <button className="hidden lg:block absolute left-4 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full">
                      <IoIosArrowBack className="text-xl" />
                    </button>
                  }
                  responsive={responsive}
                  className="max-w-[1200px] w-screen overflow-hidden lg:m-0 mx-8 my-4"
                >
                  <div className="rounded-xl overflow-hidden lg:mx-1 lg:my-5 h-[270px]">
                    <img
                      loading="eager"
                      width={10000}
                      height={10000}
                      draggable={false}
                      src={brandDetails?.imagen_local_1}
                      alt={brandDetails?.alt_imagen_local_1}
                      title={brandDetails?.title_imagen_local_1}
                      className="images select-none"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden mx-1 my-5 h-[270px]">
                    <img
                      loading="eager"
                      width={10000}
                      height={10000}
                      draggable={false}
                      src={brandDetails?.imagen_local_2}
                      alt={brandDetails?.alt_imagen_local_2}
                      title={brandDetails?.title_imagen_local_2}
                      className="images select-none"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden mx-1 my-5 h-[270px]">
                    <img
                      loading="eager"
                      width={10000}
                      height={10000}
                      draggable={false}
                      src={brandDetails?.imagen_local_3}
                      alt={brandDetails?.alt_imagen_local_3}
                      title={brandDetails?.title_imagen_local_3}
                      className="images select-none"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden mx-1 my-5 h-[270px]">
                    <img
                      loading="eager"
                      width={10000}
                      height={10000}
                      draggable={false}
                      src={brandDetails?.imagen_local_4}
                      alt={brandDetails?.alt_imagen_local_4}
                      title={brandDetails?.title_imagen_local_4}
                      className="images select-none"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden mx-1 my-5 h-[270px]">
                    <img
                      loading="eager"
                      width={10000}
                      height={10000}
                      draggable={false}
                      src={brandDetails?.imagen_local_5}
                      alt={brandDetails?.alt_imagen_local_5}
                      title={brandDetails?.title_imagen_local_5}
                      className="images select-none"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden mx-1 my-5 h-[270px]">
                    <img
                      loading="eager"
                      width={10000}
                      height={10000}
                      draggable={false}
                      src={brandDetails?.imagen_local_6}
                      alt={brandDetails?.alt_imagen_local_6}
                      title={brandDetails?.title_imagen_local_6}
                      className="images select-none"
                    />
                  </div>
                </Carousel>
              </div>
              <div className="h-full w-full flex flex-col gap-4 items-center">
                <div
                  style={{ fontFamily: "Mukata Mahee Bold" }}
                  className="pt-8 flex justify-center text-black lg:text-[3.5rem] text-2xl lg:leading-[3.125rem] text-center lg:w-[60%] lg:px-0 px-7"
                >
                  ¿Por qué deberías comprar una Franquicia?
                </div>
                <div className="pt-8 flex justify-center text-black lg:text-[1.25rem] text-sm lg:leading-[1.875rem] text-center lg:w-[60%] lg:px-0 px-4">
                  “Sabias qué adquirir una franquicia es invertir en un negocio
                  de éxito comprobado, VS un 95% de emprendimientos que tienen
                  el riesgo de fracasar durante los 3 primeros años”
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-[90%] py-5 grid lg:grid-cols-4 grid-cols-2">
                  {details.map((detail, index) => (
                    <div
                      key={index}
                      className="w-full flex justify-center mb-4"
                      data-aos="flip-left"
                    >
                      <div
                        className="rounded-3xl w-[95%]"
                        style={{ backgroundColor: detail.color }}
                      >
                        <div className="flex justify-center">
                          <div className=" lg:h-[6.5em] h-11 lg:w-[7em] w-12 my-[0.5em]">
                            <Image
                              loading="eager"
                              unoptimized
                              draggable={false}
                              src={detail.image}
                              alt={detail.alt}
                              className="h-full w-full object-contain"
                              width={500}
                              height={500}
                            />
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <p
                            style={{ fontFamily: "Mukata Mahee Bold" }}
                            className="text-white text-[1.5625em] leading-[1.4375rem] pt-1 text-center"
                            dangerouslySetInnerHTML={{ __html: detail.title }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className={`h-full relative`}>
              <div className="h-full w-full absolute">
                <Image
                  unoptimized
                  loading="eager"
                  src={spotLight}
                  alt=""
                  className="images"
                  draggable={false}
                />
              </div>
              <div className="relative top-0 w-full h-full">
                <div className="pt-[5em] mb-[1rem] flex justify-center">
                  <p
                    style={{ fontFamily: "Mukata Mahee Bold" }}
                    className="text-white leading-[2.375rem] text-[3.25em] text-center"
                  >
                    Empieza tu negocio con
                  </p>
                </div>
                <div className="flex justify-center">
                  <p className="text-[#47505a] leading-[2.75rem] text-[2.8125em] text-center">
                    {Number(brandDetails?.valor_marca)
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      })
                      .replace(",", ".")}
                  </p>
                </div>
                <div className="flex justify-center pt-[0.75em]">
                  <p className="text-white leading-[1.75rem] text-[1.875em] text-center">
                    Con ganancias aproximadas <br />
                    mensuales desde
                  </p>
                </div>
                <div className="flex justify-center mt-[1em]">
                  <p
                    style={{ fontFamily: "Mukata Mahee Bold" }}
                    className="text-white leading-[5.625rem] italic text-[6em] text-center"
                  >
                    {brandDetails?.ganancia_mensual}
                  </p>
                </div>
                <div className="flex justify-center mt-[1em]">
                  <div className="bg-white h-[0.5em] w-[50em]" />
                </div>
                <div className="flex justify-center">
                  <div className="mt-[3em] lg:w-[80%] w-[90%] flex lg:flex-row flex-col justify-center">
                    <div className="bg-white rounded-[1.9375em] lg:h-[12.4375em] h-48 mx-[1em] mb-[1rem] lg:w-[27.5em]">
                      <div className="pt-[4em] h-1/2 flex justify-center">
                        <p
                          style={{ fontFamily: "Mukata Mahee Bold" }}
                          className="lg:text-[2.25em] lg:leading-[2rem] text-2xl text-center"
                        >
                          Valor de Franquicia
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{ fontFamily: "Mukata Mahee Bold" }}
                          className="lg:text-[1.6875em] lg:leading-[3.75rem] text-xl text-center relative -bottom-4"
                        >
                          {" "}
                          <span className="text-[#47505a] text-[2.125em]">
                            {" "}
                            {Number(brandDetails?.valor_franquicia)
                              .toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                                maximumFractionDigits: 0,
                              })
                              .replace(",", ".")}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="bg-white rounded-[1.9375em] lg:h-[12.4375em] h-48 mx-[1em] mb-[1rem] lg:w-[27.5em]">
                      <div className="pt-[2em] h-1/2 flex justify-center">
                        <p
                          style={{ fontFamily: "Mukata Mahee Bold" }}
                          className="lg:text-[2.25em] lg:leading-[2rem] text-2xl text-center"
                        >
                          Implementación <br />
                          del Local
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{ fontFamily: "Mukata Mahee Bold" }}
                          className="lg:text-[1.6875em] lg:leading-[3.75rem] text-xl text-center relative -bottom-4"
                        >
                          {" "}
                          <span className="text-[#47505a] text-[2.125em]">
                            {" "}
                            {Number(brandDetails?.valor_adecuacion_local)
                              .toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                                maximumFractionDigits: 0,
                              })
                              .replace(",", ".")}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-[1rem] pb-[3rem]">
                  <div className="w-[90%]">
                    <div className="flex flex-wrap justify-between">
                      {whiteBoxes.map((box, index) => (
                        <div
                          key={index}
                          className="px-[1.25em] pb-[0.625em] pt-[1.25em] lg:w-[30%] md:w-[45%] w-full"
                        >
                          <div className="h-[30%]">
                            <p
                              style={{ fontFamily: "Mukata Mahee Bold" }}
                              className="lg:text-[1em] text-xs pb-[0.3125em] pl-[0.625em] text-[#47505a] italic"
                            >
                              {box.title}
                            </p>
                          </div>
                          <div className="bg-white rounded-lg h-[40px] w-full">
                            <div className="flex items-center h-full">
                              <p
                                style={{ fontFamily: "Mukata Mahee Bold" }}
                                className="lg:text-[1.125em] text-xs pl-[0.625em] text-[#47505a] italic"
                              >
                                {box.value}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="h-full">
              <div className="flex justify-center pt-[1.5rem] mb-[1rem]">
                <div data-aos="fade-down" className="h-[9.375em] w-auto">
                  <img
                    loading="eager"
                    width={10000}
                    height={10000}
                    src={brandDetails?.imagen_formulario}
                    alt={brandDetails?.alt_imagen_formulario}
                    title={brandDetails?.title_imagen_formulario}
                    className="images"
                    draggable={false}
                  />
                </div>
              </div>
              <div className="flex justify-center" data-aos="fade-down">
                <p
                  style={{ fontFamily: "Mukata Mahee Bold" }}
                  className="text-[35px] text-center"
                >
                  Comienza tu propio negocio
                </p>
              </div>
              <div className="flex justify-center" data-aos="fade-down">
                <p
                  style={{ fontFamily: "Mukata Mahee Bold" }}
                  className="text-[35px] py-[16.25px] text-center"
                >
                  CONTÁCTANOS
                </p>
              </div>
              <div className="flex justify-center">
                <div className="lg:w-[60%] w-[90%]">
                  <form onSubmit={handleSubmit}>
                    <div className="flex lg:flex-wrap lg:flex-row flex-col">
                      <div className="form-group lg:w-1/3 w-full py-2 px-2">
                        <input
                          type="text"
                          className="form-control"
                          name="nombre"
                          value={name}
                          onChange={(e: any) => setName(e.target.value)}
                          placeholder="Nombre"
                          required
                        />
                      </div>
                      <div className="form-group lg:w-1/3 w-full py-2 px-2">
                        <input
                          type="text"
                          className="form-control"
                          name="apellido"
                          value={surname}
                          onChange={(e: any) => setSurname(e.target.value)}
                          placeholder="Apellido"
                          required
                        />
                      </div>
                      <div className="form-group lg:w-1/3 w-full py-2 px-2">
                        <select
                          value={inversionElegida}
                          onChange={handleInversionChange}
                          className="card-select inline-block text-2xl lg:text-base"
                        >
                          <option value="" selected>
                            Inversión
                          </option>
                          {inversion.map((inv, index) => (
                            <option key={index} value={inv.nombre_url}>
                              {inv.nombre}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* País de Interés (Ahora ocupa toda la fila) */}

                      {/* Comentado - No borrar */}
                      {/*
                    <div className="relative form-group lg:w-1/2 w-full py-2 px-2 cursor-pointer">
                      <div
                        className={`absolute top-0 bottom-0 flex items-center right-5 pointer-events-none`}
                      >
                        <IoIosArrowDown
                          style={{
                            color: brandDetails?.color_boton_formulario,
                          }}
                        />
                      </div>
                      <select
                        className="form-control cursor-pointer"
                        id="province"
                        name="province"
                        value={province}
                        onChange={(e: any) => setProvince(e.target.value)}
                      >
                        <option value="" disabled selected>
                          Provincia de Interés
                        </option>
                        {ubications?.map((ubication) => (
                          <option value={ubication.nombre} key={ubication.id}>
                            {ubication.nombre}
                          </option>
                        ))}
                      </select>
                    </div>
                    */}
                      <div className="form-group lg:w-1/2 w-full py-2 px-2 relative">
                        <div className="flex items-center border rounded-lg overflow-hidden">
                          <div className="flex flex-col items-center md:flex-row gap-4 border-r w-full">
                            <select
                              className="form-control cursor-pointer lg:w-[40%!important]"
                              id="pais-interes"
                              name="pais"
                              value={country}
                              onChange={handleCountryChange}
                            >
                              <option key={111} value="" disabled>
                                País de Interés
                              </option>
                              {countries.map((country) => (
                                <option value={country.name} key={country.code}>
                                  {country.name}
                                </option>
                              ))}
                            </select>
                            <div className="flex items-center gap-2">
                              <img
                                src={flag}
                                alt={`${country} Flag`}
                                className="w-6 h-4"
                              />
                              <span className="text-md">{phoneCode}</span>
                              <div className="relative w-full">
                                <input
                                  type="text"
                                  className={`form-control flex-1 pl-2 ${!isPhoneValid ? 'border-2 border-red-500' : ''}`}
                                  name="telefono"
                                  value={phone2}
                                  onChange={handlePhoneChange}
                                  placeholder="Teléfono celular"
                                  required
                                />
                                {phoneError && (
                                  <span className="absolute left-0 -bottom-5 text-xs text-red-500">
                                    {phoneError}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group lg:w-1/2 w-full py-2 px-2">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={email}
                          onChange={(e: any) => setEmail(e.target.value)}
                          id="InputEmail1"
                          placeholder="Correo electrónico"
                          required
                        />
                      </div>

                      
                    </div>
                    <div className="form-group py-2 px-2">
                      <textarea
                        className="form-control"
                        name="comentarios"
                        value={message}
                        onChange={(e: any) => setMessage(e.target.value)}
                        required
                        id="exampleFormControlTextarea1"
                        placeholder="Comentarios"
                        rows={3}
                      ></textarea>
                    </div>
                    
                    <input
                      id="nombremarca"
                      name="nombremarca"
                      type="hidden"
                      value={brand}
                      onChange={(e: any) =>
                        setBrand(brandDetails?.nombre || "")
                      }
                    />
                    <div className="flex justify-center py-12 mb-10">
                      <button
                        onClick={() => setBrand(brandDetails?.nombre || "")}
                        type="submit"
                        style={{
                          backgroundColor: brandDetails?.color_boton_formulario,
                        }}
                        className="text-white px-10 rounded-lg py-2 text-lg"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="relative flex justify-center items-center py-72">
          <div
            style={{ fontFamily: "Mukata Mahee Bold" }}
            className="text-[#fa5e4d] text-9xl animate-spin"
          >
            <CgSpinnerTwoAlt />
          </div>
        </div>
      )}

      <section>
        <Footer />
      </section>
      <ChatBot />
    </main>
  );
};

export default BrandComponent;