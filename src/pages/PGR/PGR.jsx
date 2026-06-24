import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const products = [
  {
    name: "ETHRONE",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
    type: "bottle",
  },
  {
    name: "GIBBRAL",
    image: "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?w=800",
    type: "bottle",
  },
  {
    name: "GOLD-GR & ZAFFRON EW",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800",
    type: "packet",
  },
  {
    name: "Plantocin",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800",
    type: "bottle",
  },
  {
    name: "GURKHA",
    image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=800",
    type: "bottle",
  },
  {
    name: "Tokazi",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
    type: "packet",
  },
  {
    name: "MARGOSA",
    image: "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?w=800",
    type: "bottle",
  },
  {
    name: "TRIWET",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800",
    type: "bottle",
  },
];

export default function PGR() {
  return (
    <>
      <Navbar />
{/* Background Banner Section */}
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
        PGR
      </span>
    </div>

    {/* Title */}
    <h1 className="font-extrabold leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
      Shop
    </h1>

  </div>
</div>

  
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

<section className="bg-slate-50/50 py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">

      {products.map((product, index) => (
        <div
          key={product.name}
          className="group cursor-pointer flex flex-col items-center animate-fade-in-up"
          style={{
            animationDelay: `${index * 80}ms`,
            opacity: 0,
          }}
        >

          {/* Image Container */}
          <div className="relative w-full aspect-square sm:aspect-[4/5] bg-white border border-gray-200 rounded-2xl sm:rounded-[24px] p-4 sm:p-6 md:p-8 flex items-center justify-center shadow-sm transition-all duration-500 ease-out group-hover:shadow-[0_20px_40px_rgba(15,46,92,0.06)] group-hover:border-emerald-200 group-hover:-translate-y-2 overflow-hidden">

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Product Image */}
            <ProductImage
              src={product.image}
              name={product.name}
              type={product.type}
            />

          </div>

          {/* Product Name */}
          <h3 className="mt-3 sm:mt-4 text-center text-base sm:text-lg md:text-xl font-semibold uppercase text-blue-700 transition-colors duration-300 group-hover:text-blue-900 px-2">
            {product.name}
          </h3>

        </div>
      ))}

    </div>
  </div>
</section>

      <Footer />
    </>
  );
}


function ProductImage({ src, name, type }) {
  const [hasError, setHasError] = React.useState(false);

  if (src && !hasError) {
    return (
      <img
        src={src}
        alt={name}
        onError={() => setHasError(true)}
        className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
      />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-full opacity-35 group-hover:opacity-60 transition-opacity duration-300">
      {type === "bottle" ? (
        <svg
          className="h-2/3 w-auto text-slate-400 group-hover:text-emerald-500 transition-colors duration-300"
          viewBox="0 0 100 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M35 15h30v15H35z" fill="currentColor" fillOpacity="0.1" />
          <path d="M38 30h24v15H38z" />
          <path d="M50 45c-15 0-25 15-25 35v95c0 8 7 15 15 15h20c8 0 15-7 15-15V80c0-20-10-35-25-35z" />
          <path d="M30 100h40M30 135h40" strokeDasharray="4 4" />
        </svg>
      ) : (
        <svg
          className="h-2/3 w-auto text-slate-400 group-hover:text-emerald-500 transition-colors duration-300"
          viewBox="0 0 120 180"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 15h90v150H15z" fill="currentColor" fillOpacity="0.1" />
          <path d="M15 25h90M15 155h90" />
          <path d="M35 70l25 30 25-30" />
          <circle cx="60" cy="115" r="10" />
        </svg>
      )}
      <span className="text-[10px] text-slate-400 font-medium tracking-normal mt-2 block">
        Placeholder
      </span>
    </div>
  );
}