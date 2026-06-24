import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const products = [
  {
    name: "Fertilizers",
    path: "/products/fertilizers",
    hasSubmenu: true,
    children: [
      { name: "Bio Fertilizers", path: "/products/biostimulants" },
      { name: "Imported Fertilizers", path: "/products/imported-nutrient" },
    ],
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6l3 7H6z" /><path d="M6 10s-3 4-3 7a9 9 0 0 0 18 0c0-3-3-7-3-7" /><line x1="12" y1="10" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    name: "Insecticides",
    path: "/products/insecticides",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2l1.5 3" /><path d="M16 2l-1.5 3" /><ellipse cx="12" cy="9" rx="4" ry="3" />
        <path d="M8 9c-2 0-5 1-5 4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2c0-3-3-4-5-4" />
        <path d="M12 12v8" /><path d="M8 16l-3 2" /><path d="M16 16l3 2" />
      </svg>
    ),
  },
  {
    name: "Fungicides",
    path: "/products/fungicides",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12" /><path d="M5 12a7 7 0 0 1 14 0" />
        <path d="M5 17H3a1 1 0 0 1-1-1v-1a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v1a1 1 0 0 1-1 1h-2" />
      </svg>
    ),
  },
  {
    name: "Herbicides",
    path: "/products/herbicides",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22c1-1 3-4 3-8" /><path d="M7 14c0 4-2 7-3 8" />
        <path d="M12 2s0 8-5 12" /><path d="M12 2s0 8 5 12" /><path d="M12 2v20" />
      </svg>
    ),
  },
  {
    name: "PGR",
    path: "/products/pgr",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    name: "Biostimulants",
    path: "/products/biostimulants",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    name: "Imported Nutrient",
    path: "/products/imported-nutrient",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    name: "Organic Manure",
    path: "/products/organic-manure",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const navLinks = ["Home", "About", "Blog", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setProductsOpen(false), 120);
  };

  const isLinkActive = (link) => {
    const path = location.pathname;
    if (link === "Home") return path === "/";
    if (link === "About") return path === "/about" || path.startsWith("/about/");
    if (link === "Blog") return path === "/blog" || path.startsWith("/blog/");
    if (link === "Contact") return path === "/contact" || path.startsWith("/contact/");
    return false;
  };

  const isProductsActive = location.pathname.startsWith("/products");

  const handleNavClick = (link) => {
    const routes = { Home: "/", About: "/about", Blog: "/blog", Contact: "/contact" };
    navigate(routes[link]);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
          scrolled
            ? "bg-[rgba(45,70,52,0.92)] backdrop-blur-md border-b border-white/[0.08] py-1.5"
            : "py-2.5"
        }`}
        style={
          !scrolled
            ? { background: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)" }
            : {}
        }
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigate("/")}>
            <div className="w-9 h-9 rounded-[9px] flex items-center justify-center shadow-[0_0_0_1px_rgba(76,175,80,0.4)]"
              style={{ background: "linear-gradient(135deg, #4caf50, #2e7d32)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <span className="text-white text-xl font-medium tracking-wide">
              Triv<span className="text-[#5dce68] italic">e</span>ni
              <sup className="text-[9px] text-white/40 ml-0.5">™</sup>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              return (
                <button
                  key={link}
                  onClick={() => handleNavClick(link)}
                  className={`relative bg-transparent border-none cursor-pointer text-[18px] tracking-[0.7px] uppercase px-3.5 pt-2 pb-3 rounded-lg font-[inherit] transition-all duration-200 hover:bg-white/[0.08] ${
                    isActive ? "text-[#5dce68]" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link}
                  <span
                    className={`absolute bottom-[3px] left-3.5 right-3.5 h-[3px] bg-[#5dce68] rounded-sm transition-all duration-250 origin-center ${
                      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                    }`}
                  />
                </button>
              );
            })}

            {/* Products Dropdown */}
            <div
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <button
                onClick={() => navigate("/products")}
                className={`relative border-none cursor-pointer text-[18px] tracking-[0.7px] uppercase px-3.5 pt-2 pb-3 rounded-lg font-[inherit] flex items-center gap-1.5 transition-all duration-200 ${
                  productsOpen ? "bg-white/[0.08]" : "bg-transparent"
                } ${isProductsActive ? "text-[#5dce68]" : "text-white/70 hover:text-white"}`}
              >
                Products
                <svg
                  width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  className={`transition-transform duration-250 opacity-60 ${productsOpen ? "rotate-180" : "rotate-0"}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                <span
                  className={`absolute bottom-[3px] left-3.5 right-3.5 h-[3px] bg-[#5dce68] rounded-sm transition-all duration-250 origin-center ${
                    isProductsActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </button>

              {/* Desktop Dropdown */}
              <div
                className={`absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[260px] rounded-[14px] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-200 ${
                  productsOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
                style={{ background: "rgba(12,22,14,0.97)", border: "0.5px solid rgba(255,255,255,0.1)" }}
              >
                {/* Arrow */}
                <div
                  className="absolute -top-[5px] left-1/2 -translate-x-1/2 rotate-45 w-2.5 h-2.5"
                  style={{
                    background: "rgba(12,22,14,0.97)",
                    border: "0.5px solid rgba(255,255,255,0.1)",
                    borderBottom: "none",
                    borderRight: "none",
                  }}
                />
                {products.map((item, i) => (
                  <div key={item.name}>
                    {i === 4 && <div className="h-px bg-white/[0.07] my-1.5 mx-1" />}
                    <DropItem item={item} />
                  </div>
                ))}
              </div>
            </div>
          </nav>

          {/* Hamburger Button (mobile) */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] bg-white/[0.08] rounded-lg border-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[2px] bg-white rounded transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-[2px] bg-white rounded transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[2px] bg-white rounded transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] z-50 lg:hidden transition-transform duration-300 ease-in-out flex flex-col ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "rgba(10,20,12,0.98)", borderLeft: "0.5px solid rgba(255,255,255,0.08)" }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-[7px] flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #4caf50, #2e7d32)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <span className="text-white text-base font-medium">
              Triv<span className="text-[#5dce68] italic">e</span>ni
            </span>
          </div>
          <button
            className="w-8 h-8 flex items-center justify-center bg-white/[0.07] rounded-lg border-none cursor-pointer text-white/60 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col p-3 gap-0.5 overflow-y-auto flex-1">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link);
            return (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl border-none cursor-pointer font-[inherit] text-[15px] tracking-[0.5px] uppercase transition-all duration-150 ${
                  isActive
                    ? "bg-[rgba(93,206,104,0.12)] text-[#5dce68]"
                    : "bg-transparent text-white/70 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {isActive && <span className="w-1 h-5 bg-[#5dce68] rounded-full shrink-0" />}
                {link}
              </button>
            );
          })}

          {/* Mobile Products */}
          <div>
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-xl border-none cursor-pointer font-[inherit] text-[15px] tracking-[0.5px] uppercase transition-all duration-150 ${
                isProductsActive
                  ? "bg-[rgba(93,206,104,0.12)] text-[#5dce68]"
                  : "bg-transparent text-white/70 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              <span className="flex items-center gap-3">
                {isProductsActive && <span className="w-1 h-5 bg-[#5dce68] rounded-full shrink-0" />}
                Products
              </span>
              <svg
                width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" className="opacity-50"
                style={{ transform: mobileProductsOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Mobile Product List */}
            {mobileProductsOpen && (
              <div className="mt-1 ml-3 flex flex-col gap-0.5 border-l border-[#5dce68]/20 pl-3">
                {products.map((item) => (
                  <MobileDropItem key={item.name} item={item} onNavigate={() => setMobileMenuOpen(false)} />
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

function DropItem({ item }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        if (item.hasSubmenu) setExpanded(!expanded);
        else navigate(item.path);
      }}
      className={`flex flex-col rounded-[9px] cursor-pointer p-[9px_10px] transition-colors duration-150 ${
        hovered ? "bg-[rgba(93,206,104,0.1)]" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <div
          className={`w-[30px] h-[30px] rounded-[7px] flex items-center justify-center shrink-0 transition-all duration-150 ${
            hovered ? "bg-[rgba(93,206,104,0.18)] text-[#5dce68]" : "bg-white/[0.06] text-white/50"
          }`}
        >
          {item.icon}
        </div>
        <div className="flex-1">
          <div
            className={`text-[13px] font-medium transition-colors duration-150 flex items-center justify-between ${
              hovered ? "text-[#5dce68]" : "text-white/85"
            }`}
          >
            <span>{item.name}</span>
            {item.hasSubmenu && <span className="text-[10px] opacity-60">{expanded ? "▲" : "▼"}</span>}
          </div>
        </div>
      </div>

      {item.hasSubmenu && expanded && (
        <div className="mt-1.5 ml-10 flex flex-col gap-1.5">
          {item.children.map((child) => (
            <div
              key={child.name}
              onClick={(e) => {
                e.stopPropagation();
                navigate(child.path);
              }}
              className="px-3 py-2 rounded-md bg-white/[0.05] text-white/80 hover:text-white hover:bg-white/[0.1] cursor-pointer text-xs transition-colors"
            >
              {child.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileDropItem({ item, onNavigate }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === item.path ||
    (item.children && item.children.some((c) => location.pathname === c.path));

  return (
    <div>
      <button
        onClick={() => {
          if (item.hasSubmenu) setExpanded(!expanded);
          else { navigate(item.path); onNavigate(); }
        }}
        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg border-none cursor-pointer font-[inherit] text-[13px] transition-colors duration-150 ${
          isActive ? "text-[#5dce68] bg-[rgba(93,206,104,0.08)]" : "text-white/60 hover:text-white/90 bg-transparent"
        }`}
      >
        <span className="flex items-center gap-2">
          <span className={`${isActive ? "text-[#5dce68]" : "text-white/40"}`}>{item.icon}</span>
          {item.name}
        </span>
        {item.hasSubmenu && (
          <svg
            width="10" height="10" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" className="opacity-40"
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </button>

      {item.hasSubmenu && expanded && (
        <div className="ml-6 mt-0.5 flex flex-col gap-0.5">
          {item.children.map((child) => (
            <button
              key={child.name}
              onClick={() => { navigate(child.path); onNavigate(); }}
              className="w-full text-left px-3 py-2 rounded-lg border-none cursor-pointer font-[inherit] text-[12px] text-white/50 hover:text-white/80 hover:bg-white/[0.05] bg-transparent transition-colors"
            >
              {child.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
