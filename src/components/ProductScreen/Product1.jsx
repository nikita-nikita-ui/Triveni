import soilImg from "../../assets/soil.jpg";
export default function ProductUI() {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] flex flex-col justify-between overflow-hidden bg-black select-none">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${soilImg})`,
          animation: "zoomBg 12s ease-in-out infinite",
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="absolute right-[-15%] bottom-[5%] md:right-[-5%] md:bottom-[10%] w-[60%] md:w-[45%] opacity-15 pointer-events-none z-10">
        <svg
          viewBox="0 0 320 100"
          className="w-full h-auto text-white"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 25H90V34H56V92H44V34H12V25Z" />
          <path d="M96 46H107V52C110 47.5 116 45 122 45C124 45 126 45.2 128 45.5V56.5C125.5 56 123 55.8 120.5 55.8C112 55.8 107 61 107 70.5V92H96V46Z" />
          <rect x="135" y="46" width="11" height="46" />
          <circle cx="140.5" cy="35.5" r="6.5" />
          <path d="M152 46H163.5L178 82.5L192.5 46H204L183.5 92H172.5L152 46Z" />
          <path d="M241 69C241 60.5 236 54.5 227.5 54.5C219.5 54.5 214.5 60.5 214.5 69H241ZM214.5 76.5C215.5 83 221.5 87.5 229 87.5C235.5 87.5 240.5 84.5 243.5 80H254C250 88.5 241 94 229 94C212.5 94 203.5 83.5 203.5 69.5C203.5 55.5 212.5 45 228 45C243.5 45 252 55.5 252 70.5V76.5H214.5Z" />
          <path d="M260 46H271V52C274.5 47.5 281 45 288.5 45C301.5 45 308.5 53 308.5 66.5V92H297.5V68C297.5 59.5 293.5 55 285.5 55C277.5 55 271 60.5 271 70.5V92H260V46Z" />
          <rect x="316" y="46" width="11" height="46" />
          <circle cx="321.5" cy="35.5" r="6.5" />
          <text
            x="312"
            y="28"
            fontSize="15"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            TM
          </text>
          <path
            d="M118 35C140 18 175 12 215 17C240 20 264 30 278 47C282 52 284 57 285 62"
            stroke="currentColor"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M135 31C145 28 152 24 156 18C152 24 144 28 135 31Z" />
          <path d="M150 28C162 25 170 19 173 12C169 19 159 24 150 28Z" />
          <path d="M168 25C181 22 189 15 191 8C187 15 176 21 168 25Z" />
          <path d="M188 24C201 21 208 13 209 6C205 13 195 20 188 24Z" />
          <path d="M210 24C223 22 229 14 229 7C225 14 216 21 210 24Z" />
          <path d="M231 26C243 25 248 17 247 10C244 17 236 23 231 26Z" />
          <path d="M251 31C262 31 266 23 264 16C262 23 255 28 251 31Z" />
        </svg>
      </div>

      <header className="relative z-25 w-full flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center">
          <svg
            viewBox="0 0 320 100"
            className="w-36 md:w-44 h-auto text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 25H90V34H56V92H44V34H12V25Z" />
            <path d="M96 46H107V52C110 47.5 116 45 122 45C124 45 126 45.2 128 45.5V56.5C125.5 56 123 55.8 120.5 55.8C112 55.8 107 61 107 70.5V92H96V46Z" />
            <rect x="135" y="46" width="11" height="46" />
            <circle cx="140.5" cy="35.5" r="6.5" />
            <path d="M152 46H163.5L178 82.5L192.5 46H204L183.5 92H172.5L152 46Z" />
            <path d="M241 69C241 60.5 236 54.5 227.5 54.5C219.5 54.5 214.5 60.5 214.5 69H241ZM214.5 76.5C215.5 83 221.5 87.5 229 87.5C235.5 87.5 240.5 84.5 243.5 80H254C250 88.5 241 94 229 94C212.5 94 203.5 83.5 203.5 69.5C203.5 55.5 212.5 45 228 45C243.5 45 252 55.5 252 70.5V76.5H214.5Z" />
            <path d="M260 46H271V52C274.5 47.5 281 45 288.5 45C301.5 45 308.5 53 308.5 66.5V92H297.5V68C297.5 59.5 293.5 55 285.5 55C277.5 55 271 60.5 271 70.5V92H260V46Z" />
            <rect x="316" y="46" width="11" height="46" />
            <circle cx="321.5" cy="35.5" r="6.5" />
            <text
              x="312"
              y="28"
              fontSize="15"
              fontWeight="bold"
              fontFamily="sans-serif"
            >
              TM
            </text>
            <path
              d="M118 35C140 18 175 12 215 17C240 20 264 30 278 47C282 52 284 57 285 62"
              stroke="currentColor"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
            <path d="M135 31C145 28 152 24 156 18C152 24 144 28 135 31Z" />
            <path d="M150 28C162 25 170 19 173 12C169 19 159 24 150 28Z" />
            <path d="M168 25C181 22 189 15 191 8C187 15 176 21 168 25Z" />
            <path d="M188 24C201 21 208 13 209 6C205 13 195 20 188 24Z" />
            <path d="M210 24C223 22 229 14 229 7C225 14 216 21 210 24Z" />
            <path d="M231 26C243 25 248 17 247 10C244 17 236 23 231 26Z" />
            <path d="M251 31C262 31 266 23 264 16C262 23 255 28 251 31Z" />
          </svg>
        </div>

        <button className="bg-[#0f2c8a] p-2.5 rounded-md hover:bg-[#153eb3] transition-colors duration-200">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </header>

      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-2 px-6 mb-5 md:mb-6 shadow-lg inline-flex items-center">
          <span className="text-[13px] md:text-sm text-slate-200 font-medium tracking-wide">
            Triveni Chemicals <span className="mx-2 text-white/50">/</span>{" "}
            <span className="text-white">Our Products</span>
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wider text-white uppercase drop-shadow-md">
          Our Products
        </h1>
      </div>

      <div className="h-12 w-full relative z-20" />
      <style>
        {`
    @keyframes zoomBg {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.12);
      }
      100% {
        transform: scale(1);
      }
    }
  `}
      </style>
    </section>
  );
}
