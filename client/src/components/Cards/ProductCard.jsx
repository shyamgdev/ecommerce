import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCard({ data }) {
  return (
    <div className="flex flex-col items-center justify-start rounded text-dark bg-white overflow-hidden cursor-pointer group">
      <Link to={`/product/${data._id}`} className="w-full overflow-hidden">
        <img
          className="w-full object-cover align-top group-hover:scale-[1.2]"
          src={data.image.url}
          alt={data.name}
        />
      </Link>
      <div className="px-2 py-6 flex flex-col items-center justify-center font-medium gap-2">
        <Link to={`/product/${data._id}`}>
          <h4>{data.name}</h4>
        </Link>
        <div className="flex flex-row items-center justify-center gap-2 text-lg">
          <h5>{data.price}</h5>
          <h6 className="text-body">
            <del>$123.00</del>
          </h6>
        </div>
        <div className="flex flex-row items-center justify-center gap-1 text-yellow">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span className="text-body text-sm">({data.rating.count})</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
