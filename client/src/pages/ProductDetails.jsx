import { useEffect, useState } from "react";
import { FaStar, FaRegStar, FaShoppingCart } from "react-icons/fa";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import ProductCard from "../components/Cards/ProductCard";
import Breadcrumb from "../components/Breadcrumb";
import QuantitySelector from "../components/QuantitySelector";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../Redux/Action/ProductAction";
import { Link, useParams } from "react-router-dom";
import { addItemsToCart } from "../Redux/Action/CartAction";

function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [moreDetailsComp, setMoreDetailsComp] = useState("description");

  // Function to update the quantity state
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const dispatch = useDispatch();
  const { product, error, loading } = useSelector(
    (state) => state.productDetails
  );

  const addTCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
  };

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <section className="w-full h-full">
      <div className="my-10 px-4 space-y-10 text-dark">
        {/* BREADCRUMB */}
        <Breadcrumb />
        {/* PRODUCT DETAILS */}
        <div className="mt-10 flex flex-col md:flex-row gap-4">
          {/* PRODUCT IMAGE */}
          <div className="w-full md:w-2/5">
            <img
              className="w-full h-full"
              src={product.image?.url}
              alt={product.name}
            />
          </div>
          {/* PRODUCT BASIC DETAILS */}
          <div className="w-full md:w-3/5 px-10 py-6 space-y-3 bg-white">
            {/* PRODUCT NAME */}
            <h3 className="font-semibold text-2xl">{product.name}</h3>
            {/* PRODUCT RATING */}
            <div className="flex flex-row items-center justify-start gap-1 text-yellow">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-body text-sm">(99 Reviews)</span>
            </div>
            {/* PRODUCT PRICE */}
            <h3 className="font-semibold text-2xl">₹ {product.price}</h3>
            {/* PRODUCT SHORT DESCRIPTION */}
            <p className="text-body">{product.description}</p>
            {/* SIZES */}
            <div className="flex flex-row items-start justify-start">
              <h5 className="font-semibold text-lg pr-4">Sizes:</h5>
              <div className="flex flex-row items-center justify-start gap-x-4 gap-y-1 flex-wrap text-body">
                <div className="flex flex-row items-center justify-center">
                  <input
                    className="mr-2"
                    type="radio"
                    name="size"
                    id="size-1"
                  />
                  <label htmlFor="size-1">XS</label>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <input
                    className="mr-2"
                    type="radio"
                    name="size"
                    id="size-2"
                  />
                  <label htmlFor="size-2">S</label>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <input
                    className="mr-2"
                    type="radio"
                    name="size"
                    id="size-3"
                  />
                  <label htmlFor="size-3">M</label>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <input
                    className="mr-2"
                    type="radio"
                    name="size"
                    id="size-4"
                  />
                  <label htmlFor="size-4">L</label>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <input
                    className="mr-2"
                    type="radio"
                    name="size"
                    id="size-5"
                  />
                  <label htmlFor="size-5">XL</label>
                </div>
              </div>
            </div>
            {/* COLORS */}
            <div className="flex flex-row md:flex-row items-start justify-start">
              <h5 className="font-semibold text-lg pr-4">Colors:</h5>
              <div className="flex flex-row items-center justify-start gap-x-4 gap-y-1 flex-wrap text-body">
                <div className="flex flex-row items-center justify-center">
                  <input
                    className="mr-2"
                    type="radio"
                    name="size"
                    id="color-1"
                  />
                  <label htmlFor="color-1">Black</label>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <input
                    className="mr-2"
                    type="radio"
                    name="size"
                    id="color-2"
                  />
                  <label htmlFor="color-2">White</label>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <input
                    className="mr-2"
                    type="radio"
                    name="size"
                    id="color-3"
                  />
                  <label htmlFor="color-3">Red</label>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <input
                    className="mr-2"
                    type="radio"
                    name="size"
                    id="color-4"
                  />
                  <label htmlFor="color-4">Blue</label>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <input
                    className="mr-2"
                    type="radio"
                    name="size"
                    id="color-5"
                  />
                  <label htmlFor="color-5">Green</label>
                </div>
              </div>
            </div>
            {/* QUANTITY RANGE & ADD TO CART BUTTON */}
            <div className="flex flex-row gap-4 flex-wrap">
              {/* Quantity Range */}
              <div className="w-fit">
                <QuantitySelector
                  maxQuantity={product.stock}
                  onQuantityChange={handleQuantityChange}
                />
              </div>
              {/* ADD TO CART BUTTON */}
              <Link to="/cart">
                <button
                  onClick={addTCartHandler}
                  className="btn-primary flex flex-row items-center justify-center"
                >
                  <FaShoppingCart className="mr-2 text-xl" />
                  Add To Cart
                </button>
              </Link>
            </div>
            {/* SOCIAL MEDIA ICONS FOR SHARING PRODUCT */}
            <div className="pt-4 flex flex-row items-center justify-start">
              <h5 className="font-semibold pr-4">Share on:</h5>
              <div className="flex flex-row items-start gap-2">
                <a
                  href="/"
                  className="p-2 rounded text-dark opacity-90 hover:opacity-100"
                >
                  <FaTwitter />
                </a>
                <a
                  href="/"
                  className="p-2 rounded text-dark opacity-90 hover:opacity-100"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="/"
                  className="p-2 rounded text-dark opacity-90 hover:opacity-100"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="/"
                  className="p-2 rounded text-dark opacity-90 hover:opacity-100"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* MORE DETAILS OF PRODUCT */}
        <div className="p-8 bg-white">
          {/* HEADER */}
          <div className="flex flex-row items-center justify-start max-md:gap-y-2 flex-wrap border-b border-solid border-border">
            <button
              onClick={() => setMoreDetailsComp("description")}
              className={`px-3 py-2 border border-solid border-transparent ${
                moreDetailsComp == "description" &&
                "border-border border-b-white bg-light"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setMoreDetailsComp("information")}
              className={`px-3 py-2 border border-solid border-transparent ${
                moreDetailsComp == "information" &&
                "border-border border-b-white bg-light"
              }`}
            >
              Information
            </button>
            <button
              onClick={() => setMoreDetailsComp("reviews")}
              className={`px-3 py-2 border border-solid border-transparent ${
                moreDetailsComp == "reviews" &&
                "border-border border-b-white bg-light"
              }`}
            >
              Reviews (1)
            </button>
          </div>
          {/* PRODUCT DESCRIPTION */}
          {moreDetailsComp == "description" && (
            <div className="mt-6 space-y-6">
              <h3 className="text-xl font-semibold">Product Description</h3>
              <p className="text-body font-medium">{product.description}</p>
            </div>
          )}
          {/* PRODUCT INFORMATION */}
          {moreDetailsComp == "information" && (
            <div className="mt-6 space-y-6">
              <h3 className="text-xl font-semibold">Product Information</h3>
              <p className="text-body font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis sit ipsam eligendi enim quia animi veniam esse
                dolorem? Non, quidem quae aliquid delectus eligendi aspernatur
                corporis! A quod dignissimos rerum.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-start gap-4 text-body">
                <ul className="w-full">
                  <li className="py-4 border-b">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut, eius?
                  </li>
                  <li className="py-4 border-b">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut, eius?
                  </li>
                  <li className="py-4 border-b">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut, eius?
                  </li>
                  <li className="py-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut, eius?
                  </li>
                </ul>
                <ul className="w-full">
                  <li className="py-4 border-b">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut, eius?
                  </li>
                  <li className="py-4 border-b">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut, eius?
                  </li>
                  <li className="py-4 border-b">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut, eius?
                  </li>
                  <li className="py-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut, eius?
                  </li>
                </ul>
              </div>
            </div>
          )}
          {/* PRODUCT REVIEWS */}
          {moreDetailsComp == "reviews" && (
            <div className="mt-6 flex flex-col md:flex-row items-start justify-start md:space-x-6 max-md:space-y-6">
              {/* USER REVIEWS */}
              <div className="w-full space-y-6">
                <h4 className="font-semibold text-xl">
                  1 Review for &quot;Product Name&quot;
                </h4>
                <div className="flex flex-row items-start justify-start gap-4">
                  <div className="h-12 aspect-square">
                    <img
                      src="/user.jpg"
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-2">
                    {/* USER NAME */}
                    <h6>
                      Prashant Gupta -
                      <small>
                        {/* USER REVIEW DATE */}
                        <i>01 Jan 2024</i>
                      </small>
                    </h6>
                    {/* PRODUCT RATING */}
                    <div className="flex flex-row items-center justify-start gap-1 text-yellow">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    {/* USER REVIEW */}
                    <p className="text-body">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Necessitatibus, corporis.
                    </p>
                  </div>
                </div>
              </div>
              {/* NEW REVIEW */}
              <div className="w-full space-y-6">
                <h4 className="font-semibold text-xl">Leave a Review</h4>
                <div className="flex flex-col items-start justify-start gap-4 text-body">
                  {/* NOTE */}
                  <small>
                    Your email address will not be published. Required fields
                    are marked *
                  </small>
                  {/* GIVE RATING BY USER */}
                  <div className="flex flex-row items-center justify-start gap-4">
                    <p>Your Rating *</p>
                    {/* PRODUCT RATING */}
                    <div className="flex flex-row items-center justify-start gap-1 flex-wrap text-yellow text-xl">
                      <FaRegStar className="cursor-pointer" />
                      <FaRegStar className="cursor-pointer" />
                      <FaRegStar className="cursor-pointer" />
                      <FaRegStar className="cursor-pointer" />
                      <FaRegStar className="cursor-pointer" />
                    </div>
                  </div>
                  {/* FORM FOR REVIEW */}
                  <form className="w-full flex flex-col items-start justify-start gap-4">
                    {/* REVIEW MESSAGE */}
                    <div className="w-full flex flex-col items-start justify-start gap-4">
                      <label htmlFor="review">Your Review *</label>
                      <textarea
                        name="review"
                        id="userReview"
                        cols="30"
                        rows="5"
                        className="max-w-lg w-full px-4 py-2 border border-border rounded focus:border-borderYellow"
                      ></textarea>
                    </div>
                    {/* USER NAME */}
                    <div className="max-w-lg w-full flex flex-col items-start justify-start gap-4">
                      <label htmlFor="review">Your Name *</label>
                      <input
                        name="review"
                        id="userReview"
                        type="text"
                        className="w-full px-4 py-2 border border-border rounded focus:border-borderYellow"
                      />
                    </div>
                    {/* USER EMAIL */}
                    <div className="max-w-lg w-full flex flex-col items-start justify-start gap-4">
                      <label htmlFor="review">Your Email *</label>
                      <input
                        name="review"
                        id="userReview"
                        type="email"
                        className="w-full px-4 py-2 border border-border rounded focus:border-borderYellow"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* RELATED PRODUCTS */}
        <div className="my-10 space-y-8">
          <div className="px-4 flex flex-row items-center justify-center gap-2">
            <h2 className="text-3xl font-bold text-dark whitespace-nowrap">
              YOU MAY ALSO LIKE
            </h2>
            <hr className="w-full bg-[#bec5cb]" />
          </div>
          <div className="mt-2 px-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
