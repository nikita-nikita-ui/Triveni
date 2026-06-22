import React, { useState } from "react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="min-vh-100 d-flex flex-column position-relative"
      style={{ fontFamily: "'Poppins', sans-serif", overflowX: "hidden" }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />

      <nav className="navbar navbar-dark bg-transparent pt-4 px-4 px-md-5">
        <div className="container-fluid p-0 d-flex justify-content-between align-items-center">
          <a
            className="navbar-brand d-flex align-items-center text-white fw-bold fs-2 m-0"
            href="#home"
            style={{ letterSpacing: "1px" }}
          >
            Triveni
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="ms-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3C17 3 21 7 21 12C21 15.5 19 18 16 20C14 18 13.5 15 14 12C14.5 9 17 6 17 6C17 6 14.5 7.5 12.5 10C10.5 12.5 10 15.5 11 17C10.5 17 10 16.5 9.5 16C7 13.5 7 10 9 7C10.5 4.75 12 3 12 3Z"
                fill="#4caf50"
              />
            </svg>
          </a>

          <button
            className="btn border-0 d-flex flex-column justify-content-center align-items-center"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#102a73",
              borderRadius: "4px",
            }}
          >
            <span
              style={{
                width: "24px",
                height: "2px",
                backgroundColor: "white",
                margin: "2px 0",
              }}
            ></span>
            <span
              style={{
                width: "24px",
                height: "2px",
                backgroundColor: "white",
                margin: "2px 0",
              }}
            ></span>
            <span
              style={{
                width: "24px",
                height: "2px",
                backgroundColor: "white",
                margin: "2px 0",
              }}
            ></span>
          </button>
        </div>
      </nav>

      <div className="container-fluid px-4 px-md-5 flex-grow-1 d-flex align-items-center text-white">
        <div className="row w-100">
          <div className="col-lg-6 col-md-8">
            <span
              className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-semibold mb-3 text-uppercase"
              style={{ fontSize: "0.8rem", letterSpacing: "1px" }}
            >
              Modern Agriculture
            </span>
            <h1
              className="display-3 fw-bold mb-3"
              style={{
                lineHeight: "1.15",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              Cultivating Growth & Innovation
            </h1>
            <p
              className="lead mb-4 text-light"
              style={{
                textShadow: "0 1px 5px rgba(0,0,0,0.3)",
                maxWidth: "500px",
              }}
            >
              Empowering farmers with advanced spraying, crop monitoring, and
              sustainable technology to maximize yields with absolute precision.
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-warning btn-lg px-4 py-2 text-dark fw-bold border-0">
                Our Services
              </button>
              <button className="btn btn-outline-light btn-lg px-4 py-2 fw-bold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="position-fixed end-0 top-50 translate-middle-y d-flex align-items-center justify-content-center"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          backgroundColor: "#3b5998",
          color: "white",
          padding: "15px 10px",
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
          cursor: "pointer",
          zIndex: 1000,
          userSelect: "none",
        }}
      >
        <span
          className="fw-semibold text-uppercase tracking-wider"
          style={{ fontSize: "0.85rem" }}
        >
          Feedback
        </span>
      </div>

      {menuOpen && (
        <div
          className="position-fixed top-0 end-0 h-100 bg-dark text-white p-5 shadow-lg"
          style={{ width: "320px", zIndex: 1050 }}
        >
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h5 className="m-0 fw-bold">Menu</h5>
            <button
              className="btn btn-close btn-close-white"
              onClick={() => setMenuOpen(false)}
            ></button>
          </div>
          <ul className="list-unstyled d-flex flex-column gap-4 fs-5">
            <li>
              <a
                href="#home"
                className="text-decoration-none text-white-50"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-decoration-none text-white-50"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-decoration-none text-white-50"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-decoration-none text-white-50"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
