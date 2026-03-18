import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultores de franquicias | F+ | franquiciamos tu negocio",
  description:
    "Somos consultores de Franquicias en Ecuador , te enseñamos a franquiciar tu negocio o marca, a travez de una consultoría certificada por Franquicia Plus.",
  alternates: {
    canonical: "https://fplusglobal.com/consultores-de-franquicias",
  },
};

const PageLayout = async (props: any) => {
  return <div>{props.children}</div>;
};

export default PageLayout;
