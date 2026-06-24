import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const products = [
  {
    id: 1,
    name: "DUSTER-71",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500",
  },
  {
    id: 2,
    name: "GLYSTAR",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=500",
  },
  {
    id: 3,
    name: "MATRIX",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=500",
  },
  {
    id: 4,
    name: "MOXON",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500",
  },
  {
    id: 5,
    name: "NAKA",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500",
  },
  {
    id: 6,
    name: "OXA",
    image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=500",
  },
  {
    id: 7,
    name: "PENTOX",
    image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?w=500",
  },
  {
    id: 8,
    name: "PYRON",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500",
  },
  // PAGE 2
  {
    id: 9,
    name: "HERBEX",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500",
  },
  {
    id: 10,
    name: "WEEDOFF",
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=500",
  },
  {
    id: 11,
    name: "GREENX",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=500",
  },
  {
    id: 12,
    name: "CROPKILL",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500",
  },
  {
    id: 13,
    name: "AGROX",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500",
  },
  {
    id: 14,
    name: "FIELDPRO",
    image:
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=500",
  },
  {
    id: 15,
    name: "KILLMAX",
    image:
      "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?w=500",
  },
  {
    id: 16,
    name: "AGRISTAR",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500",
  },
];

export default function Herbicides() {
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <>
      <Navbar />

      {/* Banner */}
{/* Banner */}
<div className="relative w-full min-h-[250px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[500px] overflow-hidden flex items-center justify-center">

  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&w=1600&q=80')",
    }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">

    {/* Breadcrumb */}
    <div className="mb-4">
      <span className="inline-block text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-5 py-2 rounded-full bg-white/10 backdrop-blur-md">
        Triveni Chemicals
        <span className="mx-1 sm:mx-2">/</span>
        Products
        <span className="mx-1 sm:mx-2">/</span>
        Herbicides
      </span>
    </div>

    {/* Title */}
    <h1 className="font-bold leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
      Shop
    </h1>

  </div>
</div>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="group border rounded-xl p-5 bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain group-hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="text-center mt-5 text-2xl font-medium !text-blue-900">
                {product.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Pagination */}
      {/* Pagination */}
<div className="flex justify-center items-center gap-3 mt-12">

  {/* Left Button */}
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className={`w-12 h-12 rounded-lg border text-lg ${
      currentPage === 1
        ? "opacity-50 cursor-not-allowed"
        : "hover:bg-green-100"
    }`}
  >
    ❮
  </button>

  {[...Array(totalPages)].map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentPage(index + 1)}
      className={`w-12 h-12 rounded-lg border font-semibold transition ${
        currentPage === index + 1
          ? "bg-green-700 text-white"
          : "bg-white text-gray-700 hover:bg-green-100"
      }`}
    >
      {index + 1}
    </button>
  ))}

  {/* Right Button */}
  <button
    onClick={() =>
      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
    }
    disabled={currentPage === totalPages}
    className={`w-12 h-12 rounded-lg border text-lg ${
      currentPage === totalPages
        ? "opacity-50 cursor-not-allowed"
        : "hover:bg-green-100"
    }`}
  >
    ❯
  </button>

</div>
      </section>

      <Footer />
    </>
  );
}