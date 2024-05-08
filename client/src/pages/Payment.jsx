import { useEffect, useRef, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { clearErrors, newOrder } from "../Redux/Action/OrderAction";
// import CheckoutSteps from "../Cart/CheckoutSteps";
const options = {
  style: {
    base: {
      frontSize: "16px",
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

function Payment() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);
  const navigate = useNavigate();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  // const { address } = useSelector((state) => state.address);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.orders);
  const shippingAddress = JSON.parse(sessionStorage.getItem("shippingAddress"));
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const [isLoading, setIsLoading] = useState(false);

  const order = {
    shippingAddress,
    products: cartItems,
    subTotal: orderInfo.subTotal,
    shipping: orderInfo.shipping,
    totalPrice: orderInfo.totalPrice,
    amount: Math.round(orderInfo.totalPrice * 100), //stripe pase mai leta hai is lie 200 hua 20000 pase
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    document.querySelector("#pay_btn").disabled = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("/api/payment/process", order, config);

      const client_secret = data.client_secret;
      //console.log(client_secret)

      if (!stripe || !elements) {
        console.log("returned");
        return;
      }

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingAddress.address,
              city: shippingAddress.city,
              postal_code: shippingAddress.pinCode,
              state: shippingAddress.state,
              country: shippingAddress.country || "IN",
            },
          },
        },
      });
      console.log(result);

      if (result.error) {
        alert.error(result.error.message);
        setIsLoading(false)
        document.querySelector("#pay_btn").disabled = false;
      } else {
        if (result.paymentIntent.status === "succeeded") {
          //todo :new order
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };
          dispatch(newOrder(order));
          navigate("/success");
        } else {
          alert.error("There's some issue while processing payment!");
        }
      }
    } catch (error) {
      setIsLoading(false)
      document.querySelector("#pay_btn").disabled = false;
      alert.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
  }, [dispatch, error, alert]);

  return (
    <>
      {/* <CheckoutSteps shipping confirmOrder payment /> */}

      <div className="max-w-lg m-auto">
        <form
          className="space-y-3 px-4 border-b border-gray-900/10"
          onSubmit={submitHandler}
        >
          <h1 className="text-base font-semibold leading-7 text-gray-900">
            Card Info
          </h1>
          <div className="form-group">
            <label htmlFor="card_num_field">Card Number</label>
            <CardNumberElement
              type="text"
              id="card_num_field"
              className="form-input"
              options={options}
            />
          </div>

          <div className="form-group">
            <label htmlFor="card_exp_field">Card Expiry</label>
            <CardExpiryElement
              type="text"
              id="card_exp_field"
              className="form-input"
              options={options}
            />
          </div>

          <div className="form-group">
            <label htmlFor="card_cvc_field">Card CVC</label>
            <CardCvcElement
              type="text"
              id="card_cvc_field"
              className="form-input"
              options={options}
            />
          </div>

          {!isLoading ? (
            <button
              id="pay_btn"
              className="btn-primary w-full"
              type="submit"
              disabled={!stripe}
            >
              Pay {orderInfo && orderInfo.totalPrice}
            </button>
          ) : (
            <button className="btn-primary w-full" disabled={true}>
              Please wait...
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default Payment;
