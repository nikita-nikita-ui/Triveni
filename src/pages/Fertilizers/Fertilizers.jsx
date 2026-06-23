import React, { useState } from "react";
import ProductUI from "../../components/ProductScreen/Product1";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const productsList = [
  {
    name: "CALBO",
    img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    name: "Calcito",
    img: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    name: "Calrid-D",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    name: "Caltran",
    img: "https://images.unsplash.com/photo-1589923188900-85dae440942c?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    name: "FERITO 90%",
    img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    name: "Foli Flow",
    img: "https://images.unsplash.com/photo-1463121859909-013e68559a69?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    name: "FOLI FLOW 00:00:50",
    img: "https://images.unsplash.com/photo-1574314188140-97746cb5b8ee?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    name: "FOLI FLOW 00:52:34",
    img: "https://images.unsplash.com/photo-1611096551206-192b4d32f5f1?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    name: "FOLI FLOW 13:00:45",
    img: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    name: "FOLI FLOW 19:19:19",
    img: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    name: "Kthio 3424",
    img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    name: "MAHA K",
    img: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    name: "METAMAN",
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    name: "MICRO ZC",
    img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    name: "Micro ZC",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    name: "Multi Flow",
    img: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=500&h=500&q=80",
  },
];

export default function Fertilizers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(productsList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productsList.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <ProductUI />

      <div
        style={{
          minHeight: "100vh",
          padding: "120px 40px 60px",
          background: "#ffffff",
          color: "#1e293b",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "8px",
            }}
          >
            Fertilizers
          </h1>

          <p
            style={{
              fontSize: "16px",
              color: "#4b5563",
              maxWidth: "600px",
              lineHeight: "1.5",
            }}
          >
            High-quality fertilizer solutions designed to support healthy crop
            growth and maximize agricultural productivity.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "24px",
              marginTop: "40px",
            }}
          >
            {currentItems.map((item, index) => (
              <div
                key={item.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: "#ffffff",
                  borderRadius: "12px",
                  padding: "16px",
                  border: "1px solid #e5e7eb",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transform:
                    hoveredIndex === index
                      ? "translateY(-4px)"
                      : "translateY(0)",
                  boxShadow:
                    hoveredIndex === index
                      ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                      : "none",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    borderRadius: "8px",
                    border: "1px solid #f3f4f6",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    style={{
                      display: "none",
                      width: "100%",
                      height: "100%",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, #f6f9fc, #eef2f7)",
                      color: "#2e7d32",
                      fontSize: "14px",
                      fontWeight: "bold",
                      padding: "20px",
                      textAlign: "center",
                      boxSizing: "border-box",
                    }}
                  >
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      style={{ marginBottom: "8px" }}
                    >
                      <path
                        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#64748b",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Triveni
                    </span>
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#1e293b",
                        marginTop: "4px",
                      }}
                    >
                      {item.name}
                    </span>
                  </div>
                </div>

                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#0f3a85",
                    marginTop: "16px",
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </h2>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                marginTop: "50px",
              }}
            >
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "6px",
                    border: "1px solid #e5e7eb",
                    background:
                      currentPage === index + 1 ? "#1b5e20" : "#ffffff",
                    color: currentPage === index + 1 ? "#ffffff" : "#4b5563",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                >
                  {index + 1}
                </button>
              ))}

              {currentPage < totalPages && (
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "6px",
                    border: "1px solid #e5e7eb",
                    background: "#ffffff",
                    color: "#4b5563",
                    fontSize: "14px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  &gt;
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
