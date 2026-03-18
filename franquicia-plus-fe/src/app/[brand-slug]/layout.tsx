import { Metadata } from "next";
import { notFound } from "next/navigation";
import getBrandDetails from "../utils/getBrandDetails";

type Props = {
  params: { "brand-slug": string };
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const brandSlug = params["brand-slug"];
  const DetalleMarca = await getBrandDetails(brandSlug);

  if (!DetalleMarca) {
    return { title: "Franquicia | FPlus" };
  }

  return {
    title: "FPlus | " + DetalleMarca.nombre,
    description: DetalleMarca.description_html,
    alternates: {
      canonical: `https://fplusglobal.com/${brandSlug}`,
    },
  };
}

const PageLayout = async (props: any) => {
  const DetalleMarca = await getBrandDetails(props.params["brand-slug"]);

  if (!DetalleMarca) {
    notFound();
  }

  return (
    <div>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css"
        />
      </head>
      <div>{props.children}</div>
    </div>
  );
};

export default PageLayout;
