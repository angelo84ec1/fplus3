import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Somos Franquicia Plus | Comercialización y Consultoría",
  description:
    "Somos una solución para marcas que quieren franquiciar su negocio o que ya son Franquiciantes. Comercializamos negocios de oportunidad en Ecuador.",
  alternates: {
    canonical: "https://fplusglobal.com/somos-franquicia-plus-consultora",
  },
};

const PageLayout = async (props: any) => {
  return <div>{props.children}</div>;
};

export default PageLayout;
