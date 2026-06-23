import React from "react";

export default function Fertilizers() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "120px 40px 60px",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          Fertilizers
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#d9d9d9",
            maxWidth: "800px",
          }}
        >
          Fertilizers provide essential nutrients to crops and help improve
          plant growth, yield, and soil fertility.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "50px",
          }}
        >
          {[
            "Nitrogen Fertilizer",
            "Phosphorus Fertilizer",
            "Potassium Fertilizer",
            "Micronutrient Fertilizer",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "25px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <h3>{item}</h3>

              <p
                style={{
                  color: "#cfcfcf",
                  marginTop: "10px",
                  lineHeight: "1.6",
                }}
              >
                High-quality fertilizer solution designed to support healthy
                crop growth and maximize productivity.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
