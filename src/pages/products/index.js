import Head from "next/head";
import { useEffect , useContext , useState } from "react";
import ApiDataContext from "../../context/ApiContext";
import ProductsList from "../../components/templates/ProductsList";
import SliderRange from "../../components/module/SliderRange";
import SelectModelProduct from "../../components/module/SelectModelProduct";

const Products = ({ data }) => {

  const apiDataContext = useContext(ApiDataContext);
  const setApiData = apiDataContext[1];

  const [selectedModel, setSelectedModel] = useState("");

  useEffect(() => {
    setApiData(data)
  },[data]);

  return (
    <>
      <Head>
        <title>&lrm;</title>
        <link rel="icon" href="/" />
      </Head>
      <div className="w-full h-auto flex flex-col justify-start items-center bg-[#242424] pt-32 px-5">
        <div className="w-11/12 h-full flex flex-row justify-between items-center px-8 pt-2">
          <div className="w-4/12 h-full flex flex-row justify-start items-center">
            <SelectModelProduct setSelectedModel={setSelectedModel} />
          </div>
          <div className="w-8/12 h-full flex flex-row justify-start items-center">
            <SliderRange />
          </div>
        </div>
        <div className="w-full min-h-screen py-10">
          <ProductsList data={data} selectedModel={selectedModel}/>
        </div>
      </div>
    </>
  );
}

export default Products;

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.BASE_URL}/products`);
    const data = await res.json();
  
    return {
      props: {
        data,
      },
    };
};