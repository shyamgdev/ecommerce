import { IoGridSharp, IoMenu } from "react-icons/io5";
import Breadcrumb from "../components/Breadcrumb";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/Cards/ProductCard";

function Shop() {
  const customForm = () => {
    return (
      <form action="GET">
        <div className="flex flex-row items-center justify-between text-body">
          <div>
            <input
              type="checkbox"
              name="priceAll"
              id="priceAll"
              className="mr-2 scale-105 align-middle"
            />
            <label htmlFor="priceAll" className="text-base align-middle">
              All Price
            </label>
          </div>
          <span className="px-1 text-sm border border-border">1000</span>
        </div>
        <div className="flex flex-row items-center justify-between text-body">
          <div>
            <input
              type="checkbox"
              name="priceAll"
              id="priceAll"
              className="mr-2 scale-105 align-middle"
            />
            <label htmlFor="priceAll" className="text-base align-middle">
              $0 - $100
            </label>
          </div>
          <span className="px-1 text-sm border border-border">150</span>
        </div>
        <div className="flex flex-row items-center justify-between text-body">
          <div>
            <input
              type="checkbox"
              name="priceAll"
              id="priceAll"
              className="mr-2 scale-105 align-middle"
            />
            <label htmlFor="priceAll" className="text-base align-middle">
              $100 - $200
            </label>
          </div>
          <span className="px-1 text-sm border border-border">295</span>
        </div>
        <div className="flex flex-row items-center justify-between text-body">
          <div>
            <input
              type="checkbox"
              name="priceAll"
              id="priceAll"
              className="mr-2 scale-105 align-middle"
            />
            <label htmlFor="priceAll" className="text-base align-middle">
              $200 - $300
            </label>
          </div>
          <span className="px-1 text-sm border border-border">246</span>
        </div>
        <div className="flex flex-row items-center justify-between text-body">
          <div>
            <input
              type="checkbox"
              name="priceAll"
              id="priceAll"
              className="mr-2 scale-105 align-middle"
            />
            <label htmlFor="priceAll" className="text-base align-middle">
              $300 - $400
            </label>
          </div>
          <span className="px-1 text-sm border border-border">145</span>
        </div>
        <div className="flex flex-row items-center justify-between text-body">
          <div>
            <input
              type="checkbox"
              name="priceAll"
              id="priceAll"
              className="mr-2 scale-105 align-middle"
            />
            <label htmlFor="priceAll" className="text-base align-middle">
              $400 - $500
            </label>
          </div>
          <span className="px-1 text-sm border border-border">168</span>
        </div>
      </form>
    );
  };

  return (
    <section className="px-4">
      {/* BREADCRUMB */}
      <div className="my-10">
        <Breadcrumb />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {/* SIDEBAR */}
        <div className="w-full md:w-2/5 lg:w-1/4 space-y-4">
          {/* FILTER BY PRICE */}
          <div className="px-2">
            <SectionTitle
              title="FILTER BY PRICE"
              hStyle="text-xl whitespace-nowrap"
            />
            <div className="mt-2 p-4 bg-white space-y-4">
              <div className="flex flex-row items-center justify-between text-body">
                <div>
                  <input
                    type="checkbox"
                    name="priceAll"
                    id="priceAll"
                    className="mr-2 scale-105 align-middle"
                  />
                  <label htmlFor="priceAll" className="text-base align-middle">
                    All Price
                  </label>
                </div>
                <span className="px-1 text-sm border border-border">1000</span>
              </div>
              <div className="flex flex-row items-center justify-between text-body">
                <div>
                  <input
                    type="checkbox"
                    name="priceAll"
                    id="priceAll"
                    className="mr-2 scale-105 align-middle"
                  />
                  <label htmlFor="priceAll" className="text-base align-middle">
                    $0 - $100
                  </label>
                </div>
                <span className="px-1 text-sm border border-border">150</span>
              </div>
              <div className="flex flex-row items-center justify-between text-body">
                <div>
                  <input
                    type="checkbox"
                    name="priceAll"
                    id="priceAll"
                    className="mr-2 scale-105 align-middle"
                  />
                  <label htmlFor="priceAll" className="text-base align-middle">
                    $100 - $200
                  </label>
                </div>
                <span className="px-1 text-sm border border-border">295</span>
              </div>
              <div className="flex flex-row items-center justify-between text-body">
                <div>
                  <input
                    type="checkbox"
                    name="priceAll"
                    id="priceAll"
                    className="mr-2 scale-105 align-middle"
                  />
                  <label htmlFor="priceAll" className="text-base align-middle">
                    $200 - $300
                  </label>
                </div>
                <span className="px-1 text-sm border border-border">246</span>
              </div>
              <div className="flex flex-row items-center justify-between text-body">
                <div>
                  <input
                    type="checkbox"
                    name="priceAll"
                    id="priceAll"
                    className="mr-2 scale-105 align-middle"
                  />
                  <label htmlFor="priceAll" className="text-base align-middle">
                    $300 - $400
                  </label>
                </div>
                <span className="px-1 text-sm border border-border">145</span>
              </div>
              <div className="flex flex-row items-center justify-between text-body">
                <div>
                  <input
                    type="checkbox"
                    name="priceAll"
                    id="priceAll"
                    className="mr-2 scale-105 align-middle"
                  />
                  <label htmlFor="priceAll" className="text-base align-middle">
                    $400 - $500
                  </label>
                </div>
                <span className="px-1 text-sm border border-border">168</span>
              </div>
            </div>
          </div>
          {/* FILTER BY PRICE */}
          <div className="px-2">
            <SectionTitle
              title="FILTER BY PRICE"
              hStyle="text-xl whitespace-nowrap"
            />
            <div className="mt-2 p-4 bg-white space-y-4">
              <div className="flex flex-row items-center justify-between text-body">
                <div>
                  <input
                    type="checkbox"
                    name="priceAll"
                    id="priceAll"
                    className="mr-2 scale-105 align-middle"
                  />
                  <label htmlFor="priceAll" className="text-base align-middle">
                    All Price
                  </label>
                </div>
                <span className="px-1 text-sm border border-border">1000</span>
              </div>
              <div className="flex flex-row items-center justify-between text-body">
                <div>
                  <input
                    type="checkbox"
                    name="priceAll"
                    id="priceAll"
                    className="mr-2 scale-105 align-middle"
                  />
                  <label htmlFor="priceAll" className="text-base align-middle">
                    $0 - $100
                  </label>
                </div>
                <span className="px-1 text-sm border border-border">150</span>
              </div>
              <div className="flex flex-row items-center justify-between text-body">
                <div>
                  <input
                    type="checkbox"
                    name="priceAll"
                    id="priceAll"
                    className="mr-2 scale-105 align-middle"
                  />
                  <label htmlFor="priceAll" className="text-base align-middle">
                    $100 - $200
                  </label>
                </div>
                <span className="px-1 text-sm border border-border">295</span>
              </div>
              <div className="flex flex-row items-center justify-between text-body">
                <div>
                  <input
                    type="checkbox"
                    name="priceAll"
                    id="priceAll"
                    className="mr-2 scale-105 align-middle"
                  />
                  <label htmlFor="priceAll" className="text-base align-middle">
                    $200 - $300
                  </label>
                </div>
                <span className="px-1 text-sm border border-border">246</span>
              </div>
              <div className="flex flex-row items-center justify-between text-body">
                <div>
                  <input
                    type="checkbox"
                    name="priceAll"
                    id="priceAll"
                    className="mr-2 scale-105 align-middle"
                  />
                  <label htmlFor="priceAll" className="text-base align-middle">
                    $300 - $400
                  </label>
                </div>
                <span className="px-1 text-sm border border-border">145</span>
              </div>
              <div className="flex flex-row items-center justify-between text-body">
                <div>
                  <input
                    type="checkbox"
                    name="priceAll"
                    id="priceAll"
                    className="mr-2 scale-105 align-middle"
                  />
                  <label htmlFor="priceAll" className="text-base align-middle">
                    $400 - $500
                  </label>
                </div>
                <span className="px-1 text-sm border border-border">168</span>
              </div>
            </div>
          </div>
          {/* FILTER BY PRICE */}
          <div className="px-2">
            <SectionTitle
              title="FILTER BY PRICE"
              hStyle="text-xl whitespace-nowrap"
            />
            <div className="mt-2 p-4 bg-white space-y-4">
              <div className="flex flex-row items-center justify-between text-body">
                <div>
                  <input
                    type="checkbox"
                    name="priceAll"
                    id="priceAll"
                    className="mr-2 scale-105 align-middle"
                  />
                  <label htmlFor="priceAll" className="text-base align-middle">
                    All Price
                  </label>
                </div>
                <span className="px-1 text-sm border border-border">1000</span>
              </div>
              <div className="flex flex-row items-center justify-between text-body">
                <div>
                  <input
                    type="checkbox"
                    name="priceAll"
                    id="priceAll"
                    className="mr-2 scale-105 align-middle"
                  />
                  <label htmlFor="priceAll" className="text-base align-middle">
                    $0 - $100
                  </label>
                </div>
                <span className="px-1 text-sm border border-border">150</span>
              </div>
              <div className="flex flex-row items-center justify-between text-body">
                <div>
                  <input
                    type="checkbox"
                    name="priceAll"
                    id="priceAll"
                    className="mr-2 scale-105 align-middle"
                  />
                  <label htmlFor="priceAll" className="text-base align-middle">
                    $100 - $200
                  </label>
                </div>
                <span className="px-1 text-sm border border-border">295</span>
              </div>
              <div className="flex flex-row items-center justify-between text-body">
                <div>
                  <input
                    type="checkbox"
                    name="priceAll"
                    id="priceAll"
                    className="mr-2 scale-105 align-middle"
                  />
                  <label htmlFor="priceAll" className="text-base align-middle">
                    $200 - $300
                  </label>
                </div>
                <span className="px-1 text-sm border border-border">246</span>
              </div>
              <div className="flex flex-row items-center justify-between text-body">
                <div>
                  <input
                    type="checkbox"
                    name="priceAll"
                    id="priceAll"
                    className="mr-2 scale-105 align-middle"
                  />
                  <label htmlFor="priceAll" className="text-base align-middle">
                    $300 - $400
                  </label>
                </div>
                <span className="px-1 text-sm border border-border">145</span>
              </div>
              <div className="flex flex-row items-center justify-between text-body">
                <div>
                  <input
                    type="checkbox"
                    name="priceAll"
                    id="priceAll"
                    className="mr-2 scale-105 align-middle"
                  />
                  <label htmlFor="priceAll" className="text-base align-middle">
                    $400 - $500
                  </label>
                </div>
                <span className="px-1 text-sm border border-border">168</span>
              </div>
            </div>
          </div>
        </div>
        {/* PRODUCTS */}
        <div className="w-full md:w-3/5 lg:w-3/4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-4">
              <button className="px-4 py-2 bg-white">
                <IoGridSharp />
              </button>
              <button className="p-2 bg-white">
                <IoMenu />
              </button>
            </div>
            <div className="flex flex-row gap-4">
              <button className="px-2 py-1 bg-white shadow">Sorting</button>
              <button className="px-2 py-1 bg-white shadow">Showing</button>
            </div>
          </div>
          <div className="@container">
            {/* @sm:grid-cols-2 @md:grid-cols-3 @lg:grid-cols-4 */}
            <div className="mt-2 grid grid-cols-2 @sm:grid-cols-2 @lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
              {/* <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard /> */}
            </div>
          </div>
        {/* PAGINATION */}
        <div className="mt-10">
          <ul className="w-fit m-auto flex flex-row items-center justify-center border border-border text-yellow bg-white">
            {/* PAGE ITEM */}
            <li className="px-4 py-2 border-r border-border text-body">
              {/* PAGE LINK */}
              <a href="#">
                Previous
              </a>
            </li>
            {/* PAGE ITEM */}
            <li className="px-4 py-2 border-r border-border text-white bg-yellow">
              {/* PAGE LINK */}
              <a href="#">
                1
              </a>
            </li>
            {/* PAGE ITEM */}
            <li className="px-4 py-2 border-r border-border">
              {/* PAGE LINK */}
              <a href="#">
                2
              </a>
            </li>
            {/* PAGE ITEM */}
            <li className="px-4 py-2 border-r border-border">
              {/* PAGE LINK */}
              <a href="#">
                3
              </a>
            </li>
            {/* PAGE ITEM */}
            <li className="px-4 py-2">
              {/* PAGE LINK */}
              <a href="#">
                Next
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
