import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddressForm from "../components/AddressForm";
import { Link, useNavigate } from "react-router-dom";
import { newOrder } from "../Redux/Action/OrderAction";
import { useAlert } from "react-alert";
import { getAllAddress } from "../Redux/Action/AddressAction";
import SectionTitle from "../components/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";

function Checkout() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  const { address } = useSelector((state) => state.address);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [payment, setPayment] = useState(null);
  const alert = useAlert();
  const navigate = useNavigate();

  const subTotal = cartItems?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const totalPrice = subTotal + shipping;

  const selectedAddressHandler = (e) => {
    setSelectedAddress(e.target.value);
  };

  const placeOrderHandler = (e) => {
    e.preventDefault();
    if (!payment || !selectedAddress) {
      alert.error("Address and Payment is not empty");
      return;
    }
    const formData = {
      products: cartItems,
      subTotal,
      shipping,
      totalPrice,
      paymentType: payment,
      shippingAddress: { country: "IN", ...address[selectedAddress] },
    };
    if (payment === "card") {
      // makePayment();return 
      sessionStorage.setItem(
        "shippingAddress",
        JSON.stringify({ country: "IN", ...address[selectedAddress] })
      );
      sessionStorage.setItem(
        "orderInfo",
        JSON.stringify({ subTotal, shipping, totalPrice })
      );
      navigate("/payment");
      return;
    } else {
      dispatch(newOrder(formData));
      console.log(formData);
      alert.success("Order Successfully");
      navigate("/orders", { replace: true });
    }
  };

  useEffect(() => {
    if (isAuthenticated == false) {
      navigate("/login");
    } else if (cartItems?.length < 1) {
      navigate(-1);
      alert.error("Cart must not be empty!");
    } else {
      dispatch(getAllAddress())
    }
  }, [isAuthenticated, cartItems]);

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OmxKQSFqAdgjezcMxFaXrEPfM42wbxkCOVL1xS8XJcDcmWsVPtettcOvGAjsKYhBCie1F8kKT7t9EwMG5ISqxN100dI9yclpp"
    );
    const body = {
      products: cartItems,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch("/api/pay", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <section className="pageSection">
      <div className="pageContainer">
        {/* BREADCRUMB */}
        <div className="px-4 py-2 bg-white space-x-2">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/">Shop</a>
          <span>/</span>
          <a href="/" className="opacity-70">
            Shopping Cart
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {address?.length == 0 ? (
            // BILLING ADDRESS FORM
            <div className="w-full">
              <div className="mb-4 flex flex-row items-center justify-center gap-2">
                <SectionTitle title="BILLING ADDRESS" />
                <hr className="w-full bg-dark" />
              </div>
              <AddressForm />
              <div className="px-6 pb-6 space-y-2 text-body bg-white"></div>
            </div>
          ) : (
            // USERS BILLING ADDRESSES
            <div className="space-y-2">
              <button className="px-4 text-[blue]">+ Add New Address</button>
              <div>
                {address?.map((data, i) => (
                  <label
                    key={i}
                    htmlFor={i}
                    className="block p-4 bg-white space-y-1 cursor-pointer"
                  >
                    <div className="flex flex-row justify-between">
                      <h3 className="font-semibold">{data.name}</h3>
                      <input
                        type="radio"
                        id={i}
                        value={i}
                        name="address"
                        onChange={selectedAddressHandler}
                      />
                    </div>
                    <p className="text-body">
                      {data.address}, {data.city}, {data.state}, {data.pinCode}
                    </p>
                    <p className="text-body">{data.mobile}</p>
                    <button type="button" className="text-[blue]">
                      Edit
                    </button>
                  </label>
                ))}
              </div>
            </div>
          )}
          {/* TOTAL ORDER & PAYMENT */}
          <div className="w-full md:w-[60%] lg:w-2/5 flex flex-col gap-4">
            {/* ORDER TOTAL */}
            <div className="">
              {/* ORDER TOTAL - HEADING */}
              <div className="mb-4 flex flex-row items-center justify-center gap-2">
                <h2 className="text-2xl font-bold text-dark whitespace-nowrap">
                  ORDER TOTAL
                </h2>
                <hr className="w-full bg-dark" />
              </div>
              {/* ORDER TOTAL - BODY */}
              <div className="p-4 bg-white">
                <div className="space-y-4">
                  <h6 className="mb-2 font-semibold">Products</h6>
                  {/* CART PRODUCTS */}
                  <div className="pb-2 border-b border-border">
                    <div className="text-body">
                      {cartItems?.map((item, i) => (
                        <div
                          key={i}
                          className="mb-2 flex flex-row justify-between gap-8"
                        >
                          <p className="truncate">{item.name}</p>
                          <p>{item.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* SUBTOTAL & SHIPPING */}
                  <div className="pb-2 border-b border-border">
                    {/* SUBTOTAL */}
                    <div className="mb-2 flex flex-row justify-between">
                      <h6>Subtotal</h6>
                      <h6>
                        ₹{" "}
                        {cartItems?.reduce(
                          (acc, item) => acc + item.price * item.quantity,
                          0
                        )}
                      </h6>
                    </div>
                    {/* SHIPPING */}
                    <div className="mb-2 flex flex-row justify-between">
                      <h6>Shipping</h6>
                      <h6>Free</h6>
                    </div>
                  </div>
                </div>
                <div className="my-4 flex flex-row justify-between text-xl font-semibold">
                  <h6>Total</h6>
                  <h6>
                    ₹{" "}
                    {cartItems?.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )}
                  </h6>
                </div>
              </div>
            </div>
            {/* PAYMENT */}
            <div className="">
              {/* PAYMENT - HEADING */}
              <div className="mb-4 flex flex-row items-center justify-center gap-2">
                <h2 className="text-2xl font-bold text-dark whitespace-nowrap">
                  ORDER TOTAL
                </h2>
                <hr className="w-full bg-dark" />
              </div>
              {/* PAYMENT - BODY */}
              <div className="p-4 text-body bg-white">
                <div className="space-x-2 mb-2">
                  <input
                    type="radio"
                    name="payment"
                    id="cash-on-delivery"
                    value="cash-on-delivery"
                    className="align-middle"
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  <label htmlFor="cash-on-delivery" className="align-middle">
                    Cash on Delivery
                  </label>
                </div>
                <div className="space-x-2 mb-2">
                  <input
                    type="radio"
                    name="payment"
                    id="card"
                    value="card"
                    className="align-middle"
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  <label htmlFor="card" className="align-middle">
                    Card
                  </label>
                </div>
                <div className="my-6">
                  {!loading ? (
                    <button
                      onClick={placeOrderHandler}
                      className="btn-primary w-full p-4 font-semibold"
                      // disabled={payment && selectedAddress ? false : true}
                    >
                      Place Order
                    </button>
                  ) : (
                    <button className="btn-primary w-full p-4 font-semibold">
                      Loading...
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
