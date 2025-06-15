import { TbBrandMeta } from "react-icons/tb";
import {IoLogoInstagram } from "react-icons/io";
import {RiTwitterXLine} from "react-icons/ri";

const Topbar = () => {
  return (
  <div className="bg-[#ea2e0e] text-white">
    <div className ="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md: flex item-center space-x-4 ">
            <a href="#" className="hover:text-gray-300">
                <TbBrandMeta className="h-5 w-5"/>
            </a>
            <a href="#" className="hover:text-gray-300">
                <IoLogoInstagram className="h-5 w-5"/>
            </a>
            <a href="#" className="hover:text-gray-300">
                <RiTwitterXLine className="h-5 w-5"/>
            </a>
        </div>
        <div className="text-sm text-center flex-grow">
            <span>We ship worldwide - Fast and reliable shipping! </span>
        </div>
        <div>
            <a href="tel:+9112345678" className="hover:text-gray-300">
                +91 (123) 456-789
            </a>
        </div>
    </div>
  </div>
  );
};

export default Topbar