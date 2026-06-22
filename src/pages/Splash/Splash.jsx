import React from "react";

const Splash = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-white"
      style={{
        background: "linear-gradient(135deg, #0b2911 0%, #1a521e 100%)",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.04,
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="text-center position-relative z-3 animate-fade-in">
        <div className="mb-4 d-inline-block">
          <svg
            width="90"
            height="90"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              animation: "pulse-grow 2s infinite ease-in-out",
            }}
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 16.12 4.5 19.67 8 21.15V17H10V15H8V13H11V11H8V9H13V7H8V5H15.5C18.5 7.5 20 11.5 20 15C20 18.5 18 21 15 22C19 20.5 22 16.5 22 12C22 6.48 17.52 2 12 2Z"
              fill="#ffc107"
            />
            <path
              d="M12 3C17 3 21 7 21 12C21 15.5 19 18 16 20C14 18 13.5 15 14 12C14.5 9 17 6 17 6C17 6 14.5 7.5 12.5 10C10.5 12.5 10 15.5 11 17C10.5 17 10 16.5 9.5 16C7 13.5 7 10 9 7C10.5 4.75 12 3 12 3Z"
              fill="#4caf50"
            />
          </svg>
        </div>

        <h1 className="display-3 fw-bold mb-1" style={{ letterSpacing: "3px" }}>
          Triveni<span style={{ color: "#ffc107" }}>.</span>
        </h1>

        <p
          className="text-white-50 fs-5 mb-5 fw-light"
          style={{ letterSpacing: "1.5px" }}
        >
          Nurturing Nature, Growing Futures
        </p>

        <div className="d-flex justify-content-center align-items-center gap-2">
          <div
            className="spinner-grow text-warning"
            role="status"
            style={{ width: "1rem", height: "1rem", animationDelay: "0s" }}
          ></div>
          <div
            className="spinner-grow text-success"
            role="status"
            style={{ width: "1rem", height: "1rem", animationDelay: "0.2s" }}
          ></div>
          <div
            className="spinner-grow text-warning"
            role="status"
            style={{ width: "1rem", height: "1rem", animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-grow {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Splash;
