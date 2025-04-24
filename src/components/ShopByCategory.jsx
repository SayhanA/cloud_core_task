import SectionHeader from "./SectionHeader";

const categories = [
  {
    name: "Men",
    image: "/categories/man.avif",
    link: "/shop/men",
  },
  {
    name: "Women",
    image: "/categories/women.avif",
    link: "/shop/women",
  },
  {
    name: "Kids",
    image: "/categories/kids.avif",
    link: "/shop/kids",
  },
  {
    name: "Accessories",
    image: "/categories/accessories.avif",
    link: "/shop/accessories",
  },
];

export default function ShopByCategory() {
  return (
    <section className="py-20 pt-0 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <SectionHeader>Shop by Category</SectionHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.link}
              className="group block overflow-hidden rounded-xl shadow hover:shadow-xl transition"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="p-4 bg-white text-lg font-semibold text-gray-800">
                {cat.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
