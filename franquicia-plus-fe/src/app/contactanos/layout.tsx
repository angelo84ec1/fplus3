import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctanos Franquicia Plus en Ecuador",
  description:
    "Buscas franquicias en Ecuador y no sabes cual es la mejor opción. En Franquicia Plus te brindamos la mejor asesoría para adquirir negocios rentables.",
  alternates: {
    canonical: "https://fplusglobal.com/contactanos",
  },
};

const PageLayout = async (props: any) => {
  return <div>{props.children}</div>;
};

export default PageLayout;
