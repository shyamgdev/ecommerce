import ProductOffers from "../ProductOffers";

function Carousel() {
  return (
    <section className="w-full h-full overflow-hidden">
      <div className="h-full px-4 mt-4 flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* CAROUSEL */}
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="/womens-fashion.jpg"
            alt="Womens Fashion"
          />
        </div>
        {/* PRODUCT OFFERS */}
        <div className="w-full lg:w-2/4 h-96 lg:h-full">
          <ProductOffers style="flex-col" />
        </div>
      </div>
    </section>
  );
}

export default Carousel;
