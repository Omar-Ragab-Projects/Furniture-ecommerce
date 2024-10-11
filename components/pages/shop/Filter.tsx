import { FaFilter } from "react-icons/fa";

function Filter() {
  return (
    <section className="bg-pink py-4">
      <div className="container flex items-center justify-between">
        {/* Left */}
        <div className="left flex items-center">
          <div className="filter flex items-center gap-2 cursor-pointer">
            <FaFilter />
            <span>Filter</span>
          </div>

          <div className="showing-details pl-6 ml-6 border-l border-l-black/40">
            Showing 1-16 of 32 results
          </div>
        </div>

        {/* Right */}
        <div className="right flex items-center gap-8">
          <div className="show flex items-center gap-2">
            <span>Show</span>
            <input
              type="text"
              className="w-10 text-center p-2"
              placeholder="16 "
            />
          </div>

          <div className="sort-by flex items-center gap-2">
            <span>Sort by</span>
            <select name="" id="" className="py-2 px-3">
              <option value="">Default</option>
              <option value="">Discount: High to Low</option>
              <option value="">Avg: Customer rating</option>
              <option value="">Price: Low to high</option>
              <option value="">Price: High to Low</option>
              <option value="">Stock: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Filter;
