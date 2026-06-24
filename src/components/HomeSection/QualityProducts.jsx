import { useState, useEffect } from "react";
import bgimg from  "../../Images/photo.avif"

const LeafIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30 95 C30 95 30 20 30 10 M30 10 C20 25 5 30 5 50 C5 70 18 85 30 95 M30 10 C40 25 55 30 55 50 C55 70 42 85 30 95"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path d="M30 30 C22 38 18 48 20 58" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M30 30 C38 38 42 48 40 58" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M30 50 C25 55 22 63 24 70" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M30 50 C35 55 38 63 36 70" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

export default function QualityProduct() {
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: "480px" }}>
      {/* Background image with overlay */}
    <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${bgimg})`,
  }}
/>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Subtle animated fog layer */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(100,160,80,0.4) 0%, transparent 70%)",
          animation: "fogDrift 8s ease-in-out infinite alternate",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
        {/* Eyebrow label */}
        <p
          className="text-white/80 text-sm font-medium tracking-widest uppercase mb-5"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(-12px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          Best Quality Products
        </p>

        {/* Main heading row with leaf icons */}
        <div className="flex items-center gap-6 mb-3">
          {/* Left leaf */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateX(0) rotate(-15deg)" : "translateX(-30px) rotate(-15deg)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <LeafIcon className="w-10 h-16 opacity-90" />
          </div>

          {/* Heading */}
          <h1
            className="text-white font-extrabold leading-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            Expertly Crafted for
            <br />
            Smarter Farming
          </h1>

          {/* Right leaf */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateX(0) rotate(15deg)" : "translateX(30px) rotate(15deg)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <LeafIcon className="w-10 h-16 opacity-90" />
          </div>
        </div>

        {/* CTA Button */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.55s, transform 0.8s ease 0.55s",
            marginTop: "2rem",
          }}
        >
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white text-base"
            style={{
              background: hovered ? "#1e3fa8" : "#1d3fac",
              boxShadow: hovered
                ? "0 8px 32px rgba(29,63,172,0.55)"
                : "0 4px 16px rgba(29,63,172,0.35)",
              transform: hovered ? "scale(1.05) translateY(-2px)" : "scale(1) translateY(0)",
              transition: "all 0.25s ease",
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
          >
            Contact Us
            <span
              style={{
                display: "inline-block",
                transform: hovered ? "translateX(4px)" : "translateX(0)",
                transition: "transform 0.25s ease",
              }}
            >
              →
            </span>
          </button>
        </div>
      </div>

      {/* CSS keyframes injected as style tag */}
      <style>{`
        @keyframes fogDrift {
          from { transform: scaleX(1) translateY(0); }
          to { transform: scaleX(1.08) translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
