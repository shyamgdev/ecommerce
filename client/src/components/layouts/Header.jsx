import { IoIosMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "../Dropdown";
import { useSelector } from "react-redux";

function Header() {
  const { cartItems } = useSelector((state) => state.cart);
  const [toggle, setToggle] = useState(true);

  const navItems = [
    { Text: "Home", path: "/" },
    { Text: "Shop", path: "/shop" },
    { Text: "Shop Detail", path: "/detail" },
    {
      Text: "Pages",
      path: "/",
      list: [
        { Text: "Shopping Cart", path: "/cart" },
        { Text: "Checkout", path: "checkout" },
      ],
    },
    { Text: "Contact", path: "/contact" },
  ];

  return (
    <section className="w-full bg-dark">
      <div className="w-full h-full px-4 py-2 flex flex-row flex-wrap md:flex-nowrap items-center justify-between gap-2 md:gap-10">
        {/* LEFT */}
        <div className="hidden w-fit p-4 md:flex flex-row items-center justify-center bg-yellow hover:bg-yellowDark cursor-pointer">
          <IoIosMenu />
          <h6 className="pl-2 pr-6 font-medium">Categories</h6>
          <IoIosArrowDown />
        </div>
        {/* LOGO */}
        <img src="/logo.png" alt="Logo" className="md:hidden" />
        {/* MENU */}
        <IoIosMenu
          className="md:hidden text-white text-4xl cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        {/* NAVBAR */}
        <nav
          className={`${
            toggle ? "h-0" : "h-full"
          } w-full md:h-auto flex-grow flex flex-col md:flex-row items-left justify-start gap-4 text-white overflow-hidden duration-0`}
        >
          {navItems.map((navItem, i) => {
            return (
              <div key={i}>
                {navItem.list ? (
                  <div key={i}>
                    <div className="hover:text-yellow">
                      <Dropdown text={navItem.Text} className="bg-yellow">
                        {navItem.list.map((list, i) => {
                          return (
                            <NavLink
                              key={i}
                              to={list.path}
                              className={({ isActive }) => {
                                return `px-6 py-1 hover:bg-light ${
                                  isActive && "bg-light"
                                }`;
                              }}
                            >
                              {list.Text}
                            </NavLink>
                          );
                        })}
                      </Dropdown>
                    </div>
                    {/* </div> */}
                  </div>
                ) : (
                  <NavLink
                    // key={i}
                    to={navItem.path}
                    className={({ isActive }) => {
                      return `hover:text-yellow ${isActive && "text-yellow"}`;
                    }}
                  >
                    {navItem.Text}
                  </NavLink>
                )}
              </div>
            );
          })}
        </nav>
        {/* RIGHT */}
        <div className="hidden md:flex flex-row gap-4 text-white font-semibold">
          <Link to="/" className="flex flex-row gap-1">
            <FaHeart className="text-yellow" />
            <span className="rounded-full flex items-center justify-center border border-white w-5 h-5">
              0
            </span>
          </Link>
          <Link to="/cart" className="flex flex-row gap-1">
            <FaShoppingCart className="text-yellow" />
            <span className="rounded-full flex items-center justify-center border border-white w-5 h-5">
              {cartItems?.length}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Header;
