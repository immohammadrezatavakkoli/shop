import { useState } from "react";
import Navbar from "../module/Navbar";
import ApiDataContext from "../../context/ApiContext";
import CartContext from "../../context/CartContext";

const Layout = ({ children }) => {
  const [apiData, setApiData] = useState("");
  const [cart, setCart] = useState([]);

  return (
    <ApiDataContext.Provider value={[apiData, setApiData]}>
      <CartContext.Provider value={[cart, setCart]}>
        <div className="max-lg:hidden max-md:hidden max-sm:hidden">
          <header className="w-full h-24 absolute">
            <Navbar />
          </header>
          <main>{children}</main>
        </div>
      </CartContext.Provider>
    </ApiDataContext.Provider>
  );
};

export default Layout;
