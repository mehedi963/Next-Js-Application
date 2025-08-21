import Link from "next/link";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-100 dark:text-gray-800 mt-10">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold">🛒 MyShop</h2>
          <p className="mt-2 text-sm text-gray-600">
            A simple Next.js demo app with authentication & products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-violet-600">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-violet-600">Products</Link>
            </li>
            <li>
              <Link href="/dashboard/add-product" className="hover:text-violet-600">Add Product</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" className="hover:text-violet-600">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-violet-600">
              <FaTwitter size={20} />
            </a>
            <a href="https://github.com" target="_blank" className="hover:text-violet-600">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}
