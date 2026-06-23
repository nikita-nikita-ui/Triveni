import { useState, useEffect, useRef } from "react";
import chemi from "../../Images/chemi-1.svg";
import dist from "../../Images/dist-1.svg";
import retailer from "../../Images/retailer-1.svg";
import farmer from "../../Images/farmer.svg";
import img5 from "../../Images/321313.png";

const stats = [
  {
    id: 1,
    value: 250,
    suffix: "+",
    label: "Molecules",
    icon: (
  <img
    src={chemi}
    alt="Molecule"
    className="w-12 h-12 object-contain"
  />
    ),
  },
  {
    id: 2,
    value: 3500,
    suffix: "+",
    label: "Distributers",
    icon: (
  <img
    src={dist}
    alt="Molecule"
    className="w-12 h-12 object-contain"
  />
    ),
  },
  {
    id: 3,
    value: 30000,
    suffix: "+",
    label: "Retailers",
    icon: (
     <img
    src={retailer}
    alt="Molecule"
    className="w-12 h-12 object-contain"
  />
    ),
  },
  {
    id: 4,
    value: 10,
    suffix: " L+",
    label: "Farmers",
    icon: (
  <img
    src={farmer}
    alt="Molecule"
    className="w-12 h-12 object-contain"
  />
    ),
  },
  {
    id: 5,
    value: 28,
    suffix: "+",
    label: "Years of Experience",
    icon: (
   <img
    src={img5}
    alt="Molecule"
    className="w-12 h-12 object-contain"
  />
    ),
  },
];

function useCountUp(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const startVal = 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * (end - startVal) + startVal));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [end, duration, start]);

  return count;
}

function StatCard({ stat, index, animate }) {
  const count = useCountUp(stat.value, 2000 + index * 200, animate);

  const formatNumber = (n) => {
    if (n >= 1000) return n.toLocaleString("en-IN");
    return n.toString();
  };

  return (
    <div
      className="flex flex-col items-center gap-3 px-4 py-8 group transition-all duration-300 hover:scale-105"
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
    >
      <div className="relative">
        <div
          className="absolute inset-0 rounded-full bg-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"
          style={{ filter: "blur(12px)" }}
        />
        <div className="relative transition-transform duration-300 group-hover:rotate-6">
          {stat.icon}
        </div>
      </div>

      <div className="text-center">
        <div className="flex items-baseline justify-center gap-0.5">
          <span
            className="font-bold tabular-nums"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              color: "#16a34a",
              fontFamily: "'Segoe UI', system-ui, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            {formatNumber(count)}
          </span>
          <span
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
              color: "#16a34a",
              fontWeight: 700,
            }}
          >
            {stat.suffix}
          </span>
        </div>
        <p
          className="mt-1 tracking-widest font-semibold"
          style={{
            fontSize: "clamp(0.6rem, 1.2vw, 0.75rem)",
            color: "#1e3a8a",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {stat.label}
        </p>
      </div>
    </div>
  );
}

export default function Countup() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 40%, #fefce8 100%)",
        borderTop: "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #16a34a 0%, transparent 50%), radial-gradient(circle at 80% 50%, #1e3a8a 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-10">
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "0",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="relative"
              style={{
                borderRight:
                  index < stats.length - 1
                    ? "1px solid rgba(148, 163, 184, 0.3)"
                    : "none",
              }}
            >
              <StatCard stat={stat} index={index} animate={animate} />
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
