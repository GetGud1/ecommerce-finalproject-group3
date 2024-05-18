import React from "react";
import { productdata } from "../../../data";
import ProductCard1 from "../ProductCard/ProductCard1";

const ProductPage = () => {
  return (
    <div className="px-10 -z-10">
      {/* heading part */}
      <div className="flex justify-between py-5">
        <p className="font-bold">Filter</p>
        <p>Sort</p>
      </div>

      {/* bottom part */}
      <div className="flex justify-between ">
        {/* filter */}
        {/* product */}

        <div className="flex  flex-wrap justify-between w-[100%] bg-white border p-5 rounded-md">
          {productdata.map((item) => (
            <ProductCard1 product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
