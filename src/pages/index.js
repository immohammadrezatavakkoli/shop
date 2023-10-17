import Head from "next/head";
import { useContext , useEffect } from "react";
import { shuffleArray } from "../utils/shuffleArray";
import ApiDataContext from "../context/ApiContext";
import Slider from "../components/templates/Slider";
import Category from "../components/templates/Category";
import ProductsList from "../components/templates/ProductsList";
import ScrollButton from "../components/module/ScrollButton";

const Home = ({ data }) => {

  const apiDataContext = useContext(ApiDataContext);
  const setApiData = apiDataContext[1];

  const sliceProduct = data.slice(0 , 5);

  useEffect(() => setApiData(data),[data]);

  return (
    <>
    <Head>
        <title>&lrm;</title>
        <link rel="icon" href="/" />
    </Head>
    <div className="w-full h-auto flex flex-col justify-start items-center bg-[#242424] pt-32">
      <div className="w-full h-auto flex flex-col justify-end px-5">
        <Slider />
      </div>
      <div className="w-full h-auto py-10">
        <Category />
      </div>
      <div className="w-full h-auto py-10">
        <ProductsList data={sliceProduct} />
      </div>
      <ScrollButton />
    </div>
    </>
  );
}

export default Home;

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.BASE_URL}/products`);
    const data = await res.json();
    shuffleArray(data);

    return {
      props: {
        data
      }
    };
};