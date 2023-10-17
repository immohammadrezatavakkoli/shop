import Menubar from "./Menubar";
import { LiaUserSolid , LiaShoppingCartSolid } from "react-icons/lia";
import { BiLogoFlickr } from "react-icons/bi";
import Searchbox from "../module/Searchbox";
import Link from "next/link";
import AboutMessage from "./AboutMessage";
import { ConfigProvider } from 'antd';

const Navbar = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="w-full h-4/6 flex flex-row justify-between items-center px-10 bg-[#1A1A1A]">
        <div className="w-3/12 h-full flex flex-row justify-start items-center gap-1">
            <Link href={'/cart'} className="w-2/12 h-10 flex flex-row justify-center items-center text-3xl text-[#FBCB07]">
              <LiaShoppingCartSolid />
            </Link>
            <button
            className="w-2/12 h-10 flex flex-row justify-center items-center text-3xl text-[#FBCB07]"
            onClick={AboutMessage}
            >
              <LiaUserSolid />
            </button>
        </div>
        <div className="w-6/12 h-full flex flex-row justify-end items-center gap-1">
            <Searchbox />
        </div>
        <div className="w-3/12 h-full flex flex-row justify-end items-center gap-1">
            <Link href={'/'} className="text-3xl text-[#FBCB07]">
                <BiLogoFlickr />
            </Link>
        </div>
      </div>
      <div className="w-full h-2/6">
        <ConfigProvider direction="rtl">
          <Menubar />
        </ConfigProvider>
      </div>
    </div>
  );
}

export default Navbar;
