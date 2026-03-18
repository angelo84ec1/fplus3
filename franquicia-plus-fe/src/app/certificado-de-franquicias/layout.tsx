import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificate en F+ con nuestro certificado de franquicias Plus",
  description:
    "Somos la única empresa en el mundo que audita y certifica tu sistema de franquicia con un NFT único, donde podrás demostrar que eres un negocio de exito.",
  alternates: {
    canonical: "https://fplusglobal.com/certificado-de-franquicias",
  },
};

const PageLayout = async (props: any) => {
  return <div>{props.children}</div>;
};

export default PageLayout;
