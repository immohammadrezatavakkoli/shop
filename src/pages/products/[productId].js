import Head from "next/head";
import { useRouter } from "next/router";
import ProductDetail from "@/templates/ProductDetail";
import Spiner from "@/module/Spiner";

const Product = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Spiner />;
  }

  return (
    <>
    <Head>
        <title>{data.product.title}</title>
        <link rel="icon" href="/" />
    </Head>
    <ProductDetail product={data.product} />
    </>
  );
}

export default Product;

export const getStaticPaths = async () => {
    const res = await fetch(process.env.BASE_URL);
    const data = await res.json();
    const popularProducts = data.productsData.slice(0 , 2);
    const paths = popularProducts.map((product) => ({ params: { productId: product.id.toString() } }));

    return {
      paths,
      fallback: true,
    };
};
  
export const getStaticProps = async ( context ) => {

    const { params } = context;
    const productId = params.productId;
    const res = await fetch(`${process.env.BASE_URL}/${productId}`);
    const data = await res.json();

    if(!data.product.id){
      return {
        notFound : true
      }
    }
      
    return {
      props: {
        data,
      },
      revalidate: +process.env.REVALIDATE,
    };
};