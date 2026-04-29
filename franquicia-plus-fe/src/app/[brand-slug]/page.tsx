import { Metadata } from "next";
import ErrorPage from "@/components/ErrorPage";
import getBrandDetails from "../utils/getBrandDetails";
import getBrandLogo from "../utils/getBrandLogo";
import BrandComponent from "./BrandComponent";

const SITE_URL = "https://fplusglobal.com";
const FALLBACK_IMAGE = `${SITE_URL}/FranquiciaPlusgoogle.png`;

// Elimina etiquetas HTML para usar el texto plano en meta tags
const stripHtml = (html: string) => html.replace(/<[^>]*>/g, "").trim();

export async function generateMetadata(props: any): Promise<Metadata> {
  const slug = props.params["brand-slug"];
  const [brand, logo] = await Promise.all([
    getBrandDetails(slug),
    getBrandLogo(slug),
  ]);

  if (!brand) {
    return {
      title: "FPlus | Franquicias y Negocios",
      description: "Descubre las mejores franquicias y negocios rentables con FPlus Global.",
      robots: { index: false, follow: false },
      openGraph: { images: [FALLBACK_IMAGE] },
    };
  }

  // Usa los campos SEO del backend si existen, sino construye desde nombre/descripcion
  const rawTitle = brand.title_html
    ? stripHtml(brand.title_html)
    : `${brand.nombre} | FPlus Global`;
  const rawDescription = brand.description_html
    ? stripHtml(brand.description_html)
    : brand.descripcion || "Descubre esta franquicia en FPlus Global.";

  const title = rawTitle.length > 0 ? rawTitle : `${brand.nombre} | FPlus Global`;
  const description = rawDescription.slice(0, 160);
  const image = logo || brand.imagen_detalle_marca || brand.imagen_banner || FALLBACK_IMAGE;
  const pageUrl = `${SITE_URL}/${brand.url}`;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      type: "website",
      siteName: "FPlus Global",
      images: [{ url: image, width: 480, height: 338, alt: brand.nombre }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      site: "@franquiciaplus",
    },
  };
}

const BrandPage = async (props: any) => {
  const slug = props.params["brand-slug"];
  const [DetalleMarca, logo] = await Promise.all([
    getBrandDetails(slug),
    getBrandLogo(slug),
  ]);

  if (!DetalleMarca) {
    return <ErrorPage />;
  }

  const pageUrl = `${SITE_URL}/${DetalleMarca.url}`;
  const image = logo || DetalleMarca.imagen_detalle_marca || DetalleMarca.imagen_banner || FALLBACK_IMAGE;
  const description = DetalleMarca.description_html
    ? stripHtml(DetalleMarca.description_html)
    : DetalleMarca.descripcion || "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: DetalleMarca.nombre,
    description,
    image,
    url: pageUrl,
    brand: {
      "@type": "Brand",
      name: DetalleMarca.nombre,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: DetalleMarca.valor_franquicia ?? DetalleMarca.valor_marca,
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
    provider: {
      "@type": "Organization",
      name: "FPlus Global",
      url: SITE_URL,
      logo: `${SITE_URL}/FranquiciaPlusgoogle.png`,
      sameAs: [
        "https://www.facebook.com/fplusecuador",
        "https://www.instagram.com/fplusglobal",
        "https://www.linkedin.com/company/78687961",
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BrandComponent detalleMarca={DetalleMarca} />
    </>
  );
};

export default BrandPage;
