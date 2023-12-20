import Navbar from "@/module/Navbar";
import store from "@/redux_toolkit/store";
import { Provider } from "react-redux";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <div className="max-lg:hidden max-md:hidden max-sm:hidden">
        <header className="w-full h-24 absolute">
          <Navbar />
        </header>
        <main>{children}</main>
      </div>
    </Provider>
  );
};

export default Layout;
