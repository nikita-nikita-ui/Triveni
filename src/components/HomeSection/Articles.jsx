import React, { useEffect, useState, useRef } from "react";
import leaf1 from "../../Images/leaf1.png";
import tamatoimg from "../../Images/organic.avif";
import tractor from "../../Images/fartractor.avif";
import farrming from "../../Images/natur.avif";
import { useNavigate } from "react-router-dom";

export default function Articles() {
  const text = "Latest News & Articles";
  const [displayed, setDisplayed] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      id: 1,
      tag: "🌱 Organic",
      image: tamatoimg,
      alt: "Farmer harvesting tomatoes",
      title: "Organic Fertilizers Plants",
      desc: "A farmer harvesting sweet, fresh tomatoes from robust vines is a testament to the effectiveness of organic fertilizers and natural growing methods.",
      delay: 0,
    },
    {
      id: 2,
      tag: "🚜 Farming",
      image: tractor,
      alt: "Tractor on a farm field",
      title: "Drive Sustainable Growth",
      desc: "Adopting methods that improve soil health for future generations and safeguard the environment in addition to maximizing crop yields sustainably.",
      delay: 120,
    },
    {
      id: 3,
      tag: "🌾 Natural",
      image: farrming,
      alt: "Rice paddy planting",
      title: "Organic Fertilizers",
      desc: "An essential component of contemporary sustainable farming, organic fertilizers provide a natural means of improving soil structure and crop nutrition.",
      delay: 240,
    },
  ];

  return (
    <>
      <section className="animated-bg relative w-full py-16 px-6 md:px-24 overflow-hidden border-b border-green-100/40">
        {/* Background Blobs & Particles */}
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-yellow-100/30 rounded-full blur-3xl blob-1"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl blob-2"></div>
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-green-100/20 rounded-full blur-3xl blob-3"></div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <p className="text-green-700 font-semibold tracking-wide anim-fade-up">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100/80 to-green-100/80 text-green-800 text-sm font-semibold px-6 py-2.5 rounded-full border border-yellow-200/50 shadow-sm transition-all duration-500 hover:scale-105 cursor-default">
              From the Blog Post
            </span>
          </p>

          <h2 className="text-4xl md:text-6xl font-black mt-6 tracking-tight bg-gradient-to-r from-green-950 via-emerald-800 to-yellow-500 bg-clip-text text-transparent pb-2 anim-fade-up">
            {displayed}
          </h2>

          <div className="mx-auto my-6 flex justify-center leaf-animated hover:scale-125 transition-transform duration-500 cursor-pointer anim-fade-up">
            <img src={leaf1} alt="leaf decorative" className="w-16 h-auto drop-shadow-lg" />
          </div>

          {/* Cards Grid Container */}
          <div style={{ 
              marginTop: "3rem", 
              width: "100%",
              fontFamily: "'Inter', sans-serif" 
          }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 30,
              }}
            >
              {cards.map((card, i) => (
                <Card key={card.id} card={card} index={i} navigate={navigate} />
              ))}
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
            .blob-1 { animation: blobFloat1 12s infinite ease-in-out; }
            .blob-2 { animation: blobFloat1 15s infinite reverse ease-in-out; }
            .blob-3 { animation: blobFloat1 18s infinite ease-in-out; }
            
            .leaf-animated { animation: leafFloat 4.5s ease-in-out infinite; }
            @keyframes leafFloat {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-10px) rotate(5deg); }
            }

            .anim-fade-up {
              animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              opacity: 0;
            }
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </section>
    </>
  );
}

// Card Component - navigate को डीस्ट्रक्चर किया गया है
function Card({ card, navigate }) {
  const ref = useRef(null);
  const visible = useIntersectionObserver(ref);
  const [hovered, setHovered] = useState(false);

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible 
          ? (hovered ? "translateY(-10px)" : "translateY(0)") 
          : "translateY(40px)",
        transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${card.delay}ms`,
        borderRadius: 20,
        background: "#fff",
        border: "1px solid #f0fdf4",
        overflow: "hidden",
        boxShadow: hovered ? "0 20px 25px -5px rgba(0, 0, 0, 0.1)" : "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
        textAlign: 'left'
      }}
    >
      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
        <img
          src={card.image}
          alt={card.alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}
        />
        <span style={{
            position: "absolute", top: 12, left: 12,
            background: "white", color: "#166534",
            fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 20,
        }}>
          {card.tag}
        </span>
      </div>

      <div style={{ padding: "1.5rem" }}>
        <h3 style={{ fontSize: 18, fontWeight: 800, color: "#111827", marginBottom: 10 }}>
          {card.title}
        </h3>
        <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.6, marginBottom: 20 }}>
          {card.desc}
        </p>
        <button 
          onClick={() => navigate("/sustainable")}
          style={{
            padding: "8px 16px", borderRadius: 8, border: "2px solid #15803d",
            color: hovered ? "#fff" : "#15803d",
            background: hovered ? "#15803d" : "transparent",
            transition: "0.3s", fontWeight: 600, cursor: "pointer"
          }}
        >
          Learn more →
        </button>
      </div>
    </article>
  );
}

// Helper: Intersection Observer Hook
function useIntersectionObserver(ref) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isVisible;
}