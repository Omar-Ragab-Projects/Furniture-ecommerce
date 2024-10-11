import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

function ShopBanner() {
  return (
    <section className="relative h-[316px]">
      {/* Banner Image */}
      <Image
        src="/shop/banner.png"
        alt="Banner Image"
        fill
        className="object-cover"
      />

      {/* Banner Content */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <h2 className="font-bold text-4xl mb-6">Shop</h2>

        <div className="flex gap-2 items-center ">
          <Link href="/" className="font-bold">
            Home
          </Link>{" "}
          <BiChevronRight className="w-6 h-6  " /> <span>Shop</span>
        </div>
      </div>
    </section>
  );
}
export default ShopBanner;
