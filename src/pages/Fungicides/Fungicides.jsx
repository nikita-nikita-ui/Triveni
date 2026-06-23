import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const products = [
  {
    id: 1,
    name: "HAXOL",
    image:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=500",
  },
  {
    id: 2,
    name: "HEXATAF",
    image:
      "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500",
  },
  {
    id: 3,
    name: "MACO M-45",
    image:
      "https://images.unsplash.com/photo-1615486363973-f79d875780a6?w=500",
  },
  {
    id: 4,
    name: "MASCOF",
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500",
  },
  {
    id: 5,
    name: "MAXIL",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=500",
  },
  {
    id: 6,
    name: "METAMAN",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500",
  },
  {
    id: 7,
    name: "MOXMAN",
    image:
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=500",
  },
  {
    id: 8,
    name: "OLIBABA",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500",
  },
  {
    id: 9,
    name: "AGROX",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500",
  },
  {
    id: 10,
    name: "TRIGOLD",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500",
  },
  {
    id: 11,
    name: "CROPMAX",
    image:
      "https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?w=500",
  },
  {
    id: 12,
    name: "GREENIX",
    image:
      "https://images.unsplash.com/photo-1615631648086-325025c9e51e?w=500",
  },
  {
    id: 13,
    name: "BIOFORCE",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500",
  },
  {
    id: 14,
    name: "FARMAX",
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500",
  },
  {
    id: 15,
    name: "PLANTON",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500",
  },
  {
    id: 16,
    name: "AGROSTAR",
    image:
      "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500",
  },

  // PAGE 2 PRODUCTS
  {
    id: 17,
    name: "FERTIGO",
    image:
      "https://images.unsplash.com/photo-1615486363973-f79d875780a6?w=500",
  },
  {
    id: 18,
    name: "NUTRIX",
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500",
  },
  {
    id: 19,
    name: "GROWFAST",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=500",
  },
  {
    id: 20,
    name: "POWERCROP",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500",
  },
  {
    id: 21,
    name: "BIOGREEN",
    image:
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=500",
  },
  {
    id: 22,
    name: "FARMOX",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500",
  },
  {
    id: 23,
    name: "ROOTMAX",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500",
  },
  {
    id: 24,
    name: "CROPFIT",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500",
  },
  {
    id: 25,
    name: "PLANTPRO",
    image:
      "https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?w=500",
  },
  {
    id: 26,
    name: "NATUGRO",
    image:
      "https://images.unsplash.com/photo-1615631648086-325025c9e51e?w=500",
  },
  {
    id: 27,
    name: "SUPERAGRO",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500",
  },
  {
    id: 28,
    name: "AGROPLUS",
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500",
  },
  {
    id: 29,
    name: "BIOSTAR",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500",
  },
  {
    id: 30,
    name: "TRIVEX",
    image:
      "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500",
  },
  {
    id: 31,
    name: "MAXGROW",
    image:
      "https://images.unsplash.com/photo-1615486363973-f79d875780a6?w=500",
  },
  {
    id: 32,
    name: "ULTRACROP",
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500",
  },
];
export default function Fungicides() {
  
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 16;

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;

  const currentProducts = products.slice(
    indexOfFirst,
    indexOfLast
  );

  const totalPages = Math.ceil(
    products.length / productsPerPage
  );


  return (
<>
<Navbar />
    {/* Background Banner Section */}
      <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden flex items-center justify-center">
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

        {/* Text */}
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-2">
            <span className="text-sm md:text-lg backdrop-blur-md px-4 py-2 rounded-full bg-white/10">
              Triveni Chemicals <span className="mx-2">/</span> Products <span className="mx-2">/</span> Fungicides
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold">Shop</h1>
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

        {/* Pagination */}
   {/* Pagination */}
<div className="flex justify-center items-center gap-3 mt-12">
  
  {/* Previous Button */}
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

  {/* Page Numbers */}
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

  {/* Next Button */}
  <button
    onClick={() =>
      currentPage < totalPages &&
      setCurrentPage(currentPage + 1)
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
      </div>
    </section>   

<Footer />
</>
  );
}
