import ProductCard from "./Cards/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../Redux/Action/ProductAction";
import Loader from "./layouts/Loader";

function ProductGrid() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="mt-2 grid grid-cols-1 mini:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {loading ? (
        <Loader />
      ) : (
        products.map((data, curElm) => <ProductCard key={curElm} data={data} />)
      )}
    </div>
  );
}

export default ProductGrid;
