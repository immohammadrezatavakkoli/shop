export const addToCart = (cart , setCart , product , onCartUpdate) => {
  const productIndex = cart.findIndex(item => item.id === product.id);
  
  if (productIndex !== -1) {
    const updatedCart = [...cart];
    updatedCart[productIndex].count += 1;
    setCart(updatedCart);
    if (onCartUpdate) {
      onCartUpdate(updatedCart);
    }
  } else {
    const updatedProduct = { ...product, count: 1 };
    const updatedCart = [...cart, updatedProduct];
    setCart(updatedCart);
    if (onCartUpdate) {
      onCartUpdate(updatedCart);
    }
  }
};
