import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function ImportedNutrient() {
  const products = [
  {
    id: 1,
    name: "CALCIUM MAX",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600",
  },
  {
    id: 2,
    name: "ZINC PLUS",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600",
  },
  {
    id: 3,
    name: "MAGNESIUM PRO",
    image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600",
  },
  {
    id: 4,
    name: "BORON GOLD",
    image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?w=600",
  },
  {
    id: 5,
    name: "MICRO MIX",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600",
  },
  {
    id: 6,
    name: "NUTRI BOOST",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600",
  },
  {
    id: 7,
    name: "TRACE POWER",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
  },
  {
    id: 8,
    name: "AGRO NUTRI",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
  },
];
  return (
 <>
 <Navbar />
{/* Banner */}
<div className="relative w-full min-h-[250px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[500px] overflow-hidden flex items-center justify-center">

  {/* Background Image */}
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
    
    <div className="mb-4">
      <span className="inline-block text-xs sm:text-sm md:text-base lg:text-lg px-3 py-2 sm:px-5 rounded-full bg-white/10 backdrop-blur-md">
        Triveni Chemicals / Products / Imported Nutrient
      </span>
    </div>

    <h1 className="font-bold leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
      Shop
    </h1>

  </div>
</div>

      {/* Products Section */}
<section className="max-w-7xl mx-auto px-5 py-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {products.map((product) => (
      <div
        key={product.id}
        className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
      >
        <div className="h-[260px] flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain hover:scale-105 transition duration-300"
          />
        </div>

        <div className="py-5 text-center">
          <h3 className="text-2xl font-medium !text-blue-900 uppercase">
            {product.name}
          </h3>
        </div>
      </div>
    ))}
  </div>
</section>
      <Footer />
 </>
  );
}
