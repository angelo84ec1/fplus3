import HomePageComponent from "@/components/Home/HomePageComponent";
import getPopularBrands from "./utils/getPopularBrands";
import getNewBrands from "./utils/getNewBrands";

const HomePage = async () => {
  const popularBrands = await getPopularBrands();
  const newBrands = await getNewBrands();

  return (
    <>
      <HomePageComponent popBrands={popularBrands} Brands={newBrands} />
    </>
  );
};

export default HomePage;
