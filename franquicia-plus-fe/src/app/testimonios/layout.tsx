import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonios Franquicia Plus | Casos de éxito en Ecuador",
  description:
    "Conoce los testimonios de éxito de franquiciados en Ecuador con Franquicia Plus. Historias reales de emprendedores que lograron su independencia financiera.",
  alternates: {
    canonical: "https://fplusglobal.com/testimonios",
  },
};

const PageLayout = async (props: any) => {
  return <div>{props.children}</div>;
};

export default PageLayout;
