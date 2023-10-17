import Head from "next/head";
import { useContext , useEffect } from "react";
import CartContext from "../../context/CartContext";
import CartList from "../../components/templates/CartList";
import ApiDataContext from "../../context/ApiContext";
import { FaShoppingCart } from "react-icons/fa";

const Cart = ({ data }) => {

  const [cart , setCart] = useContext(CartContext);

  const apiDataContext = useContext(ApiDataContext);
  const setApiData = apiDataContext[1];

  useEffect(() => setApiData(data),[data]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    savedCart && setCart(JSON.parse(savedCart));
  },[]);

  return (
    <>
    <Head>
        <title>&lrm;</title>
        <link rel="icon" href="/" />
    </Head>
    <div className="w-full h-screen flex flex-col justify-start items-center bg-[#242424] pt-32 px-5">
      {
        cart.length > 0 ? (
        <CartList data={cart}/>  
        ) : (
        <div className="flex flex-col justify-start items-center gap-5 pt-20">
          <FaShoppingCart className="text-[#FBCB07] text-[6rem]" />
          <p className="text-[#C3C4C5] text-[0.70rem]">
            سبد خرید شما در حال حاضر خالی است
          </p>
        </div>
        )
      }
    </div>
    </>
  );
}

export default Cart;

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/products`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};