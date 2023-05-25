/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NavItem = ({ item }) => {
  return (
    <li
      className={`flex p-2 justify-center font-bold   hover:bg-primary  hover:text-white cursor-pointer${
        item.active ? "bg-lime-300 " : ""
      }`}
    >
      <Link to={item.to} className="flex justify-center items-center mx-4">
        {item.icon}
        <span className={`mx-3 hidden hover:${item.label}  md:block  `}>
          {item.label}
        </span>
      </Link>
    </li>
  );
};
export default NavItem;
