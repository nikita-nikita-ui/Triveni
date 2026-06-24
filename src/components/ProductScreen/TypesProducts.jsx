import { useNavigate } from "react-router-dom";

export default function TypesProducts() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Insecticides",
      path: "/products/insecticides",
      svg: (
        <svg viewBox="0 0 240 240" width="100%" height="100%">
          <path
            d="M120 35c52 0 85 30 85 85s-33 85-85 85-85-30-85-85 33-85 85-85z"
            fill="#D8DFEE"
          />
          <path
            d="M120 50 C160 50 180 60 180 100 C180 150 120 190 120 190 C120 190 60 150 60 100 C60 60 80 50 120 50 Z"
            fill="#2E7D32"
          />
          <path
            d="M120 55 C155 55 172 64 172 100 C172 143 120 180 120 180 C120 180 68 143 68 100 C68 64 85 55 120 55 Z"
            fill="#4CAF50"
          />
          <circle cx="120" cy="115" r="32" fill="#FFFFFF" />
          <circle
            cx="120"
            cy="115"
            r="28"
            fill="none"
            stroke="#E53935"
            strokeWidth="6"
          />
          <line
            x1="100"
            y1="95"
            x2="140"
            y2="135"
            stroke="#E53935"
            strokeWidth="6"
          />
          <ellipse cx="120" cy="115" rx="8" ry="12" fill="#263238" />
          <circle cx="120" cy="100" r="5" fill="#263238" />
          <line
            x1="110"
            y1="110"
            x2="102"
            y2="106"
            stroke="#263238"
            strokeWidth="2"
          />
          <line
            x1="110"
            y1="118"
            x2="100"
            y2="118"
            stroke="#263238"
            strokeWidth="2"
          />
          <line
            x1="110"
            y1="126"
            x2="102"
            y2="130"
            stroke="#263238"
            strokeWidth="2"
          />
          <line
            x1="130"
            y1="110"
            x2="138"
            y2="106"
            stroke="#263238"
            strokeWidth="2"
          />
          <line
            x1="130"
            y1="118"
            x2="140"
            y2="118"
            stroke="#263238"
            strokeWidth="2"
          />
          <line
            x1="130"
            y1="126"
            x2="138"
            y2="130"
            stroke="#263238"
            strokeWidth="2"
          />
          <circle cx="85" cy="85" r="4" fill="#FFB300" />
          <circle cx="160" cy="155" r="4" fill="#FFB300" />
          <path
            d="M145 65 Q150 60 148 55"
            stroke="#37474F"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="148" cy="55" r="3" fill="#37474F" />
        </svg>
      ),
    },
    {
      name: "Fungicides",
      path: "/products/fungicides",
      svg: (
        <svg viewBox="0 0 240 240" width="100%" height="100%">
          <path
            d="M120 35c52 0 85 30 85 85s-33 85-85 85-85-30-85-85 33-85 85-85z"
            fill="#D8DFEE"
          />
          <path
            d="M110 130 C70 140 60 100 80 80 C100 60 120 100 110 130 Z"
            fill="#4CAF50"
          />
          <path
            d="M80 80 Q95 105 110 130"
            stroke="#2E7D32"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M130 130 C170 140 180 100 160 80 C140 60 120 100 130 130 Z"
            fill="#4CAF50"
          />
          <path
            d="M160 80 Q145 105 130 130"
            stroke="#2E7D32"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M120 140 C140 90 140 50 120 50 C100 50 100 90 120 140 Z"
            fill="#66BB6A"
          />
          <path d="M120 50 L120 140" stroke="#2E7D32" strokeWidth="2.5" />
          <circle cx="105" cy="85" r="8" fill="#78909C" opacity="0.8" />
          <circle cx="105" cy="85" r="4" fill="#546E7A" opacity="0.9" />
          <circle cx="135" cy="95" r="10" fill="#78909C" opacity="0.8" />
          <circle cx="135" cy="95" r="5" fill="#546E7A" opacity="0.9" />
          <circle cx="120" cy="115" r="6" fill="#78909C" opacity="0.8" />
          <circle cx="120" cy="115" r="3" fill="#546E7A" opacity="0.9" />
          <circle cx="150" cy="115" r="7" fill="#78909C" opacity="0.8" />
        </svg>
      ),
    },
    {
      name: "Herbicides",
      path: "/products/herbicides",
      svg: (
        <svg viewBox="0 0 240 240" width="100%" height="100%">
          <path
            d="M120 35c52 0 85 30 85 85s-33 85-85 85-85-30-85-85 33-85 85-85z"
            fill="#D8DFEE"
          />
          <path
            d="M50 170 C80 160 160 160 190 170 C195 175 195 185 190 190 C160 195 80 195 50 190 C45 185 45 175 50 170 Z"
            fill="#8D6E63"
          />
          <path
            d="M55 175 C80 168 160 168 185 175 C188 178 188 182 185 185 C160 188 80 188 55 185 C52 182 52 178 55 175 Z"
            fill="#D84315"
          />
          <path d="M70 175 Q60 120 45 95 Q65 115 80 175 Z" fill="#4CAF50" />
          <path d="M90 175 Q95 110 85 80 Q105 110 105 175 Z" fill="#2E7D32" />
          <path
            d="M110 175 Q120 100 125 70 Q130 110 125 175 Z"
            fill="#4CAF50"
          />
          <path
            d="M130 175 Q145 115 155 85 Q150 120 145 175 Z"
            fill="#2E7D32"
          />
          <path
            d="M150 175 Q170 110 185 90 Q170 125 165 175 Z"
            fill="#66BB6A"
          />
          <path
            d="M80 175 Q110 130 120 105 Q115 135 100 175 Z"
            fill="#66BB6A"
          />
          <path
            d="M135 175 Q115 130 110 110 Q120 135 130 175 Z"
            fill="#4CAF50"
          />
        </svg>
      ),
    },
    {
      name: "PGR",
      path: "/products/pgr",
      svg: (
        <svg viewBox="0 0 240 240" width="100%" height="100%">
          <path
            d="M120 35c52 0 85 30 85 85s-33 85-85 85-85-30-85-85 33-85 85-85z"
            fill="#D8DFEE"
          />
          <path
            d="M70 180 C80 160 160 160 170 180 C160 195 80 195 70 180 Z"
            fill="#4E342E"
          />
          <path
            d="M120 180 Q120 120 120 100"
            stroke="#8D6E63"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M120 180 Q120 120 120 100"
            stroke="#81C784"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M120 100 C110 80 110 60 120 50 C130 60 130 80 120 100 Z"
            fill="#4CAF50"
          />
          <path d="M120 50 L120 100" stroke="#2E7D32" strokeWidth="1.5" />
          <path
            d="M118 130 C95 120 80 125 75 140 C85 150 105 145 118 130 Z"
            fill="#66BB6A"
          />
          <path
            d="M75 140 Q100 135 118 130"
            stroke="#2E7D32"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M122 120 C145 110 160 115 165 130 C155 140 135 135 122 120 Z"
            fill="#4CAF50"
          />
          <path
            d="M165 130 Q140 125 122 120"
            stroke="#2E7D32"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      ),
    },
    {
      name: "Fertilizers",
      path: "/products/fertilizers",
      svg: (
        <svg viewBox="0 0 240 240" width="100%" height="100%">
          <path
            d="M120 35c52 0 85 30 85 85s-33 85-85 85-85-30-85-85 33-85 85-85z"
            fill="#D8DFEE"
          />
          <path
            d="M80 185 C100 180 140 180 160 185 L150 190 L90 190 Z"
            fill="#5C4033"
          />
          <path
            d="M85 180 C80 140 85 100 100 95 C110 92 130 92 140 95 C155 100 160 140 155 180 Z"
            fill="#8D6E63"
          />
          <path
            d="M100 95 C95 90 105 85 120 88 C135 85 145 90 140 95 Z"
            fill="#A1887F"
          />
          <rect x="100" y="98" width="40" height="4" rx="2" fill="#5D4037" />
          <circle cx="120" cy="140" r="18" fill="#3E2723" />
          <circle cx="120" cy="140" r="15" fill="#4CAF50" />
          <path
            d="M120 148 C120 148 116 142 120 136 C124 142 120 148 120 148 Z"
            fill="#FFFFFF"
          />
          <path
            d="M120 140 Q112 135 110 138 Q115 142 120 140 Z"
            fill="#FFFFFF"
          />
          <path
            d="M120 141 Q128 136 130 139 Q125 143 120 141 Z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: "Bio-Fertilizers",
      path: "/products/BioFertilizers",
      svg: (
        <svg viewBox="0 0 240 240" width="100%" height="100%">
          <path
            d="M120 35c52 0 85 30 85 85s-33 85-85 85-85-30-85-85 33-85 85-85z"
            fill="#D8DFEE"
          />
          <path
            d="M80 185 C100 180 140 180 160 185 L150 190 L90 190 Z"
            fill="#5C4033"
          />
          <path
            d="M85 180 C80 140 85 100 100 95 C110 92 130 92 140 95 C155 100 160 140 155 180 Z"
            fill="#8D6E63"
          />
          <path
            d="M100 95 C95 90 105 85 120 88 C135 85 145 90 140 95 Z"
            fill="#A1887F"
          />
          <rect x="100" y="98" width="40" height="4" rx="2" fill="#5D4037" />
          <circle cx="120" cy="140" r="18" fill="#3E2723" />
          <circle cx="120" cy="140" r="15" fill="#FFFFFF" />
          <path
            d="M115 132 C115 132 118 135 120 135 C122 135 125 132 125 132"
            stroke="#4CAF50"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M115 140 C115 140 118 137 120 137 C122 137 125 140 125 140"
            stroke="#4CAF50"
            strokeWidth="2"
            fill="none"
          />
          <line
            x1="117"
            y1="134"
            x2="117"
            y2="138"
            stroke="#2E7D32"
            strokeWidth="1.5"
          />
          <line
            x1="123"
            y1="134"
            x2="123"
            y2="138"
            stroke="#2E7D32"
            strokeWidth="1.5"
          />
          <path d="M120 135 L120 148" stroke="#2E7D32" strokeWidth="2" />
          <path
            d="M120 143 C123 141 126 142 126 142"
            stroke="#4CAF50"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      name: "Imported Fertilizers",
      path: "/products/ImportedFertilizers",
      svg: (
        <svg viewBox="0 0 240 240" width="100%" height="100%">
          <path
            d="M120 35c52 0 85 30 85 85s-33 85-85 85-85-30-85-85 33-85 85-85z"
            fill="#D8DFEE"
          />
          <path
            d="M80 185 C100 180 140 180 160 185 L150 190 L90 190 Z"
            fill="#5C4033"
          />
          <path
            d="M85 180 C80 140 85 100 100 95 C110 92 130 92 140 95 C155 100 160 140 155 180 Z"
            fill="#8D6E63"
          />
          <path
            d="M100 95 C95 90 105 85 120 88 C135 85 145 90 140 95 Z"
            fill="#A1887F"
          />
          <rect x="100" y="98" width="40" height="4" rx="2" fill="#5D4037" />
          <circle cx="120" cy="140" r="18" fill="#0D47A1" />
          <circle cx="120" cy="140" r="15" fill="#81D4FA" />
          <circle
            cx="120"
            cy="140"
            r="15"
            fill="none"
            stroke="#0D47A1"
            strokeWidth="1"
          />
          <ellipse
            cx="120"
            cy="140"
            rx="8"
            ry="15"
            fill="none"
            stroke="#0D47A1"
            strokeWidth="1"
          />
          <line
            x1="105"
            y1="140"
            x2="135"
            y2="140"
            stroke="#0D47A1"
            strokeWidth="1"
          />
          <path
            d="M103 143 C103 150 137 150 137 143"
            stroke="#FF4081"
            strokeWidth="2"
            fill="none"
          />
          <polygon points="137,143 134,146 140,146" fill="#FF4081" />
        </svg>
      ),
    },
  ];

  return (
    <div className="products-container">
      <style>{`
        .products-container {
          max-width: 1200px;
          margin: 60px auto;
          padding: 0 24px;
          font-family: "Poppins", "Inter", sans-serif;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
          justify-items: center;
        }
        @media (max-width: 992px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px;
          }
        }
        @media (max-width: 640px) {
          .products-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
        .product-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          width: 100%;
          max-width: 320px;
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .product-card:hover {
          transform: translateY(-8px);
        }
        .svg-wrapper {
          width: 220px;
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .product-card:hover .svg-wrapper {
          transform: scale(1.04);
        }
        .title-box {
          width: 100%;
          border: 1.5px solid #002d62;
          padding: 14px 10px;
          text-align: center;
          font-size: 18px;
          font-weight: 700;
          color: #002d62;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          background-color: transparent;
          border-radius: 999px;
          transition: background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
        }
        .product-card:hover .title-box {
          background-color: #2e5e04;
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(0, 45, 98, 0.15);
        }
      `}</style>

      <div className="products-grid">
        {categories.map((item) => (
          <div
            key={item.name}
            className="product-card"
            onClick={() => navigate(item.path)}
          >
            <div className="svg-wrapper">{item.svg}</div>
            <div className="title-box">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
