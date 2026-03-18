import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Franquicia Plus Ecuador",
  description:
    "Conoce nuestra política de privacidad y el tratamiento de datos personales en Franquicia Plus Ecuador.",
  alternates: {
    canonical: "https://fplusglobal.com/politica-de-privacidad",
  },
};

const PageLayout = async (props: any) => {
  return <div>{props.children}</div>;
};

export default PageLayout;
