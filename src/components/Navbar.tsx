import { Icon } from "@iconify/react/dist/iconify.js";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="w-full lg:px-16 px-5 lg:pt-8 pt-8 pb-2.5 max-w-[1640px] mx-auto flex justify-between items-center ">
      <div>
        <a href="/" className="w-full max-w-[2rem]">
          <img src={logo} alt="" className="w-full max-w-[8rem]" />
        </a>
      </div>
      <ul className="hidden md:flex justify-between items-center gap-10">
        <li className="text-sm font-extralight">Features</li>
        <li className="text-sm font-extralight">Pricing</li>
        <li className="text-sm font-extralight">Support</li>
      </ul>
      <button className="flex items-center gap-2 text-sm bg-gradient-to-r from-[#017373] to-[#AAD9D1] p-2.5 rounded-md">
        Get Started{" "}
        <span className="border border-appBlack p-1 rounded-md text-appBlack">
          <Icon icon="akar-icons:arrow-up-right" />
        </span>
      </button>
    </div>
  );
};

export default Navbar;
