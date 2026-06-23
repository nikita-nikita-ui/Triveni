import React from "react";
import tamatoimg from "../../Images/tamatoimg.jpg";
import tractor from "../../Images/tractor.jpg";
import farrming from "../../Images/farrming.jpg";

const Bannersection = () => {
  const cards = [
    {
      id: 1,
      tag: "🌱 Organic",
      image: tamatoimg,
      title: "Organic Fertilizers Plants",
      desc: "A farmer harvesting sweet tomatoes using organic methods.",
    },
    {
      id: 2,
      tag: "🚜 Farming",
      image: tractor,
      title: "Drive Sustainable Growth",
      desc: "Improving soil health and maximizing sustainable yield.",
    },
    {
      id: 3,
      tag: "🌾 Natural",
      image: farrming,
      title: "Organic Fertilizers",
      desc: "Natural way to improve soil structure and nutrition.",
    },
  ];

  return (
    <div className="w-full">

      {/* HERO SECTION */}
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
              Triveni Chemicals <span className="mx-2">/</span> Blog
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold">
            BLOG
          </h1>

        </div>
      </div>

      {/* CARDS SECTION (BELOW BANNER - NO OVERLAP) */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-6">

        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >

            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <span className="text-xs font-bold text-green-700">
                {card.tag}
              </span>

              <h3 className="text-lg font-bold mt-2 text-gray-800">
                {card.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {card.desc}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Bannersection;