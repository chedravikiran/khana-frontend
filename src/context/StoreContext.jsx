import { createContext, useState } from "react";
import { food_list } from "../assets2/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) =>
    setCartItems(prev => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));

  const removeFromCart = (itemId) =>
    setCartItems(prev => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
    }));

  const getTotalCartAmount = () =>
    food_list.reduce((sum, product) => {
      const qty = cartItems[product._id] || 0;
      return sum + product.price * qty;
    }, 0);

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
