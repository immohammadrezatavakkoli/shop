export const removeFromCart = (cart , product) => {
    const productIndex = cart.findIndex(item => item.id === product.id);
  
    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[productIndex].count -= 1;
      
      if (updatedCart[productIndex].count === 0) {
        updatedCart.splice(productIndex, 1);
      }
  
      return updatedCart;
    } else {
      return cart;
    }
};
  
  