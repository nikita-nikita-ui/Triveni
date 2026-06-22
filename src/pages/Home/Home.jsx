import React, { useState } from "react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="min-vh-100 d-flex flex-column position-relative"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        backgroundColor: "#fbfbf9",
        color: "#1c2a27",
      }}
    >
      <div
        className="position-relative vh-100 d-flex flex-column"
        style={{
          backgroundImage:
            "linear-gradient(rgba(13, 59, 46, 0.45), rgba(13, 59, 46, 0.25)), url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
                  fill="#ffb703"
                />
              </svg>
            </a>

            <button
              className="btn border-0 d-flex flex-column justify-content-center align-items-center"
              onClick={() => setMenuOpen(true)}
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "rgba(13, 59, 46, 0.85)",
                borderRadius: "8px",
                backdropFilter: "blur(4px)",
              }}
            >
              <span
                style={{
                  width: "22px",
                  height: "2px",
                  backgroundColor: "white",
                  margin: "2.5px 0",
                }}
              ></span>
              <span
                style={{
                  width: "22px",
                  height: "2px",
                  backgroundColor: "white",
                  margin: "2.5px 0",
                }}
              ></span>
              <span
                style={{
                  width: "22px",
                  height: "2px",
                  backgroundColor: "white",
                  margin: "2.5px 0",
                }}
              ></span>
            </button>
          </div>
        </nav>

        <div className="container-fluid px-4 px-md-5 flex-grow-1 d-flex align-items-center text-white">
          <div className="row w-100">
            <div className="col-xl-7 col-lg-9">
              <span
                className="badge px-3 py-2 rounded-pill fw-semibold mb-3 text-uppercase"
                style={{
                  backgroundColor: "#ffb703",
                  color: "#0d3b2e",
                  fontSize: "0.8rem",
                  letterSpacing: "1.5px",
                }}
              >
                Pioneering Agritech Solutions
              </span>
              <h1
                className="display-2 fw-bold mb-3"
                style={{ lineHeight: "1.1", letterSpacing: "-1px" }}
              >
                Empowering Fields, <br />
                Enriching Yields.
              </h1>
              <p
                className="lead mb-4 text-white-50"
                style={{ maxWidth: "600px", fontSize: "1.25rem" }}
              >
                We bridge scientific innovation and traditional agriculture to
                foster sustainable growth, crop protection, and nutritional
                excellence.
              </p>
              <div className="d-flex gap-3">
                <a
                  href="#about"
                  className="btn btn-lg px-4 py-3 fw-bold border-0 shadow"
                  style={{
                    backgroundColor: "#0d3b2e",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  Explore Our Work
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline-light btn-lg px-4 py-3 fw-bold"
                  style={{ borderRadius: "10px" }}
                >
                  Connect With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="py-5 my-5">
        <div className="container">
          <div className="text-center mb-5">
            <span
              className="text-uppercase fw-semibold tracking-wider"
              style={{
                color: "#ffb703",
                fontSize: "0.9rem",
                letterSpacing: "2px",
              }}
            >
              Welcome to Triveni
            </span>
            <h2 className="display-4 fw-bold mt-2" style={{ color: "#0d3b2e" }}>
              ABOUT TRIVENI CHEMICALS
            </h2>
            <div className="mt-3">
              <svg
                width="80"
                height="20"
                viewBox="0 0 100 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20C20 20 25 15 25 5C25 15 30 20 40 20C30 20 25 22 25 28C25 22 20 20 10 20Z"
                  fill="#0d3b2e"
                />
                <path
                  d="M40 20C50 20 55 15 55 5C55 15 60 20 70 20C60 20 55 22 55 28C55 22 50 20 40 20Z"
                  fill="#ffb703"
                />
                <path
                  d="M70 20C80 20 85 15 85 5C85 15 90 20 100 20C90 20 85 22 85 28C85 22 80 20 70 20Z"
                  fill="#0d3b2e"
                />
              </svg>
            </div>
          </div>

          <div className="row align-items-center g-5 mt-3">
            <div className="col-lg-6">
              <div className="position-relative">
                <div
                  className="position-absolute bg-warning rounded-4 w-100 h-100"
                  style={{
                    top: "15px",
                    left: "-15px",
                    zIndex: 1,
                    opacity: 0.15,
                  }}
                />
                <img
                  src="https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=800&auto=format&fit=crop"
                  alt="Triveni Crop Science"
                  className="img-fluid rounded-4 shadow-lg position-relative"
                  style={{
                    zIndex: 2,
                    objectFit: "cover",
                    height: "450px",
                    width: "100%",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-4">
                <p className="fs-5 lh-lg text-secondary mb-4">
                  Started in 1996, our products are designed on agronomic
                  research and prepared in our plants. We start by tracking the
                  highest quality raw materials. These are then treated
                  according to the best scientific and technical knowledge
                  currently available. We spend a great deal of attention on
                  innovation in order to propose advanced agronomic solutions to
                  our partners.
                </p>
                <p className="fs-5 lh-lg text-secondary">
                  We are focused on efficient crop nutrition, improving
                  agricultural yields, and the quality and traceability of our
                  products within the environment. This attention to detail
                  allows for smart choices that achieve the highest net income
                  while maintaining environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5" style={{ backgroundColor: "#f3f5f1" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold" style={{ color: "#0d3b2e" }}>
              MESSAGE FROM OUR <span style={{ color: "#ffb703" }}>FOUNDER</span>
            </h2>
            <div className="mt-3">
              <svg
                width="80"
                height="20"
                viewBox="0 0 100 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20C20 20 25 15 25 5C25 15 30 20 40 20C30 20 25 22 25 28C25 22 20 20 10 20Z"
                  fill="#0d3b2e"
                />
                <path
                  d="M40 20C50 20 55 15 55 5C55 15 60 20 70 20C60 20 55 22 55 28C55 22 50 20 40 20Z"
                  fill="#ffb703"
                />
                <path
                  d="M70 20C80 20 85 15 85 5C85 15 90 20 100 20C90 20 85 22 85 28C85 22 80 20 70 20Z"
                  fill="#0d3b2e"
                />
              </svg>
            </div>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <div className="p-4 p-md-5 rounded-4 bg-white shadow-sm position-relative">
                <span
                  className="position-absolute start-0 top-0 translate-middle text-warning opacity-25"
                  style={{
                    fontSize: "12rem",
                    fontFamily: "serif",
                    lineHeight: 1,
                  }}
                >
                  “
                </span>
                <p
                  className="fs-4 lh-lg text-dark mb-5 position-relative"
                  style={{ zIndex: 1, fontStyle: "italic" }}
                >
                  Every product we create is rooted in agronomic research and
                  manufactured in our own facilities. We begin with the highest
                  quality raw materials and process them using the most
                  up-to-date scientific and technical methods. Innovation is at
                  the heart of everything we do — enabling us to deliver
                  cutting-edge agricultural solutions to our partners.
                </p>
                <div className="d-flex flex-column align-items-center">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop"
                    alt="Sh. Chander Goyal"
                    className="rounded-circle shadow-md mb-3"
                    style={{
                      width: "90px",
                      height: "90px",
                      objectFit: "cover",
                      border: "4px solid #fff",
                    }}
                  />
                  <h4 className="fw-bold m-0" style={{ color: "#0d3b2e" }}>
                    Sh. Chander Goyal
                  </h4>
                  <p className="text-muted m-0 small text-uppercase tracking-wider">
                    Managing Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 bg-white border-bottom border-top">
        <div className="container">
          <div className="row g-4 justify-content-center text-center">
            <div className="col-6 col-md-4 col-lg">
              <div className="p-3">
                <div className="mb-3 text-warning">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.5 3h15M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3M6 14h12M10 8h4" />
                  </svg>
                </div>
                <h3
                  className="display-6 fw-bold m-0"
                  style={{ color: "#0d3b2e" }}
                >
                  120 +
                </h3>
                <p className="text-muted text-uppercase tracking-wider small mt-1">
                  Molecules
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg">
              <div className="p-3">
                <div className="mb-3 text-warning">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3
                  className="display-6 fw-bold m-0"
                  style={{ color: "#0d3b2e" }}
                >
                  2,476 +
                </h3>
                <p className="text-muted text-uppercase tracking-wider small mt-1">
                  Distributers
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg">
              <div className="p-3">
                <div className="mb-3 text-warning">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="5" r="3" />
                    <circle cx="6" cy="19" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <path d="M9 16.2L12 8.5l3 7.7" />
                  </svg>
                </div>
                <h3
                  className="display-6 fw-bold m-0"
                  style={{ color: "#0d3b2e" }}
                >
                  21,006 +
                </h3>
                <p className="text-muted text-uppercase tracking-wider small mt-1">
                  Retailers
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg">
              <div className="p-3">
                <div className="mb-3 text-warning">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 21a6 6 0 0 0-12 0" />
                    <circle cx="12" cy="10" r="4" />
                    <path d="M12 2a10 10 0 0 0-10 8h20a10 10 0 0 0-10-8z" />
                  </svg>
                </div>
                <h3
                  className="display-6 fw-bold m-0"
                  style={{ color: "#0d3b2e" }}
                >
                  8 L +
                </h3>
                <p className="text-muted text-uppercase tracking-wider small mt-1">
                  Farmers
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg">
              <div className="p-3">
                <div className="mb-3 text-warning">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3
                  className="display-6 fw-bold m-0"
                  style={{ color: "#0d3b2e" }}
                >
                  13 +
                </h3>
                <p className="text-muted text-uppercase tracking-wider small mt-1">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 my-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold" style={{ color: "#0d3b2e" }}>
              LATEST NEWS & ARTICLES
            </h2>
            <div className="mt-3">
              <svg
                width="80"
                height="20"
                viewBox="0 0 100 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20C20 20 25 15 25 5C25 15 30 20 40 20C30 20 25 22 25 28C25 22 20 20 10 20Z"
                  fill="#0d3b2e"
                />
                <path
                  d="M40 20C50 20 55 15 55 5C55 15 60 20 70 20C60 20 55 22 55 28C55 22 50 20 40 20Z"
                  fill="#ffb703"
                />
                <path
                  d="M70 20C80 20 85 15 85 5C85 15 90 20 100 20C90 20 85 22 85 28C85 22 80 20 70 20Z"
                  fill="#0d3b2e"
                />
              </svg>
            </div>
          </div>

          <div className="row g-4 mt-2">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                <img
                  src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=600&auto=format&fit=crop"
                  alt="Organic Fertilizers Plants"
                  className="card-img-top"
                  style={{ height: "240px", objectFit: "cover" }}
                />
                <div className="card-body p-4 d-flex flex-column">
                  <h4
                    className="card-title fw-bold mb-3"
                    style={{ color: "#0d3b2e" }}
                  >
                    Organic Fertilizers Plants
                  </h4>
                  <p className="card-text text-muted flex-grow-1 lh-lg">
                    A farmer harvesting sweet, fresh tomatoes from robust vines
                    is a testament to the...
                  </p>
                  <a
                    href="#article1"
                    className="btn btn-link p-0 text-decoration-none fw-bold mt-3 d-inline-flex align-items-center"
                    style={{ color: "#ffb703" }}
                  >
                    Read Full Article
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ms-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                <img
                  src="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=600&auto=format&fit=crop"
                  alt="Drive Sustainable Growth"
                  className="card-img-top"
                  style={{ height: "240px", objectFit: "cover" }}
                />
                <div className="card-body p-4 d-flex flex-column">
                  <h4
                    className="card-title fw-bold mb-3"
                    style={{ color: "#0d3b2e" }}
                  >
                    Drive Sustainable Growth
                  </h4>
                  <p className="card-text text-muted flex-grow-1 lh-lg">
                    Adopting methods that improve soil health for future
                    generations and safeguard the environment in addition...
                  </p>
                  <a
                    href="#article2"
                    className="btn btn-link p-0 text-decoration-none fw-bold mt-3 d-inline-flex align-items-center"
                    style={{ color: "#ffb703" }}
                  >
                    Read Full Article
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ms-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                <img
                  src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=600&auto=format&fit=crop"
                  alt="Organic Fertilizers"
                  className="card-img-top"
                  style={{ height: "240px", objectFit: "cover" }}
                />
                <div className="card-body p-4 d-flex flex-column">
                  <h4
                    className="card-title fw-bold mb-3"
                    style={{ color: "#0d3b2e" }}
                  >
                    Organic Fertilizers
                  </h4>
                  <p className="card-text text-muted flex-grow-1 lh-lg">
                    An essential component of contemporary sustainable farming,
                    organic fertilizers provide a natural means of...
                  </p>
                  <a
                    href="#article3"
                    className="btn btn-link p-0 text-decoration-none fw-bold mt-3 d-inline-flex align-items-center"
                    style={{ color: "#ffb703" }}
                  >
                    Read Full Article
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ms-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        className="py-4 mt-auto text-white text-center"
        style={{ backgroundColor: "#0d3b2e" }}
      >
        <p className="m-0 opacity-75 small">
          &copy; 2026 Triveni Chemicals. All rights reserved.
        </p>
      </footer>

      <div
        className="position-fixed end-0 top-50 translate-middle-y d-flex align-items-center justify-content-center"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          backgroundColor: "#0d3b2e",
          color: "white",
          padding: "15px 10px",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          cursor: "pointer",
          zIndex: 1000,
          boxShadow: "0 -2px 10px rgba(0,0,0,0.15)",
          userSelect: "none",
        }}
      >
        <span
          className="fw-semibold text-uppercase tracking-wider d-flex align-items-center gap-2"
          style={{ fontSize: "0.85rem" }}
        >
          Feedback
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: "rotate(90deg)" }}
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </span>
      </div>

      {menuOpen && (
        <div
          className="position-fixed top-0 start-0 h-100 shadow-lg text-white d-flex flex-column p-5"
          style={{
            width: "340px",
            zIndex: 1050,
            backgroundColor: "#0d3b2e",
            transition: "0.4s ease-in-out",
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h4 className="fw-bold tracking-wide m-0 text-white">TRIVENI</h4>
            <button
              className="btn d-flex align-items-center justify-content-center text-white"
              onClick={() => setMenuOpen(false)}
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#ffb703",
                borderRadius: "6px",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="list-unstyled d-flex flex-column gap-4 fs-4 fw-semibold">
            <li>
              <a
                href="#home"
                className="text-decoration-none text-white-50 hover-text-white"
                onClick={() => setMenuOpen(false)}
                style={{ color: "#ffb703" }}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-decoration-none text-white-50 hover-text-white"
                onClick={() => setMenuOpen(false)}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="text-decoration-none text-white-50 hover-text-white"
                onClick={() => setMenuOpen(false)}
              >
                PRODUCTS
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="text-decoration-none text-white-50 hover-text-white"
                onClick={() => setMenuOpen(false)}
              >
                BLOG
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-decoration-none text-white-50 hover-text-white"
                onClick={() => setMenuOpen(false)}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
