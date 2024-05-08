import Categories from "../components/Categories";
import Featured from "../components/Featured";
import FeaturedProducts from "../components/FeaturedProducts";
import ProductOffers from "../components/ProductOffers";
import RecentProducts from "../components/RecentProducts";
import Vendor from "../components/Vendor";
import Carousel from "../components/layouts/Carousel";

function Home() {
  return (
    <section className="pageSection">
      <div className="px-4 w-full h-full lg:h-96">
        <Carousel />
      </div>
      <Featured />
      <Categories />
      <FeaturedProducts />
      <div className="px-4 w-full h-full md:h-72">
        <ProductOffers style="flex-col md:flex-row" />
      </div>
      <RecentProducts />
      <Vendor />
    </section>
  );
}

export default Home;
