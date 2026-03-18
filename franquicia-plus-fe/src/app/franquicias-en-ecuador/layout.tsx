import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Franquicia Plus negocios rentables en Ecuador",
  description:
    "Franquicia Plus es tu oportunidad para adquirir negocios rentables en Ecuador tales como franquicias de farmacias, franquicias de comida rápida y más.",
  alternates: {
    canonical: "https://fplusglobal.com/franquicias-en-ecuador",
  },
};

const PageLayout = async (props: any) => {
  return (
    <div>
      <Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>
        <div>{props.children}</div>
      </Suspense>
    </div>
  );
};

export default PageLayout;
