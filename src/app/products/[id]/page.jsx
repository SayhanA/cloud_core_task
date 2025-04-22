import baseUrl from "@/utils/baseUrl";

export async function generateStaticParams() {
  const res = await baseUrl.get("all/product/get");
  return res.data.data.data.map((p) => ({ id: p.id.toString() }));
}

export default async function SingleProduct({ params }) {
  const { id } = params;

  const res = await baseUrl.get("all/product/get");
  const product = res.data.data.data.find((p) => p.id.toString() === id);

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
