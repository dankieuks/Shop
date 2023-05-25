import { useState } from "react";
import { iconSize } from "../../Constants/Constants";
import {
  AiFillHome,
  AiOutlineAndroid,
  AiOutlineApartment,
  AiOutlineBars,
  AiOutlineSearch,
} from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

const items = [
  {
    to: "/",
    label: "Home",
    icon: <AiFillHome size={iconSize} />,
    active: true,
  },
  {
    to: "/ShopDetails",
    label: "Shop",
    icon: <AiOutlineAndroid size={iconSize} />,
  },
  {
    to: "/blog",
    label: "Blog",
    icon: <AiOutlineApartment size={iconSize} />,
  },

  {
    to: "/contact",
    label: "Contact",
    icon: <FiLogOut size={iconSize} />,
  },
];
const NavContainer = () => (
  <>
    {items.map((item, index) => (
      <NavItem item={item} key={index} />
    ))}
  </>
);
function Header() {
  const [isNavMobile, setIsNavMobile] = useState(false);
  return (
    <header className=" col-span-6 bg-cyan-400  h-[100%]">
      <nav className="  flex justify-between px-10 py-2 items-center md:justify-around  text-center">
        <div className="flex justify-center  items-center ">
          <img
            src=""
            alt="logo"
            className=" object-fit w-[45px] h-[45px] uppercase   md:text-center"
          />
          <h1 className=" hidden text-3xl ml-2 font-mono md:block">JANERY</h1>
        </div>
        <form
          action="
        "
        >
          <div className="relative ">
            <div className="absolute inset-y-0 right-0 flex items-center px-2">
              <AiOutlineSearch className="text-black-500 text-2xl" />
            </div>
            <input
              type="username"
              placeholder=""
              className="w-[100px] h-[35px] px-5 rounded-lg text-sm md:w-[400px]"
            />
          </div>
        </form>
        <div className="flex">
          <Link to="/shopcart">
            <button className="btn">
              {" "}
              <MdShoppingCart />
            </button>
          </Link>
          <Link to="/login">
            <button className="btn">
              <FaUserCircle />
            </button>
          </Link>
          <AiOutlineBars
            className="ml-3 cursor-pointer md:hidden"
            size={iconSize}
            onClick={() => setIsNavMobile(!isNavMobile)}
          />
        </div>
      </nav>

      <ul
        className={`flex justify-center text-center ${
          isNavMobile ? " " : "hidden"
        } md:flex`}
      >
        <NavContainer />
      </ul>
    </header>
  );
}

export default Header;
