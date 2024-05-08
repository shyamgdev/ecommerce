import "./App.css";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import TopBar from "./components/layouts/TopBar";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import ContactUs from "./pages/ContactUs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser, clearErrors } from "./Redux/Action/UserAction";
import { useCookies } from "react-cookie";
import Profile from "./pages/Profile";
import UpdateProfile from "./modals/UpdateProfile";
import { useAlert } from "react-alert";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Failed from "./pages/Failed";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./helper/ProtectedRoute";

function App() {
  const alert = useAlert();
  const navigate = useNavigate();
  const { isAuthenticated, error } = useSelector((state) => state.user);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (cookies.token || cookies.token != null || cookies.token != undefined) {
    // }
    dispatch(getUser());
  }, []);

  return (
    <>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/failed" element={<Failed />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route
            path="update-profile"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Elements
                stripe={loadStripe(
                  "pk_test_51OmxKQSFqAdgjezcMxFaXrEPfM42wbxkCOVL1xS8XJcDcmWsVPtettcOvGAjsKYhBCie1F8kKT7t9EwMG5ISqxN100dI9yclpp"
                )}
              >
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route path="/logout" element={<ProtectedRoute></ProtectedRoute>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
