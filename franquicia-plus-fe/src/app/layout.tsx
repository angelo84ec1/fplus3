"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import "../assets/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
import TagManager from 'react-gtm-module';
import { useEffect } from "react";

const tagManagerArgs = {
  gtmId: 'GTM-T4SPCD3G',
};

const inter = Inter({ subsets: ["latin"] });

// URL canónica base (consistente con tu configuración .htaccess)
const CANONICAL_DOMAIN = "https://fplusglobal.com"; // Sin www - según tu .htaccess

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <html lang="es">
      <head>
        <title>FPlus Negocios y Franquicias</title>
        <meta name="description" content="Somos la empresa Líder en el Desarrollo y Comercialización de Negocios y Franquicias desde el 2006." />

        {/* CANONICAL URL - MUY IMPORTANTE para SEO */}
        <link rel="canonical" href={`${CANONICAL_DOMAIN}/`} />

        {/* Meta palabras clave */}
        <meta 
          name="keywords" 
          content="franquicias ecuador, negocios rentables, franquicias disensa, franquicias servientrega, franquicias kfc ecuador, franquicias starbucks, oportunidades de negocio, inversión ecuador, franquicias quito, franquicias guayaquil" 
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />

        {/* Google+ metadata */}
        <meta
          itemProp="name"
          content="Franquicias en Ecuador y Negocios rentables de Oportunidad"
        />
        <meta
          itemProp="description"
          content="Somos la empresa Líder en el Desarrollo y Comercialización de Negocios y Franquicias desde el 2006."
        />
        <meta itemProp="image" content={`${CANONICAL_DOMAIN}/FranquiciaPlusgoogle.png`} />

        {/* Facebook Open Graph metadata - URLs CONSISTENTES */}
        <meta
          property="og:title"
          content="Franquicias en Ecuador y Negocios rentables de Oportunidad"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Franquicias en Ecuador, encuentra negocios rentables en farmacias, franquicias de disensa, servientrega, kfc, starbucks, bogati, sweet and coffee y más."
        />
        <meta
          property="og:image"
          content={`${CANONICAL_DOMAIN}/FranquiciaPlusgoogle.png`}
        />
        <meta property="og:url" content={`${CANONICAL_DOMAIN}/`} />

        {/* Twitter metadata - URLs CONSISTENTES */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={`${CANONICAL_DOMAIN}/`} />
        <meta
          name="twitter:title"
          content="Franquicias en Ecuador y Negocios rentables de Oportunidad"
        />
        <meta
          name="twitter:description"
          content="Franquicias en Ecuador, encuentra negocios rentables en farmacias, franquicias de disensa, servientrega, kfc, starbucks, bogati, sweet and coffee y más."
        />
        <meta
          name="twitter:image"
          content={`${CANONICAL_DOMAIN}/FranquiciaPlusgoogle.png`}
        />
        <meta name="twitter:site" content="@franquiciaplus" />

        {/* Scripts existentes... */}
        <Script
          id="escala-form-6643f731-2129-4d3c-a573-18a15b75a2a9-ran007980220840383234dom"
          type="application/json"
          data-version="0.1.0"
          dangerouslySetInnerHTML={{
            __html: `
              window["escala-form-6643f731-2129-4d3c-a573-18a15b75a2a9-ran007980220840383234dom"]={e:"page",f:"6643f731-2129-4d3c-a573-18a15b75a2a9",l:"es",r:"ran007980220840383234dom"};function escInitFormImpl(e){!function(){var a=window.addEventListener?"addEventListener":"attachEvent";(0,window[a])("attachEvent"===a?"onmessage":"message",function(e){if("escalaForm"===e.data.origin)if("init"===e.data.eventName&&e.data.height){const a=document.querySelector('[escala-element-form="escala-form-'+e.data.instance+'"]');a&&(a.height=e.data.height)}else"escala_lead"===e.data.eventName&&("function"==typeof fbq&&(e.data.leadData&&e.data.leadData.contact_email?fbq("track","Lead",{email:e.data.leadData.contact_email},{eventID:e.data.leadData.deduplicationId}):fbq("track","Lead",{},{eventID:e.data.leadData.deduplicationId})),"function"==typeof gtag&&(e.data.leadData&&e.data.leadData.contact_email?gtag("event","generate_lead",{event_category:"engagement",event_label:"escala_lead",email:e.data.leadData.contact_email}):gtag("event","generate_lead",{event_category:"engagement",event_label:"escala_lead"})),"undefined"!=typeof dataLayer&&dataLayer.push&&"function"==typeof dataLayer.push&&(e.data.leadData&&e.data.leadData.contact_email?dataLayer.push({event:"escala_lead",email:e.data.leadData.contact_email}):dataLayer.push({event:"escala_lead"})))});var t="escala-iframe-{f}-{l}-{r}".replace("{f}",e.f).replace("{l}",e.l).replace("{r}",e.r),n=document.getElementById(t);n&&n.remove(),n=document.createElement("iframe");var o=btoa(JSON.stringify({loc:location.href,title:encodeURIComponent(document.title),ref:document.referrer})),d=(e.f+"-"+e.r+"-"+Math.random()).replace(".","-"),l="form="+e.f+"&lang="+e.l+"&instance="+d+"&host="+o+"&v="+Math.random();n.setAttribute("src","https://escalapages.com/plugins/forms/embed.html?"+l);for(var r=["marginwidth","marginheight","frameborder","vspace","hspace"],c=0;c<r.length;c++)n.setAttribute(r[c],"0");n.setAttribute("scrolling","no"),n.width="100%",n.setAttribute("escala-element-form","escala-form-"+d),n.setAttribute("id",t);var i=document.getElementById("escala-form-"+e.f+"-"+e.r),m=document.getElementsByTagName("body")[0];m.contains(i)?i.parentElement.appendChild(n):m.appendChild(n)}()}function escInitForm(){var e=window["escala-form-6643f731-2129-4d3c-a573-18a15b75a2a9-ran007980220840383234dom"];"elementor-popup"===e.e?jQuery(document).ready(function(){jQuery(document).on("elementor/popup/show",()=>{escInitFormImpl(e)})}):escInitFormImpl(e)}window.addEventListener?window.addEventListener("load",escInitForm,!1):window.attachEvent?window.attachEvent("onload",escInitForm):window.onload=escInitForm;
            `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T4SPCD3G');
            `,
          }}
        />

        <Script
          id="escala-form-9ab1c2d4-dfca-4d15-96b8-64c6e971bd4e-ran05067051907150277dom"
          type="application/json"
          data-version="0.1.0"
          dangerouslySetInnerHTML={{
            __html: `
              window["escala-form-9ab1c2d4-dfca-4d15-96b8-64c6e971bd4e-ran05067051907150277dom"]={e:"page",f:"9ab1c2d4-dfca-4d15-96b8-64c6e971bd4e",l:"es",r:"ran05067051907150277dom"};function escInitFormImpl(e){!function(){var a=window.addEventListener?"addEventListener":"attachEvent";(0,window[a])("attachEvent"===a?"onmessage":"message",function(e){if("escalaForm"===e.data.origin)if("init"===e.data.eventName&&e.data.height){const a=document.querySelector('[escala-element-form="escala-form-'+e.data.instance+'"]');a&&(a.height=e.data.height)}else"escala_lead"===e.data.eventName&&("function"==typeof fbq&&(e.data.leadData&&e.data.leadData.contact_email?fbq("track","Lead",{email:e.data.leadData.contact_email},{eventID:e.data.leadData.deduplicationId}):fbq("track","Lead",{},{eventID:e.data.leadData.deduplicationId})),"function"==typeof gtag&&(e.data.leadData&&e.data.leadData.contact_email?gtag("event","generate_lead",{event_category:"engagement",event_label:"escala_lead",email:e.data.leadData.contact_email}):gtag("event","generate_lead",{event_category:"engagement",event_label:"escala_lead"})),"undefined"!=typeof dataLayer&&dataLayer.push&&"function"==typeof dataLayer.push&&(e.data.leadData&&e.data.leadData.contact_email?dataLayer.push({event:"escala_lead",email:e.data.leadData.contact_email}):dataLayer.push({event:"escala_lead"})))});var t="escala-iframe-{f}-{l}-{r}".replace("{f}",e.f).replace("{l}",e.l).replace("{r}",e.r),n=document.getElementById(t);n&&n.remove(),n=document.createElement("iframe");var o=btoa(JSON.stringify({loc:location.href,title:encodeURIComponent(document.title),ref:document.referrer})),d=(e.f+"-"+e.r+"-"+Math.random()).replace(".","-"),l="form="+e.f+"&lang="+e.l+"&instance="+d+"&host="+o+"&v="+Math.random();n.setAttribute("src","https://escalapages.com/plugins/forms/embed.html?"+l);for(var r=["marginwidth","marginheight","frameborder","vspace","hspace"],c=0;c<r.length;c++)n.setAttribute(r[c],"0");n.setAttribute("scrolling","no"),n.width="100%",n.setAttribute("escala-element-form","escala-form-"+d),n.setAttribute("id",t);var i=document.getElementById("escala-form-"+e.f+"-"+e.r),m=document.getElementsByTagName("body")[0];m.contains(i)?i.parentElement.appendChild(n):m.appendChild(n)}()}function escInitForm(){var e=window["escala-form-9ab1c2d4-dfca-4d15-96b8-64c6e971bd4e-ran05067051907150277dom"];"elementor-popup"===e.e?jQuery(document).ready(function(){jQuery(document).on("elementor/popup/show",()=>{escInitFormImpl(e)})}):escInitFormImpl(e)}window.addEventListener?window.addEventListener("load",escInitForm,!1):window.attachEvent?window.attachEvent("onload",escInitForm):window.onload=escInitForm;
            `,
          }}
        />

        <Script
          id="gtm"
          src={`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(
            "GTM-T4SPCD3G"
          )}`}
          strategy="afterInteractive"
          async
        />
        <Script
          strategy="afterInteractive"
          src="https://api.clientify.net/web-marketing/webforms/external/script/131910.js"
          async
          defer
        />
        <Script
          strategy="afterInteractive"
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org/",
              "@type": "OnlineBusiness",
              address:
                "De los Establos y Av. de los Conquistadores, edificio Cemacol Cumbayá - Quito - Ecuador",
              description:
                "Franquicias en Ecuador, encuentra negocios rentables en farmacias, franquicias de disensa, servientrega, kfc, starbucks, bogati, sweet and coffee y más.",
              email: "info@franquiciaplus.com",
              image: `${CANONICAL_DOMAIN}/FranquiciaPlusgoogle.png`,
              name: "Franquicias en Ecuador y Negocios rentables de Oportunidad", // Corregido "Necogios"
              telephone: "+593(4)371-3181",
              url: `${CANONICAL_DOMAIN}/`,
              sameAs: [
                "https://www.facebook.com/franquiciaplus/",
                "https://www.instagram.com/fplusglobal",
                "https://www.linkedin.com/company/franquicia-plus/",
              ],
            }),
          }}
        />
      </head>
      <body
        style={{ fontFamily: "Mukata Mahee Medium" }}
        className={inter.className}
      >
        {children}
      </body>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        theme="colored"
      />
    </html>
  );
}