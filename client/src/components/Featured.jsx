import {
  FaCheck,
  FaExchangeAlt,
  FaPhoneVolume,
  FaShippingFast,
} from "react-icons/fa";

function Featured() {
  return (
    <section className="w-full my-10">
      <div className="w-full px-4 grid md:grid-cols-2 lg:grid-cols-4 text-left text-wrap gap-4 text-dark">
        <div className="p-6 flex flex-row items-center justify-start gap-2 font-semibold text-xl shadow-sm bg-white">
          <FaCheck className="text-yellow text-3xl" />
          Quality Product
        </div>
        <div className="p-6 flex flex-row items-center justify-start gap-2 font-semibold text-xl shadow-sm bg-white">
          <FaShippingFast className="text-yellow text-3xl" />
          Free Shipping
        </div>
        <div className="p-6 flex flex-row items-center justify-start gap-2 font-semibold text-xl shadow-sm bg-white">
          <FaExchangeAlt className="text-yellow text-3xl" />
          14-Day Return
        </div>
        <div className="p-6 flex flex-row items-center justify-start gap-2 font-semibold text-xl shadow-sm bg-white">
          <FaPhoneVolume className="text-yellow text-3xl" />
          24/7 Support
        </div>
      </div>
    </section>
  );
}

export default Featured;
