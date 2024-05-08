function ProductOffers({style = "flex-col"}) {
  return (
    <div className={`w-full h-full lg:w-auto flex items-center justify-center gap-8 ${style}`}>
      <div className="w-full h-full group overflow-hidden bg-[#989DA0]">
        <img
          className="w-full h-full object-cover group-hover:rotate-6 group-hover:scale-[1.2]"
          src="/offer-1.jpg"
          alt="Product Offer"
        />
      </div>
      <div className="w-full h-full group overflow-hidden bg-[#989DA0]">
        <img
          className="w-full h-full object-cover group-hover:rotate-6 group-hover:scale-[1.2]"  
          src="/offer-1.jpg"
          alt="Product Offer"
        />
      </div>
    </div>
  );
}

export default ProductOffers;
