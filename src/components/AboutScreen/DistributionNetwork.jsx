import indiaMap from "../../assets/india.jpg";
import plant3 from "../../assets/plant3.jpg";
import anotherMap from "../../assets/uttra.jpg";
export default function DistributionNetwork() {
  return (
    <section className="relative py-20 bg-[#f5f5f5] overflow-hidden">
      {/* Background Plant Image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={plant3}
          alt="Plant Background"
          className="w-full h-full object-cover opacity-60 animate-plantZoom"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="
              text-[#0cab4d]
              text-3xl
              md:text-5xl
              font-extrabold
              uppercase
              tracking-wide
              drop-shadow-lg
            "
          >
            Our Distribution Network
          </h2>

          {/* Decorative Leaf */}
          <div className="flex justify-center mt-4">
            <svg
              width="90"
              height="28"
              viewBox="0 0 100 30"
              fill="none"
              stroke="#1e40af"
              strokeWidth="2.5"
            >
              <path d="M5 25 Q 35 15, 95 25" strokeLinecap="round" />

              <path
                d="M25 21 C 20 10, 40 10, 45 21"
                fill="#1e40af"
                fillOpacity="0.15"
              />
              <path d="M25 21 C 20 10, 40 10, 45 21" />

              <path
                d="M50 21 C 45 10, 65 10, 70 21"
                fill="#1e40af"
                fillOpacity="0.15"
              />
              <path d="M50 21 C 45 10, 65 10, 70 21" />

              <path
                d="M75 22 C 70 12, 85 12, 90 22"
                fill="#1e40af"
                fillOpacity="0.15"
              />
              <path d="M75 22 C 70 12, 85 12, 90 22" />
            </svg>
          </div>
        </div>

        {/* Map Image */}
        <div className="flex justify-center lg:justify-end">
          {" "}
          <div className="relative group">
            <img
              src={indiaMap}
              alt="India Distribution Network"
              className="
  w-[150px]
  h-[150px]
  object-cover
  rounded-full
  transition-all
  duration-700
  hover:scale-105
  relative
  z-10
"
            />
            <img
              src={anotherMap}
              alt="Second Network"
              className="
      w-[150px]
      h-[150px]
      object-cover
      rounded-full
      absolute
      top-0
      left-1/2
      z-20
      border-4 border-white
    "
            />

            <div className="absolute inset-0 rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.12)] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-24 right-56 w-3 h-3 rounded-full bg-green-300 animate-pulse"></div>

      <div className="absolute top-24 right-32 w-8 h-8 border-2 border-green-500 rounded-full animate-ping"></div>

      {/* Animation */}
      <style>
        {`
          @keyframes plantZoom {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.15);
            }
            100% {
              transform: scale(1);
            }
          }

          .animate-plantZoom {
            animation: plantZoom 8s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
