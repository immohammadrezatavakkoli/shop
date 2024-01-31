import Navbar from "@/module/Navbar";
import Providers from "@/redux_toolkit/Providers";

const Layout = ({ children }) => {
  return (
    <Providers>
      <div className="max-lg:hidden max-md:hidden max-sm:hidden">
        <header className="w-full h-24 absolute">
          <Navbar />
        </header>
        <main>{children}</main>
      </div>
    </Providers>
  );
};

export default Layout;
