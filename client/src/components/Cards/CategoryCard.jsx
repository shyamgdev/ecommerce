function CategoryCard({ data }) {
  return (
    <div className="flex flex-row items-center justify-start rounded text-dark bg-white hover:bg-yellow overflow-hidden cursor-pointer group">
      <div className="w-24 h-24 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:rotate-6 group-hover:scale-[1.2] align-top"
          src={data.image.url}
          alt="Category image"
        />
      </div>
      <div className="pl-4 flex flex-col items-start justify-center">
        <h6 className="font-medium">{data.name}</h6>
        <small>100 Products</small>
      </div>
    </div>
  );
}

export default CategoryCard;
