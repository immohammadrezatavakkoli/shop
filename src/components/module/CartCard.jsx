import { IoIosClose } from "react-icons/io";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { englishToPersianNumber } from "../../utils/englishToPersianNumber";
import { calculateDiscountedPrice } from "../../utils/calculateDiscountedPrice";

const CartCard = ({ title , price , count , id , discount}) => {

  const [cart, setCart] = useContext(CartContext);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // const calculateDiscountedPrice = (price , discount) => {
  //   const discountedPrice = price * (1 - discount / 100);
  //   return englishToPersianNumber(discountedPrice.toFixed(0));
  // }

  return (
    <div className="rtl w-10/12 h-auto flex flex-row justify-center items-center gap-4 bg-[#1A1A1A] rounded-md p-6 text-[#C3C4C5] cursor-default">
      <h1 className="w-8/12 flex flex-row justify-start items-center flex-wrap text-[0.70rem]">
        {title}
      </h1>
      <p className="w-2/12 flex flex-row justify-start items-center text-[0.70rem]">
        {`${calculateDiscountedPrice(price,discount)} تومان`}
      </p>
      <p className="w-1/12 flex flex-row justify-start items-center text-[0.70rem]">
        {`${englishToPersianNumber(count)} عدد`}
      </p>
        <button
        className="w-1/12 flex flex-row justify-end items-center text-[1.5rem] text-[#FBCB07]"
        onClick={() => removeFromCart(id)}
        >
          <IoIosClose />
        </button>
    </div>
  );
};

export default CartCard;