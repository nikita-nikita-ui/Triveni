import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import insecticidesData from "./insecticidesData";

export default function Insecticides() {
  const [currentPage, setCurrentPage] = useState(1);
  const [animate, setAnimate] = useState(false);
  const itemsPerPage = 16;

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = insecticidesData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(
    insecticidesData.length / itemsPerPage
  );

  // Trigger fade-in animation whenever page changes
  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <Navbar />
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
        Insecticides
      </span>
    </div>

    {/* Title */}
    <h1 className="font-extrabold leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
      Shop
    </h1>

  </div>
</div>
      
      {/* pt-24 md:pt-32 जोड़कर हेडर (Navbar) से पर्याप्त दूरी बनाई गई है */}
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Dynamic CSS Keyframe for entry animation */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-grid-item {
            opacity: 0;
            animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}</style>

        <div className="max-w-7xl mx-auto">
          {/* Main Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((product, index) => (
              <div
                key={product.id}
                className={`bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center justify-between h-[360px] transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:border-blue-200 cursor-pointer ${
                  animate ? "animate-grid-item" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 60}ms`
                }}
              >
                {/* Product Visual Container */}
                <div className="w-full h-48 flex items-center justify-center bg-gray-50 rounded-lg p-4 overflow-hidden mb-4 border border-gray-50">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Product Title */}
                <h3 className="!text-[#0C3080] font-bold text-center text-lg tracking-wider uppercase mt-2">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Pagination Section (space-x-4 से गैप बढ़ाया गया है और Left Arrow जोड़ा गया है) */}
          <div className="flex justify-center items-center space-x-4 mt-16">
            
            {/* Previous Arrow Button (Left) */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Page 1 Button */}
            <button
              onClick={() => handlePageChange(1)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg font-semibold transition-all duration-200 ${
                currentPage === 1
                  ? "bg-[#1B5E20] text-white shadow-md"
                  : "border border-gray-200 text-gray-700 bg-white hover:bg-gray-50"
              }`}
            >
              1
            </button>

            {/* Page 2 Button */}
            <button
              onClick={() => handlePageChange(2)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg font-semibold transition-all duration-200 ${
                currentPage === 2
                  ? "bg-[#1B5E20] text-white shadow-md"
                  : "border border-gray-200 text-gray-700 bg-white hover:bg-gray-50"
              }`}
            >
              2
            </button>

            {/* Next Arrow Button (Right) */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}