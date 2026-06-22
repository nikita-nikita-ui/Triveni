import { useState, useRef, useEffect } from "react";

const products = [
  {
    name: "Fertilizers",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 3h6l3 7H6z" />
        <path d="M6 10s-3 4-3 7a9 9 0 0 0 18 0c0-3-3-7-3-7" />
        <line x1="12" y1="10" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    name: "Insecticides",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2l1.5 3" />
        <path d="M16 2l-1.5 3" />
        <ellipse cx="12" cy="9" rx="4" ry="3" />
        <path d="M8 9c-2 0-5 1-5 4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2c0-3-3-4-5-4" />
        <path d="M12 12v8" />
        <path d="M8 16l-3 2" />
        <path d="M16 16l3 2" />
      </svg>
    ),
  },
  {
    name: "Fungicides",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22V12" />
        <path d="M5 12a7 7 0 0 1 14 0" />
        <path d="M5 17H3a1 1 0 0 1-1-1v-1a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v1a1 1 0 0 1-1 1h-2" />
      </svg>
    ),
  },
  {
    name: "Herbicides",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 22c1-1 3-4 3-8" />
        <path d="M7 14c0 4-2 7-3 8" />
        <path d="M12 2s0 8-5 12" />
        <path d="M12 2s0 8 5 12" />
        <path d="M12 2v20" />
      </svg>
    ),
  },
  {
    name: "PGR",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    name: "Biostimulants",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    name: "Imported Nutrient",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    name: "Organic Manure",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const navLinks = ["Home", "About", "Blog", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setProductsOpen(false), 120);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(45, 70, 52, 0.92)"
          : "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "0.5px solid rgba(255,255,255,0.08)" : "none",
        padding: scrolled ? "12px 0" : "20px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 9,
              background: "linear-gradient(135deg, #4caf50, #2e7d32)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 0 1px rgba(76,175,80,0.4)",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          </div>
          <span
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: 500,
              letterSpacing: 0.4,
            }}
          >
            Triv<span style={{ color: "#5dce68", fontStyle: "italic" }}>e</span>
            ni
            <sup
              style={{
                fontSize: 9,
                color: "rgba(255,255,255,0.4)",
                marginLeft: 1,
              }}
            >
              ™
            </sup>
          </span>
        </div>

        {/* Nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color:
                  activeLink === link ? "#5dce68" : "rgba(255,255,255,0.72)",
                fontSize: 18,
                letterSpacing: "0.7px",
                textTransform: "uppercase",
                padding: "8px 14px",
                borderRadius: 8,
                fontFamily: "inherit",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                if (activeLink !== link) e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  activeLink === link ? "#5dce68" : "rgba(255,255,255,0.72)";
                e.currentTarget.style.background = "none";
              }}
            >
              {link}
            </button>
          ))}

          {/* Products dropdown */}
          <div
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: "relative" }}
          >
            <button
              style={{
                background: productsOpen ? "rgba(255,255,255,0.08)" : "none",
                border: "none",
                cursor: "pointer",
                color: "rgba(255,255,255,0.72)",
                fontSize: 18,
                letterSpacing: "0.7px",
                textTransform: "uppercase",
                padding: "8px 14px",
                borderRadius: 8,
                fontFamily: "inherit",
                display: "flex",
                alignItems: "center",
                gap: 5,
                transition: "color 0.2s, background 0.2s",
              }}
            >
              Products
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{
                  transition: "transform 0.25s",
                  transform: productsOpen ? "rotate(180deg)" : "rotate(0deg)",
                  opacity: 0.6,
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Dropdown panel */}
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 10px)",
                left: "50%",
                transform: `translateX(-50%) translateY(${productsOpen ? 0 : -8}px)`,
                width: 260,
                background: "rgba(12, 22, 14, 0.97)",
                border: "0.5px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                padding: 8,
                opacity: productsOpen ? 1 : 0,
                pointerEvents: productsOpen ? "all" : "none",
                transition: "opacity 0.2s, transform 0.2s",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
              }}
            >
              {/* Arrow */}
              <div
                style={{
                  position: "absolute",
                  top: -5,
                  left: "50%",
                  transform: "translateX(-50%) rotate(45deg)",
                  width: 10,
                  height: 10,
                  background: "rgba(12, 22, 14, 0.97)",
                  border: "0.5px solid rgba(255,255,255,0.1)",
                  borderBottom: "none",
                  borderRight: "none",
                }}
              />

              {products.map((item, i) => (
                <div key={item.name}>
                  {i === 4 && (
                    <div
                      style={{
                        height: "0.5px",
                        background: "rgba(255,255,255,0.07)",
                        margin: "6px 4px",
                      }}
                    />
                  )}
                  <DropItem item={item} />
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

function DropItem({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "9px 10px",
        borderRadius: 9,
        cursor: "pointer",
        background: hovered ? "rgba(93,206,104,0.1)" : "transparent",
        transition: "background 0.15s",
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 7,
          background: hovered
            ? "rgba(93,206,104,0.18)"
            : "rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: hovered ? "#5dce68" : "rgba(255,255,255,0.5)",
          flexShrink: 0,
          transition: "all 0.15s",
        }}
      >
        {item.icon}
      </div>
      <div>
        <div
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: hovered ? "#5dce68" : "rgba(255,255,255,0.85)",
            transition: "color 0.15s",
          }}
        >
          {item.name}
        </div>
        <div
          style={{
            fontSize: 11,
            color: hovered ? "rgba(93,206,104,0.55)" : "rgba(255,255,255,0.32)",
            transition: "color 0.15s",
            marginTop: 1,
          }}
        >
          {item.sub}
        </div>
      </div>
    </div>
  );
}
