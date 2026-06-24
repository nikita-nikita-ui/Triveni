import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import nutImg from "../../assets/nutrient1.jpg";

const products = [
  {
    id: 1,
    name: "AMSYS",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500",
  },
  {
    id: 2,
    name: "TRISEAL",
    image: "https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?w=500",
  },
];

export default function ImportedFertilizer() {
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 16;

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;

  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <>
      <Navbar />

      <div className="relative w-full min-h-[250px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[500px] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${nutImg})`,
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="mb-4">
            <span className="inline-block text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-5 py-2 rounded-full bg-white/10 backdrop-blur-md">
              Triveni Chemicals
              <span className="mx-1 sm:mx-2">/</span>
              Products
              <span className="mx-1 sm:mx-2">/</span>
              Imported Nutrient
            </span>
          </div>

          <h1 className="font-extrabold leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Shop
          </h1>
        </div>
      </div>

      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="group border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 flex items-center justify-center p-4 bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-contain group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="py-5 text-center">
                  <h3 className="text-xl font-medium text-blue-900 uppercase tracking-wide">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-12">
              <button
                onClick={() =>
                  currentPage > 1 && setCurrentPage(currentPage - 1)
                }
                disabled={currentPage === 1}
                className={`w-12 h-12 rounded-lg border text-xl transition ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                ‹
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-12 h-12 rounded-lg font-semibold transition ${
                    currentPage === index + 1
                      ? "bg-green-700 text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  currentPage < totalPages && setCurrentPage(currentPage + 1)
                }
                disabled={currentPage === totalPages}
                className={`w-12 h-12 rounded-lg border text-xl transition ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                ›
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
