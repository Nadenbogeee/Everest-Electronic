// import acDaikinUds from "../assets/AC-DAIKIN-FTV-160x190.png";
import { Button } from "@nextui-org/react";
import acDaikinImage from "../assets/AC-DAIKIN-FTV-160x190.png";
// import acDaikinUds from "../assets/AC-DAIKIN-FTV-160x190.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Breadcrumbs = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const KategoriAC = {
    title: [
      {
        brand: "Panasonic",
        models: [
          {
            id: 1,
            title: "Split / Multi-Split Type Air Conditioners",
            image: acDaikinImage,
            link: "/products/split-ac",
          },
          {
            id: 2,
            title: "Split / Multi-Split Type Air Conditioners",
            image: acDaikinImage,
            link: "/products/split-ac",
          },
          {
            id: 3,
            title: "Split / Multi-Split Type Air Conditioners",
            image: acDaikinImage,
            link: "/products/split-ac",
          },
        ],
      },
      {
        brand: "LG",
        models: [
          {
            id: 1,
            title: "Window Type Air Conditioners",
            image: acDaikinImage,
            link: "/products/window-ac",
          },
          {
            id: 2,
            title: "Portable Air Conditioners",
            image: acDaikinImage,
            link: "/products/portable-ac",
          },
          {
            id: 3,
            title: "Commercial Air Conditioners",
            image: acDaikinImage,
            link: "/products/commercial-ac",
          },
        ],
      },
      {
        brand: "Sharp",
        models: [
          {
            id: 1,
            title: "Inverter Air Conditioners",
            image: acDaikinImage,
            link: "/products/inverter-ac",
          },
          {
            id: 2,
            title: "Plasmacluster Air Purifying AC",
            image: acDaikinImage,
            link: "/products/purifying-ac",
          },
          {
            id: 3,
            title: "Multi-Zone Systems",
            image: acDaikinImage,
            link: "/products/multi-zone",
          },
        ],
      },
      {
        brand: "Samsung",
        models: [
          {
            id: 1,
            title: "Wind-Free Air Conditioners",
            image: acDaikinImage,
            link: "/products/wind-free-ac",
          },
          {
            id: 2,
            title: "Digital Inverter AC",
            image: acDaikinImage,
            link: "/products/digital-inverter",
          },
          {
            id: 3,
            title: "Smart Air Solutions",
            image: acDaikinImage,
            link: "/products/smart-ac",
          },
        ],
      },
      {
        brand: "Gree",
        models: [
          {
            id: 1,
            title: "U-Crown Series",
            image: acDaikinImage,
            link: "/products/u-crown",
          },
          {
            id: 2,
            title: "G-Tech Inverter",
            image: acDaikinImage,
            link: "/products/g-tech",
          },
          {
            id: 3,
            title: "Floor Standing Units",
            image: acDaikinImage,
            link: "/products/floor-standing",
          },
        ],
      },
      {
        brand: "Daikin",
        models: [
          {
            id: 1,
            title: "VRV Systems",
            image: acDaikinImage,
            link: "/products/vrv-systems",
          },
          {
            id: 2,
            title: "Sky Air Series",
            image: acDaikinImage,
            link: "/products/sky-air",
          },
          {
            id: 3,
            title: "Ceiling Mounted Units",
            image: acDaikinImage,
            link: "/products/ceiling-mounted",
          },
        ],
      },
    ],
  };

  const brands = KategoriAC.title;

  const handleBrandClick = (brand) => {
    setSelectedBrand(selectedBrand === brand ? null : brand);
  };

  const filteredData = selectedBrand
    ? KategoriAC.title.filter((item) => item.brand === selectedBrand)
    : KategoriAC.title;

  return (
    <>
      {/* BreadCrumbs kategori */}
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center">
          <Button
            className={`px-4 py-2 ${
              selectedBrand === null ? "bg-blue-500 text-white" : "bg-gray-200"
            } rounded-lg`}
            onClick={() => setSelectedBrand(null)}
          >
            All
          </Button>
          <span className="mx-2">›</span>
        </div>
        {brands.map((brand) => (
          <div key={brand.brand} className="flex items-center">
            <Button
              className={`px-4 py-2 ${
                selectedBrand === brand.brand
                  ? "bg-blue-500/50 text-white"
                  : "bg-gray-200/50"
              } rounded-lg`}
              onClick={() => handleBrandClick(brand.brand)}
            >
              {brand.brand}
            </Button>
            {brand !== brands[brands.length - 1] && (
              <span className="mx-2">›</span>
            )}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {filteredData.flatMap((brand) =>
          brand.models.map((model) => (
            <Link
              key={`${brand.brand}-${model.id}`}
              to={model.link}
              className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-square flex items-center justify-center mb-4">
                <img
                  src={model.image}
                  alt={model.title}
                  className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center text-blue-500 group-hover:text-blue-600">
                <span className="text-sm">{model.title}</span>
                <span className="ml-auto">→</span>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Breadcrumbs;
