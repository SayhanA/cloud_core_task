import AllProducts from "@/components/AllProducts";
import ShopByCategory from "@/components/ShopByCategory";

export const metadata = {
  title: "All Products | CloudCore",
  description: "Chose your fevourite product from CloudCord",
};

export default function ProductsPage() {
  return (
    <>
      <AllProducts />
    </>
  );
}
