import { FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cartCounter);

  return (
    <div id="Navbar" className="h-20 fixed top-0 left-0 w-full z-50">
      <Link to="/">
        {/* <div className="flex items-center"> */}
        <img
          className="h-13 w-43"
          src="http://localhost:3000/images/Logos.svg"
          alt="img"
        />
        {/* <div className="font-extrabold text-3xl text-orange-500 ">
            <h1>Snuggy</h1>
          </div> */}
        {/* </div> */}
      </Link>

      <ul>
        <li className="Nav_list">
          <Link to="/">
            <FaHome className="w-6 h-6" />
          </Link>
        </li>
        <li className="Nav_list">
          <Link to="/about">
            <MdPeopleAlt className="w-6 h-6" />
          </Link>
        </li>
        <li className="Nav_list">
          <Link to="/support">
            <MdOutlineSupportAgent className="w-6 h-6" />
          </Link>
        </li>
        <li className="Nav_list">
          <Link to="/cart" className="flex">
            <FaCartShopping className="w-6 h-6" />
            <div className="text-center text-lg ">{cartCount}</div>{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
