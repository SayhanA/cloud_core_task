export default function HeroSection() {
  return (
    <section className="bg-white lg:py-20 pb-0 max-h-screen mb-20">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Elevate Your Style <br /> with Our{" "}
            <span className="text-pink-600">New Collection</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Discover the latest trends in fashion and get inspired by our new
            styles.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="/shop"
              className="px-6 py-3 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700 transition duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 max-h-[700px] overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1642764873654-9eef0467b342?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Fashion Model"
            className="object-cover object-center rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
