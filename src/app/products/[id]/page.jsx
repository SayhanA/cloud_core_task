"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import baseUrl from "@/utils/baseUrl";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await baseUrl.get("all/product/get");
      const prod = res.data.data.data.find((p) => p.id.toString() === id.toString());
      setProduct(prod);
    }

    fetchData();
  }, [id]);

  if (!product) return <div className="p-10">Loading...</div>;

  const imageUrl = `https://admin.refabry.com/storage/product/${product.image}`;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={imageUrl}
          className="w-full md:w-1/2 rounded-lg shadow"
          alt={product.name}
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="mb-2">{product.description}</p>
          <p className="text-lg font-semibold">Price: ৳{product.price}</p>
        </div>
      </div>
    </div>
  );
}
