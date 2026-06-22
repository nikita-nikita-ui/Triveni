import Chemicals from "../../Images/Chemicals.jpeg";
import React, { useEffect, useState } from "react";
import leaf1 from "../../Images/leaf1.png";

export default function TriveniChemicals() {
  const fullText = "ABOUT TRIVENI CHEMICALS";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100); // speed control (slow/fast)

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="next"
      className="relative w-full bg-white py-16 px-4 md:px-20 overflow-hidden"
    >
      {/* Background blur circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      {/* Header */}
      <div className="text-center mb-12 animate-fadeIn">
        <p className="text-blue-700 font-medium tracking-wide">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-100 mb-3">
            Welcome to Triveni
          </span>
        </p>

        {/* TYPEWRITER HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold  text-green-600 !text-green-600 mt-2">
          {text}
          <span className="border-r-2  text-green-600 !text-green-600 animate-pulse ml-1"></span>
        </h2>

        <div className="mx-auto mt-4 flex justify-center">
          <img src={leaf1} />
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative group animate-slideLeft">
          <img
            src={Chemicals}
            alt="Agriculture"
            className="w-full h-[350px] md:h-[420px] object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition duration-500"
          />

          <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow">
            🌱 Smart Agriculture Solutions
          </div>
        </div>

        <div className="animate-slideRight">
          <p className="text-gray-600 leading-relaxed mb-5">
            Started in 1996, our products are designed on agronomic research and
            prepared in our plants. We start by tracking the highest quality raw
            materials and apply scientific knowledge for better results.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            We focus on efficient crop nutrition, improving agricultural yields,
            and maintaining environmental responsibility while enabling smart
            farming decisions for higher productivity.
          </p>

          <button className="relative px-6 py-3 bg-blue-700 text-white rounded-full font-medium overflow-hidden group">
            <span className="relative z-10 flex items-center gap-2">
              About Us →
            </span>

            <span className="absolute inset-0 bg-green-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out;
          }

          .animate-slideLeft {
            animation: slideLeft 0.5s ease-out forwards;
            opacity: 0;
          }

          .animate-slideRight {
            animation: slideRight 0.5s ease-out forwards;
            opacity: 0;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideLeft {
            from { opacity: 0; transform: translateX(-100px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes slideRight {
            from { opacity: 0; transform: translateX(100px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
    </section>
  );
}
