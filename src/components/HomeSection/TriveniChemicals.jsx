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
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="next"
      className="animated-bg relative w-full py-20 px-6 md:px-24 overflow-hidden border-b border-green-100"
    >
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-yellow-100/30 rounded-full blur-3xl blob-1"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-green-100/20 rounded-full blur-3xl blob-2"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-yellow-50/20 rounded-full blur-3xl blob-3"></div>

      <div className="absolute top-24 left-[15%] w-4 h-4 bg-yellow-400/30 rounded-full floating-particle-1 blur-[1px]"></div>
      <div className="absolute bottom-32 right-[20%] w-3 h-3 bg-green-400/30 rounded-full floating-particle-2 blur-[1px]"></div>
      <div className="absolute top-1/2 right-[10%] w-5 h-5 bg-yellow-300/30 rounded-full floating-particle-3 blur-[2px]"></div>

      <div className="text-center mb-16 anim-fade-up">
        <p className="text-green-900 font-semibold tracking-wide">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-green-50 text-green-900 text-xs font-bold px-5 py-2 rounded-full border border-green-200/60 shadow-sm transition-all duration-300 hover:scale-105 hover:from-white hover:to-yellow-50 hover:border-yellow-400 cursor-default">
            Welcome to Triveni
          </span>
        </p>

        <h2 className="text-3xl md:text-5xl font-black mt-4 tracking-tight min-h-[50px] md:min-h-[60px] bg-gradient-to-r from-black via-green-900 to-yellow-600 bg-clip-text text-transparent pb-1">
          {text}
        </h2>

        <div className="mx-auto mt-4 flex justify-center leaf-animated hover:scale-110 transition-transform duration-300 cursor-pointer">
          <img
            src={leaf1}
            alt="leaf decorative"
            className="w-12 h-auto drop-shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative z-10">
        <div className="relative group anim-fade-left delay-200">
          <div className="absolute -inset-3 bg-gradient-to-r from-yellow-100 via-green-200 to-yellow-200 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-700 animate-pulse"></div>

          <div className="relative overflow-hidden rounded-[1.5rem] shadow-lg bg-white p-2 transition-all duration-500 premium-img-container">
            <img
              src={Chemicals}
              alt="Agriculture"
              className="w-full h-[350px] md:h-[420px] object-cover rounded-[1.2rem] transform group-hover:scale-[1.02] transition-all duration-500"
            />
          </div>

          <div className="absolute bottom-6 left-6 bg-white border border-green-100 px-5 py-3 rounded-xl shadow-md transform group-hover:translate-y-[-5px] group-hover:border-yellow-400 transition-all duration-300">
            <span className="text-green-900 font-bold flex items-center gap-2 text-xs md:text-sm">
              🌱 Smart Agriculture Solutions
            </span>
          </div>
        </div>

        <div className="anim-fade-right delay-400 flex flex-col justify-center">
          <div className="premium-card p-6 md:p-8 rounded-[1.8rem] transition-all duration-500 bg-white/70 backdrop-blur-md border border-white/80 shadow-md hover:shadow-lg">
            <p className="text-zinc-800 text-sm md:text-base leading-relaxed mb-4 font-medium">
              Started in{" "}
              <span className="text-green-800 font-extrabold hover:text-yellow-600 transition-colors duration-200 border-b border-green-200 hover:border-yellow-400 pb-0.5">
                1996
              </span>
              , our products are designed on{" "}
              <span className="underline decoration-yellow-400 decoration-2 underline-offset-2 hover:decoration-green-900 transition-all duration-200">
                agronomic research
              </span>{" "}
              and prepared in our plants. We start by tracking the highest
              quality raw materials and apply{" "}
              <span className="text-green-800 font-extrabold hover:text-green-950 transition-colors duration-200 border-b border-green-200 hover:border-green-800 pb-0.5">
                scientific knowledge
              </span>{" "}
              for better results.
            </p>

            <p className="text-zinc-700 text-sm md:text-base leading-relaxed mb-6">
              We focus on{" "}
              <span className="text-green-800 font-bold hover:text-green-950 transition-colors duration-200">
                efficient crop nutrition
              </span>
              , improving agricultural yields, and maintaining environmental
              responsibility while enabling{" "}
              <span className="font-bold text-green-900 border-b border-dashed border-green-300 hover:border-yellow-500 transition-all duration-200 pb-0.5">
                smart farming decisions
              </span>{" "}
              for higher productivity.
            </p>

            <div className="flex">
              <button className="relative px-6 py-2.5 bg-gradient-to-r from-green-800 to-green-900 text-white rounded-full font-bold text-xs md:text-sm shadow-md shadow-green-900/10 overflow-hidden group hover:shadow-lg transition-all duration-300">
                <span className="relative z-10 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform duration-300">
                  About Us{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-green-950 to-yellow-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .animated-bg {
            background: linear-gradient(-45deg, #f4fbf7, #fefdf0, #ffffff, #f4fbf7);
            background-size: 400% 400%;
            animation: gradientShift 12s ease infinite;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes blobFloat1 {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(30px, -40px) scale(1.1); }
          }

          @keyframes blobFloat2 {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(-30px, 30px) scale(0.95); }
          }

          @keyframes blobFloat3 {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(40px, 40px) scale(1.1); }
          }

          .blob-1 { animation: blobFloat1 10s infinite ease-in-out; }
          .blob-2 { animation: blobFloat2 12s infinite ease-in-out; }
          .blob-3 { animation: blobFloat3 14s infinite ease-in-out; }

          @keyframes float1 {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-15px) translateX(10px); }
          }

          @keyframes float2 {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(15px) translateX(-10px); }
          }

          @keyframes float3 {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-20px) translateX(-5px); }
          }

          .floating-particle-1 { animation: float1 6s infinite ease-in-out; }
          .floating-particle-2 { animation: float2 8s infinite ease-in-out; }
          .floating-particle-3 { animation: float3 10s infinite ease-in-out; }

          @keyframes leafFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-8px) rotate(4deg); }
          }

          .leaf-animated {
            animation: leafFloat 4s ease-in-out infinite;
          }

          .image-container {
            position: relative;
          }

          .image-container::after {
            content: '';
            position: absolute;
            top: 0;
            left: -75%;
            width: 50%;
            height: 100%;
            background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%);
            transform: skewX(-25deg);
            transition: 0.8s;
          }

          .image-container:hover::after {
            left: 125%;
          }

          .premium-img-container {
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .premium-img-container:hover {
            transform: translateY(-8px) scale(1.005);
          }

          .premium-card {
            border-left: 4px solid transparent;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .premium-card:hover {
            border-left: 4px solid #15803d;
            transform: translateX(6px);
            background: rgba(255, 255, 255, 0.85);
          }

          .anim-fade-up {
            animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
          }

          .anim-fade-left {
            animation: fadeInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
          }

          .anim-fade-right {
            animation: fadeInRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
          }

          .delay-200 {
            animation-delay: 150ms;
          }

          .delay-400 {
            animation-delay: 300ms;
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-40px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(40px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
    </section>
  );
}
