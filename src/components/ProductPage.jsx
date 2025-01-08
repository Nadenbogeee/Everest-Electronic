import { Link } from "react-router-dom";
import Breadcrumbs from "./BreadCrumbs";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background */}
      <div className="relative h-[300px] bg-cover bg-center">
        {/* Breadcrumb */}
        <div className="absolute top-4 left-4 text-blue-500">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="hover:text-blue-300">
              Home
            </Link>
            <span>›</span>
            <Link to="/products" className="hover:text-blue-300">
              Products & Services
            </Link>
            <span>›</span>
            <span>Air Conditioning & Refrigeration</span>
          </div>
        </div>
        {/* Title */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="bg-blue-500 text-white px-8 py-2 text-3xl font-bold">
            AIR CONDITIONING & REFRIGERATION
          </h1>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Products</h2>
        {/* BreadCrumbs kategori */}
        <Breadcrumbs />
      </div>
    </div>
  );
};
export default ProductPage;
