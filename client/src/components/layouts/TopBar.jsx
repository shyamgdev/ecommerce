import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import Dropdown from "../Dropdown";
import { useCookies } from "react-cookie";
import { logoutUser } from "../../Redux/Action/UserAction";

function TopBar() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const logout = () => {
    removeCookie("token");
    dispatch(logoutUser());
  };
  return (
    <section className="w-full">
      <div className="w-full">
        <div className="px-4 py-1 bg-light">
          <div className="flex flex-row items-center justify-center md:justify-between">
            {/* LEFT */}
            <div className="hidden md:flex flex-row gap-4 text-body">
              <a href="">About</a>
              <a href="">Contact</a>
              <a href="">Help</a>
              <a href="">FAQs</a>
            </div>
            {/* RIGHT */}
            <div className="flex flex-row gap-4">
              <div className="px-2 py-1 bg-white hover:bg-brightGray shadow">
                <Dropdown
                  text={isAuthenticated ? user?.name : "My Account"}
                  className="border -ml-2"
                >
                  {isAuthenticated ? (
                    <>
                      <NavLink
                        to="/profile"
                        className={({ isActive }) => {
                          return `px-6 py-1 hover:bg-light ${
                            isActive && "bg-light"
                          }`;
                        }}
                      >
                        My Profile
                      </NavLink>
                      <Link
                        onClick={logout}
                        to="/"
                        className="px-6 py-1 hover:bg-light"
                      >
                        Logout
                      </Link>
                    </>
                  ) : (
                    <>
                      <NavLink
                        to="/login"
                        className={({ isActive }) => {
                          return `px-6 py-1 hover:bg-light ${
                            isActive && "bg-light"
                          }`;
                        }}
                      >
                        Sign in
                      </NavLink>
                      <NavLink
                        to="/register"
                        className={({ isActive }) => {
                          return `px-6 py-1 hover:bg-light ${
                            isActive && "bg-light"
                          }`;
                        }}
                      >
                        Sign up
                      </NavLink>
                    </>
                  )}
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-1 bg-white">
          <div className="hidden py-4 md:flex flex-row items-center justify-between">
            {/* LOGO */}
            <div>
              <img src="/logo.png" alt="Logo" />
            </div>
            {/* SEARCH ENGINE */}
            <div className="flex flex-row items-center border-2 bg-white">
              <input
                type="text"
                className="w-full p-2 text-body"
                placeholder="Searchfor products"
              />
              <div className="p-2 border-l-2">
                <FaSearch className="text-yellow" />
              </div>
            </div>
            <div className="flex flex-col text-center">
              <p className="text-body">Customer Service</p>
              <h5 className="text-xl font-semibold">+012 345 6789</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBar;
