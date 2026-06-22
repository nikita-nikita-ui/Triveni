import React from "react";

// प्राकृतिक तेज़ धूप (Sunlight), पेड़ (Trees) और पौधों (Plants) से भरपूर खूबसूरत लाइट इमेज
const bgImage =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1920";

export default function AboutHero() {
  return (
    <div className="relative h-[95vh] w-full overflow-hidden flex items-center justify-center text-center text-white font-sans">
      {/* Custom CSS for seamless animations - No tailwind.config.js modification needed! */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes panBackground {
          0% { transform: scale(1.03) translate(0px, 0px); }
          50% { transform: scale(1.10) translate(-8px, 4px); }
          100% { transform: scale(1.03) translate(0px, 0px); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes floatGlow {
          0% { transform: translate(0px, 0px) scale(1); opacity: 0.4; }
          50% { transform: translate(20px, -20px) scale(1.1); opacity: 0.6; }
          100% { transform: translate(0px, 0px) scale(1); opacity: 0.4; }
        }
        .animate-pan-bg {
          animation: panBackground 28s infinite ease-in-out;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-float-glow {
          animation: floatGlow 10s infinite ease-in-out;
        }
        .delay-100 { animation-delay: 150ms; }
        .delay-200 { animation-delay: 300ms; }
        .delay-300 { animation-delay: 450ms; }
        .delay-400 { animation-delay: 600ms; }
      `,
        }}
      />

      {/* Animated Bright & Sunlit Background (Ken Burns Effect) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center animate-pan-bg"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Light & Warm Sunlit Overlay (allows the natural sunlight & trees to shine through vividly) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-emerald-950/25 to-amber-400/20 z-0" />
      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* Glowing Warm Sunlight & Emerald Orbs */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-amber-400/20 blur-[110px] pointer-events-none animate-float-glow z-0" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-400/15 blur-[120px] pointer-events-none animate-float-glow z-0"
        style={{ animationDelay: "-5s" }}
      />

      {/* Content Container */}
      <div className="relative z-10 px-6 max-w-4xl flex flex-col items-center">
        {/* Breadcrumb with glowing signal (optimized contrast for lighter bg) */}
        <div className="animate-fade-in-up delay-100 mb-6">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm tracking-widest bg-white/10 border border-white/20 hover:border-emerald-400/40 px-5 py-2 rounded-full backdrop-blur-md transition-all duration-300 cursor-default select-none shadow-[0_4px_30px_rgba(0,0,0,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-white uppercase font-semibold">
              Triveni Chemicals
            </span>
            <span className="text-white/50">/</span>
            <span className="text-emerald-300 font-bold uppercase">About</span>
          </span>
        </div>

        {/* Dynamic Title with Gradient Text & Drop Shadow for high readability */}
        <h1 className="animate-fade-in-up delay-200 text-5xl md:text-7xl font-black tracking-widest leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          <span className="bg-gradient-to-r from-white via-amber-100 to-emerald-200 bg-clip-text text-transparent">
            ABOUT US
          </span>
        </h1>

        {/* Content Paragraph (slightly bolder with a soft drop shadow so it stands out against the sunlight) */}
        <p className="animate-fade-in-up delay-300 mt-6 text-base md:text-lg text-white max-w-2xl leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          We are a trusted chemical manufacturing company delivering innovative,
          sustainable and high-quality solutions. Our mission blends industrial
          excellence with environmental responsibility.
        </p>

        {/* Animated Premium CTA Button */}
        <div className="animate-fade-in-up delay-400 mt-10">
          <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm md:text-base tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
            {/* Slide Hover Transition Effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

            {/* Shiny light reflection sweep on hover */}
            <span className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-1000 ease-out"></span>

            <span className="relative z-10 flex items-center gap-2">
              Explore More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Soft dark gradient fade-out at the bottom to connect nicely with the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-10" />
    </div>
  );
}
