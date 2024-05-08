import { MdCancelPresentation } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart, removeCartItem } from "../Redux/Action/CartAction";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.user);

  const navigate = useNavigate();

  // Function to handle quantity decrease
  const handleDecrease = (id, quantity) => {
    const newQty = quantity - 1;
    if (quantity > 1) {
      dispatch(addItemsToCart(id, newQty));
    }
  };

  // Function to handle quantity increase
  const handleIncrease = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (quantity < stock) {
      dispatch(addItemsToCart(id, newQty));
    }
  };

  const removeCartHandler = (id) => {
    dispatch(removeCartItem(id));
  };

  const checkOutHandler = () => {
    // if (isAuthenticated) {
    //   navigate("/checkout");
    // } else {
    //   navigate("/login");
    // }
      navigate("/checkout");
  };

  return (
    <section className="w-full h-full">
      <div className="my-10 px-4 space-y-10 text-dark">
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
        <div className="flex flex-col md:flex-row items-start justify-start gap-4">
          {/* CART TABLE */}
          <div className="w-full overflow-x-scroll">
            <table className="w-full h-full table-auto overflow-x-scroll">
              <thead className="text-light font-semibold bg-dark">
                <tr>
                  <th className="px-6 py-4">Products</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Quantity</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Remove</th>
                </tr>
              </thead>
              <tbody className="text-body">
                {cartItems?.map((item, i) => (
                  <tr
                    key={i}
                    className="border-y-[15px] border-light bg-white hover:bg-[#00000012]"
                  >
                    {/* PRODUCT NAME & IMAGE */}
                    <td className="py-4">
                      <div className="flex flex-row items-center justify-center flex-wrap gap-2 whitespace-nowrap">
                        <Link to={`/product/${item.product}`}>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 aspect-square object-cover"
                          />
                        </Link>
                        <Link to={`/product/${item.product}`}>
                          <h2 className="w-28 truncate">{item.name}</h2>
                        </Link>
                      </div>
                    </td>
                    {/* PRODUCT PRICE */}
                    <td className="py-4 text-center">₹ {item.price}</td>
                    {/* Quantity Range */}
                    <td className="py-4">
                      {/* QUANTITY SELECTOR */}
                      <div className="quantity-selector">
                        <button
                          onClick={() =>
                            handleDecrease(item.product, item.quantity)
                          }
                        >
                          <FaMinus />
                        </button>
                        {/* <span className="px-6 py-2 font-semibold">1</span> */}
                        <input type="number" value={item.quantity} readOnly />
                        <button
                          onClick={() =>
                            handleIncrease(
                              item.product,
                              item.quantity,
                              item.stock
                            )
                          }
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </td>
                    {/* PRODUCT TOTAL PRICE */}
                    <td className="py-4 text-center">
                      ₹ {item.price * item.quantity}
                    </td>
                    {/* REMOVE PRODUCT */}
                    <td
                      onClick={() => removeCartHandler(item.product)}
                      className="py-4 text-center text-4xl cursor-pointer"
                    >
                      <MdCancelPresentation className="m-auto text-red-700" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* APPLY COUPON CODE & CART SUMMARY */}
          <div className="flex flex-col w-full md:w-2/5 gap-10">
            {/* APPLY COUPON CODE */}
            <div className="w-full flex flex-row rounded">
              <input
                type="text"
                placeholder="Coupon Code"
                className="px-4 py-2 w-full text-dark"
              />
              <button className="btn-primary">Apply Coupon</button>
            </div>
            {/* CART SUMMARY */}
            <div className="w-full">
              <div className="mb-4 flex flex-row items-center justify-center gap-2">
                <h2 className="text-2xl font-bold text-dark whitespace-nowrap">
                  CART SUMMARY
                </h2>
                <hr className="w-full bg-dark" />
              </div>
              <div className="p-4 bg-white">
                <div className="pb-2 border-b border-border">
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
                  <div className="mb-2 flex flex-row justify-between">
                    <h6>Shipping</h6>
                    <h6>Free</h6>
                  </div>
                </div>
                <div className="my-4 flex flex-row justify-between text-xl font-semibold">
                  <h6>Total</h6>
                  <h6>
                    ₹{" "}
                    {cartItems
                      ?.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </h6>
                </div>
                <button
                  onClick={checkOutHandler}
                  className="btn-primary w-full p-4 font-semibold"
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
