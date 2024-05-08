function Breadcrumb() {
  return (
    <div className="px-4 py-2 bg-white space-x-2">
      <a href="/">Home</a>
      <span>/</span>
      <a href="/">Shop</a>
      <span>/</span>
      <a href="/" className="opacity-70">
        Shop Detail
      </a>
    </div>
  );
}

export default Breadcrumb;
