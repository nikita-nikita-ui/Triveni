
export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white font-sans bg-gradient-to-br from-[#120a2b] via-[#21124a] to-[#0a1128]">
      {/* Background Subtle Barn/Farm Line-Art Vector */}
      <div className="absolute inset-x-0 bottom-0 h-64 opacity-[0.04] pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 1440 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-bottom"
        >
          {/* Detailed farm house/barn & crops path silhouette */}
          <path
            d="M50 250H1390M100 250V180L150 150L200 180V250M150 150V250M115 200H135V220H115V200M165 200H185V220H165V200M280 250V130L340 100L400 130V250M340 100V250M300 160H325V190H300V160M355 160H380V190H355V160M450 250L470 210H520L540 250M495 210V250M700 250V150L770 110L840 150V250M770 110V250M890 250L920 190H980L1010 250M1100 250V170L1150 140L1200 170V250M1150 140V250"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Subtle wheat/grass elements */}
          <path
            d="M30 250C35 230 40 220 40 220M40 220C35 225 30 235 30 250M42 220C45 228 48 238 50 250M60 250C65 232 70 222 70 222M70 222C65 227 60 237 60 250M1250 250C1255 230 1260 220 1260 220M1260 220C1255 225 1250 235 1250 250M1310 250C1315 232 1320 222 1320 222"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Logo Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-start">
              {/* Custom High-Fidelity Triveni Logo in SVG */}
              <svg
                viewBox="0 0 320 100"
                className="w-64 h-auto text-white"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Letter T */}
                <path d="M12 25H90V34H56V92H44V34H12V25Z" />
                {/* Letter r */}
                <path d="M96 46H107V52C110 47.5 116 45 122 45C124 45 126 45.2 128 45.5V56.5C125.5 56 123 55.8 120.5 55.8C112 55.8 107 61 107 70.5V92H96V46Z" />
                {/* Letter i */}
                <rect x="135" y="46" width="11" height="46" />
                <circle cx="140.5" cy="35.5" r="6.5" />
                {/* Letter v */}
                <path d="M152 46H163.5L178 82.5L192.5 46H204L183.5 92H172.5L152 46Z" />
                {/* Letter e (wrapped with wheat graphics) */}
                <path d="M241 69C241 60.5 236 54.5 227.5 54.5C219.5 54.5 214.5 60.5 214.5 69H241ZM214.5 76.5C215.5 83 221.5 87.5 229 87.5C235.5 87.5 240.5 84.5 243.5 80H254C250 88.5 241 94 229 94C212.5 94 203.5 83.5 203.5 69.5C203.5 55.5 212.5 45 228 45C243.5 45 252 55.5 252 70.5V76.5H214.5Z" />
                {/* Letter n */}
                <path d="M260 46H271V52C274.5 47.5 281 45 288.5 45C301.5 45 308.5 53 308.5 66.5V92H297.5V68C297.5 59.5 293.5 55 285.5 55C277.5 55 271 60.5 271 70.5V92H260V46Z" />
                {/* Letter i */}
                <rect x="316" y="46" width="11" height="46" />
                <circle cx="321.5" cy="35.5" r="6.5" />
                {/* TM Trademark text */}
                <text
                  x="312"
                  y="28"
                  fontSize="15"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  TM
                </text>

                {/* Wheat Ear Arc Leaf looping over 'e' & 'n' */}
                <path
                  d="M118 35C140 18 175 12 215 17C240 20 264 30 278 47C282 52 284 57 285 62"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Individual Wheat Grains/Leaves */}
                <path d="M135 31C145 28 152 24 156 18C152 24 144 28 135 31Z" />
                <path d="M150 28C162 25 170 19 173 12C169 19 159 24 150 28Z" />
                <path d="M168 25C181 22 189 15 191 8C187 15 176 21 168 25Z" />
                <path d="M188 24C201 21 208 13 209 6C205 13 195 20 188 24Z" />
                <path d="M210 24C223 22 229 14 229 7C225 14 216 21 210 24Z" />
                <path d="M231 26C243 25 248 17 247 10C244 17 236 23 231 26Z" />
                <path d="M251 31C262 31 266 23 264 16C262 23 255 28 251 31Z" />
              </svg>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-xl font-semibold tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-[15px] text-slate-300 font-medium">
              <li>
                <a
                  href="#home"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#blogs"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-xl font-semibold tracking-wide text-white">
              Products
            </h3>
            <ul className="space-y-3.5 text-[15px] text-slate-300 font-medium">
              <li>
                <a
                  href="#fungicides"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  Fungicides
                </a>
              </li>
              <li>
                <a
                  href="#insecticides"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  Insecticides
                </a>
              </li>
              <li>
                <a
                  href="#herbicides"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  Herbicides
                </a>
              </li>
              <li>
                <a
                  href="#pgr"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  PGR
                </a>
              </li>
              <li>
                <a
                  href="#fertilizers"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  Fertilizers
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-xl font-semibold tracking-wide text-white">
              Contact
            </h3>
            <ul className="space-y-4 text-[15px] text-slate-300">
              {/* Phone */}
              <li className="flex items-center space-x-3.5 align-middle">
                <span className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.622l1.13-1.13a1.875 1.875 0 012.652 0l2.25 2.25a1.875 1.875 0 010 2.652L7.25 11.412a13.117 13.117 0 005.688 5.688l1.02-1.02a1.875 1.875 0 012.652 0l2.25 2.25a1.875 1.875 0 010 2.652l-1.13 1.13a11.042 11.042 0 01-15.01-15.01z"
                    ></path>
                  </svg>
                </span>
                <a
                  href="tel:+919216139713"
                  className="hover:text-purple-300 transition-colors duration-200 font-medium"
                >
                  +91-9216139713
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center space-x-3.5 align-middle">
                <span className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    ></path>
                  </svg>
                </span>
                <a
                  href="mailto:info@trivenichemicals.co.in"
                  className="hover:text-purple-300 transition-colors duration-200 font-medium break-all"
                >
                  info@trivenichemicals.co.in
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start space-x-3.5 leading-relaxed">
                <span className="mt-1 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25gC4.5 6.358 7.858 3 12 3s7.5 3.358 7.5 7.5z"
                    ></path>
                  </svg>
                </span>
                <span className="text-slate-300 font-medium">
                  401 / b, 4th Floor, Usha Kiran Buildings, Azadpur Commercial
                  Complex, new Delhi , 110033
                </span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#120a2b] hover:bg-purple-200 transition-all duration-200 shadow-md"
              >
                <svg
                  className="w-5.5 h-5.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#120a2b] hover:bg-purple-200 transition-all duration-200 shadow-md"
              >
                <svg
                  className="w-5.5 h-5.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative z-10 bg-[#0a051d]/90 py-4.5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm md:text-[15px] font-semibold text-slate-100 tracking-wide">
            &copy; 2025 Triveni Chemicals. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
