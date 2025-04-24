import Link from "next/link";

export default function ProductCard({ product }) {
  const imageUrl = `https://admin.refabry.com/storage/product/${product.image}`;

  return (
    <Link href={`/products/${product.id}`}>
      <div className="rounded-xl shadow hover:shadow-md transition-all cursor-pointer">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="p-5 pt-0">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-sm text-gray-600">{product?.category?.name}</p>
          <p className="text-green-600 font-bold">৳ {product.price}</p>
        </div>
      </div>
    </Link>
  );
}
