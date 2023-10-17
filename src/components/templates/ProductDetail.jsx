import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { addToCart } from "../../utils/addToCart";
import { removeFromCart } from "../../utils/removeFromCart";
import DetailCard from "../module/DetailCard";

const ProductDetail = ({ product }) => {

  const [cart, setCart] = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(cart, setCart, product, (updatedCart) => {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    });
  };

  const handleRemoveFromCart = () => {
    const updatedCart = removeFromCart(cart, product);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="rtl w-full min-h-screen flex flex-col justify-start items-center bg-[#242424] py-40 cursor-default uppercase">
      <DetailCard
      cart={cart}
      product={product}
      handleAddToCart={handleAddToCart}
      handleRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default ProductDetail;