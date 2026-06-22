import React, { useEffect, useState } from "react";
import leaf1 from "../../Images/leaf1.png";
import trivenidp from "../../Images/triveni-dp.jpg";

export default function Founder() {
  const text = "MESSAGE FROM OUR FOUNDER";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="animated-bg relative w-full py-24 px-6 md:px-24 overflow-hidden border-b border-green-100/40">
      <img
        src={leaf1}
        alt="background ornament"
        className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none transform scale-y-[-1] origin-center rotate-180"
      />

      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-yellow-100/30 rounded-full blur-3xl blob-1"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl blob-2"></div>
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-green-100/20 rounded-full blur-3xl blob-3"></div>

      <div className="absolute top-24 right-[15%] w-3.5 h-3.5 bg-yellow-300/40 rounded-full floating-particle-1 blur-[1px]"></div>
      <div className="absolute bottom-32 left-[20%] w-3 h-3 bg-blue-400/30 rounded-full floating-particle-2 blur-[1px]"></div>
      <div className="absolute top-1/2 left-[10%] w-5 h-5 bg-green-300/40 rounded-full floating-particle-3 blur-[2px]"></div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <p className="text-green-700 font-semibold tracking-wide anim-fade-up">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100/80 to-green-100/80 text-green-800 text-sm font-semibold px-6 py-2.5 rounded-full border border-yellow-200/50 shadow-[0_8px_30px_rgb(250,204,21,0.08)] transition-all duration-500 hover:scale-105 hover:from-blue-50 hover:to-green-50 hover:text-blue-700 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] cursor-default">
            Founder
          </span>
        </p>

        <h2 className="text-4xl md:text-6xl font-black mt-6 tracking-tight min-h-[60px] md:min-h-[70px] bg-gradient-to-r from-green-950 via-emerald-800 to-yellow-500 bg-clip-text text-transparent pb-2 drop-shadow-[0_2px_10px_rgba(16,185,129,0.05)] anim-fade-up">
          {displayed}
        </h2>

        <div className="mx-auto my-6 flex justify-center leaf-animated hover:scale-125 transition-transform duration-500 cursor-pointer anim-fade-up">
          <img
            src={leaf1}
            alt="leaf decorative"
            className="w-16 h-auto drop-shadow-[0_10px_15px_rgba(16,185,129,0.2)]"
          />
        </div>

        <div className="hover-card p-8 md:p-12 rounded-[2.5rem] bg-white/45 backdrop-blur-md border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(16,185,129,0.12)] transition-all duration-700 max-w-4xl mx-auto mt-8 anim-fade-up delay-200">
          <p className="text-gray-700 text-base md:text-xl leading-relaxed font-medium transition-all duration-300 hover:text-gray-900">
            Every product we create is rooted in{" "}
            <span className="text-emerald-700 font-extrabold hover:text-yellow-600 transition-colors duration-300 cursor-pointer border-b-2 border-emerald-100 hover:border-yellow-400 pb-0.5">
              agronomic research
            </span>{" "}
            and manufactured in our own facilities. We begin with the highest
            quality raw materials and process them using the most up-to-date{" "}
            <span className="text-emerald-700 font-extrabold hover:text-blue-600 transition-colors duration-300 cursor-pointer border-b-2 border-emerald-100 hover:border-blue-400 pb-0.5">
              scientific and technical methods
            </span>
            .{" "}
            <span className="underline decoration-yellow-400 decoration-2 underline-offset-4 hover:decoration-blue-500 transition-all duration-300 cursor-pointer">
              Innovation
            </span>{" "}
            is at the heart of everything we do — enabling us to deliver{" "}
            <span className="font-bold text-green-800 border-b-2 border-dashed border-green-300 hover:border-blue-400 transition-all duration-300 cursor-pointer pb-0.5">
              cutting-edge agricultural solutions
            </span>{" "}
            to our partners.
          </p>
        </div>

        <div className="mt-14 flex items-center justify-center gap-5 px-8 py-5 rounded-full w-fit mx-auto bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_15px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(59,130,246,0.18)] hover:bg-white/90 hover:border-blue-200 transition-all duration-500 hover:scale-105 cursor-pointer founder-card anim-fade-up delay-400">
          <div className="relative group/avatar">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 via-green-400 to-blue-400 rounded-full blur opacity-30 group-hover/avatar:opacity-100 group-hover/avatar:animate-spin duration-1000"></div>
            <img
              src={trivenidp}
              alt="Founder"
              className="relative w-20 h-20 rounded-full object-cover border-2 border-green-500 shadow-inner group-hover/avatar:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="text-left">
            <h4 className="text-blue-900 font-black text-lg md:text-xl tracking-tight transition-colors duration-300 hover:text-blue-700">
              Sh. Chander Goyal
            </h4>
            <p className="text-gray-500 font-semibold text-sm md:text-base mt-0.5 tracking-wide">
              Managing Director
            </p>
          </div>
        </div>
      </div>

      <style>
        {`
          .animated-bg {
            background: linear-gradient(-45deg, #f0fdf4, #fefce8, #ffffff, #eff6ff, #f7fee7);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes blobFloat1 {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(45px, -65px) scale(1.12); }
          }

          @keyframes blobFloat2 {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(-45px, 45px) scale(0.95); }
          }

          @keyframes blobFloat3 {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(55px, 55px) scale(1.18); }
          }

          .blob-1 { animation: blobFloat1 12s infinite ease-in-out; }
          .blob-2 { animation: blobFloat2 15s infinite ease-in-out; }
          .blob-3 { animation: blobFloat3 18s infinite ease-in-out; }

          @keyframes float1 {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-20px) translateX(12px); }
          }

          @keyframes float2 {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(18px) translateX(-18px); }
          }

          @keyframes float3 {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-25px) translateX(-8px); }
          }

          .floating-particle-1 { animation: float1 8s infinite ease-in-out; }
          .floating-particle-2 { animation: float2 10s infinite ease-in-out; }
          .floating-particle-3 { animation: float3 12s infinite ease-in-out; }

          @keyframes leafFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
          }

          .leaf-animated {
            animation: leafFloat 4.5s ease-in-out infinite;
          }

          .hover-card {
            border-left: 5px solid transparent;
            transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .hover-card:hover {
            border-left: 5px solid #059669;
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.75);
          }

          .founder-card {
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .anim-fade-up {
            animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
          }

          .delay-200 {<button className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-bold 
            animation-delay: 200ms;
          }

          .delay-400 {
            animation-delay: 400ms;
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}
