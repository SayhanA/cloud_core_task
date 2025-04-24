"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/features/products/productsSlice";
import ProductCard from "@/components/productCart";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

export default function AllProducts() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen relative flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-6">All Products</h1>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-1 items-center bg-gray-50 w-fit mx-auto rounded-md overflow-hidden">
        <button className="px-4 py-3 cursor-pointer hover:bg-gray-100">
          <FaAnglesLeft className="text-gray-400" />
        </button>
        <button className="px-4 py-3 cursor-pointer hover:bg-gray-100 btn-active bg-gray-200">
          1
        </button>
        <button className="px-4 py-3 cursor-pointer hover:bg-gray-100">
          2
        </button>
        <button className="px-4 py-3 cursor-pointer hover:bg-gray-100">
          3
        </button>
        <span>...</span>
        <button className="px-4 py-3 cursor-pointer hover:bg-gray-100">
          5
        </button>
        <button className="px-4 py-3 cursor-pointer hover:bg-gray-100">
          <FaAnglesRight />
        </button>
      </div>
    </div>
  );
}
