import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "./Cards/CategoryCard";
import SectionTitle from "./SectionTitle";
import { useEffect } from "react";
import { getCategories } from "../Redux/Action/CategoryAction";
import Loader from "./layouts/Loader";

function Categories() {
  const dispatch = useDispatch();
  const { categories, error, loading } = useSelector((state) => state.cat);
  // console.log(categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <section className="my-10 px-4">
      <SectionTitle title="Categories" />
      <div className="mt-2 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {loading ? (
          <Loader />
        ) : (
          categories.map((data, curElm) => (
            <CategoryCard key={curElm} data={data} />
          ))
        )}
        {/* <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard /> */}
      </div>
    </section>
  );
}

export default Categories;
