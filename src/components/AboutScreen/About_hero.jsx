import plant1 from "../../assets/plant1.jpg";
import plant2 from "../../assets/plant2.jpg";
import { useNavigate } from "react-router-dom";
export default function Abouthero() {
  const navigate = useNavigate();
  return (
    <>
      <style>{`
        @keyframes bgZoomMove {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08) translateX(-15px);
          }
          100% {
            transform: scale(1.15) translateX(15px);
          }
        }

        @keyframes slideFromRight {
          0% {
            opacity: 0;
            transform: translateX(250px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes floatingZoom {
          0% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.08);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }

        @keyframes glowText {
          0% {
            text-shadow: 0 0 10px rgba(0,176,80,0.2);
          }
          50% {
            text-shadow:
              0 0 20px rgba(0,176,80,0.7),
              0 0 40px rgba(0,176,80,0.5);
          }
          100% {
            text-shadow: 0 0 10px rgba(0,176,80,0.2);
          }
        }

        .bg-animation {
          animation: bgZoomMove 12s ease-in-out infinite alternate;
        }

        .plant-entry {
          animation: slideFromRight 1.8s ease forwards;
        }

        .plant-float {
          animation: floatingZoom 5s ease-in-out infinite;
        }

        .heading-glow {
          animation: glowText 3s ease-in-out infinite;
        }
      `}</style>
      <section
        className="hero-bg relative min-h-[90vh] flex items-center py-16 px-6 sm:px-12 lg:px-24 overflow-hidden bg-white"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.94)), url(${plant2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {" "}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <span className="text-[#102a70] text-sm sm:text-base font-semibold tracking-wider uppercase mb-1">
              About us
            </span>

            <div className="flex items-center gap-4 flex-wrap mb-2">
              <h1 className="text-[#00b050] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide uppercase">
                Plant Growth Booster
              </h1>
              <div className="w-6 h-6 rounded-full border-2 border-[#00b050] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00b050]" />
              </div>
            </div>

            {/* Leaf Ornament (Custom SVG Branch) */}
            <div className="mb-6 text-[#102a70]">
              <svg
                width="80"
                height="24"
                viewBox="0 0 100 30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 25 Q 35 15, 95 25" strokeLinecap="round" />
                {/* Leaf 1 */}
                <path
                  d="M25 21 C 20 10, 40 10, 45 21"
                  fill="currentColor"
                  fillOpacity="0.2"
                />
                <path d="M25 21 C 20 10, 40 10, 45 21" />
                {/* Leaf 2 */}
                <path
                  d="M50 21 C 45 10, 65 10, 70 21"
                  fill="currentColor"
                  fillOpacity="0.2"
                />
                <path d="M50 21 C 45 10, 65 10, 70 21" />
                {/* Leaf 3 */}
                <path
                  d="M75 22 C 70 12, 85 12, 90 22"
                  fill="currentColor"
                  fillOpacity="0.2"
                />
                <path d="M75 22 C 70 12, 85 12, 90 22" />
              </svg>
            </div>

            {/* Paragraph 1 */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              The proper inputs that support crops and organically enhance soil
              health are necessary for a balanced farming strategy. Today’s
              farmers look for sustainable practices that will improve
              productivity while safeguarding the environment for future
              generations. By promoting root development, enhancing nutrient
              uptake, and fortifying plants against stress, a plant growth
              booster is essential to this process. It guarantees more
              productive, healthier crops with stronger stems and brighter
              leaves. Farmers may lessen their reliance on dangerous pesticides,
              preserve soil fertility, and encourage environmentally friendly
              farming methods by implementing growth boosters.
            </p>

            {/* Paragraph 2 */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8 font-normal">
              Triveni Chemicals, a well-known brand in agricultural solutions,
              provides high-quality plant growth boosters that are safe,
              efficient, and made to tackle the difficulties of contemporary
              farming. Better harvests and long-term sustainability are made
              possible for farmers by their products. Triveni Chemicals makes
              agriculture more efficient, eco-friendly, and in line with the
              objective of sustainably feeding future generations.
            </p>

            {/* Call to Action Button */}
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#102a70] hover:bg-[#0c2054] text-white font-bold text-xs sm:text-sm tracking-wider px-8 py-3.5 rounded-full inline-flex items-center gap-3 transition-colors duration-200 uppercase shadow-md"
            >
              Contact Now
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
          {/* Right Column: Local Image Plant 1 Display */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end items-center">
            <div className="plant-entry">
              <img
                src={plant1}
                alt="Plant Growth Illustration"
                className="plant-float w-full max-w-[350px] lg:max-w-[450px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>

        {/* Floating Sticky Feedback Button on the right edge */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#2546c1] hover:bg-[#1d3aa3] text-white flex flex-col items-center gap-2 px-2.5 py-4 rounded-l-md shadow-lg cursor-pointer transition-colors z-50">
          <span
            className="text-xs font-semibold uppercase tracking-wider select-none mb-1"
            style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
          >
            Feedback
          </span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
