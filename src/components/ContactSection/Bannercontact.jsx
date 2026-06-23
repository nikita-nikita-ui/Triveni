import React from "react";
import tamatoimg from "../../Images/tamatoimg.jpg";
import tractor from "../../Images/tractor.jpg";
import farrming from "../../Images/farrming.jpg";

const Bannercontact = () => {


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
              Triveni Chemicals <span className="mx-2">/</span> Contact
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold">
           Contact
          </h1>

        </div>
      </div>

    </div>
  );
};

export default Bannercontact;