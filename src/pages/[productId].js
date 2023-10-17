import Head from "next/head";
import { useRouter } from "next/router";
import ProductDetail from '../components/templates/ProductDetail.jsx';
import Spiner from "../components/module/Spiner.jsx";

const Product = ({ product }) => {

  const router = useRouter();

  if (router.isFallback) {
    return <Spiner />;
  }

  return (
    <>
    <Head>
        <title>&lrm;</title>
        <link rel="icon" href="/" />
    </Head>
    <ProductDetail product={product} />
    </>
  );
}

export default Product;

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.BASE_URL}/products`);
    const json = await res.json();
    const data = json.slice(0 , 5);
    const paths = data.map((id) => ({ params: { productId: id.toString() } }));
  
    return {
      paths,
      fallback: true,
    };
};
  
export const getStaticProps = async ( context ) => {

  const { params } = context;
  const productId = params.productId;
  const res = await fetch(`${process.env.BASE_URL}/products/${productId}`);
  const product = await res.json();

  if(!product.id){
    return {
      notFound : true
    }
  }
    
  return {
    props: {
      product,
    },
    revalidate: +process.env.REVALIDATE, // second
  };
};