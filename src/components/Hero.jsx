import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-violet-50 to-violet-100 dark:from-gray-100 dark:to-amber-100">
      <div className="container mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            Welcome to <span className="text-violet-600">MyShop</span>
          </h1>
          <p className="text-lg text-gray-700">
            Discover amazing products, explore details, and manage your own products easily.  
            Login to access the dashboard and start adding your items!
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <Link
              href="/products"
              className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg shadow hover:bg-violet-700 transition"
            >
              View Products
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 border border-violet-600 text-violet-600 font-semibold rounded-lg hover:bg-violet-50 transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
            alt="Shopping illustration"
            className="w-72 lg:w-96"
          />
        </div>
      </div>
    </section>
  );
}
