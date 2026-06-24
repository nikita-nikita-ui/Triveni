import plant from "../../assets/plant2.jpg";

const GoogleIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22-.03-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const VerifiedBadge = () => (
  <svg
    className="w-4 h-4 text-purple-600 fill-current flex-shrink-0"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-amber-400 fill-current" : "text-gray-300 fill-current"}`}
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Vishal chawla",
      date: "2023-06-01",
      rating: 5,
      text: "Best Quality Product and Good Experience...",
      initials: "V",
      avatarColor: "from-purple-600 to-indigo-600",
    },
    {
      id: 2,
      name: "Linganna Kaliraj",
      date: "2023-05-29",
      rating: 4,
      text: "Good company. , very good quality, best rate",
      initials: "L",
      avatarColor: "from-emerald-500 to-teal-600",
    },
    {
      id: 3,
      name: "Anika Caur",
      date: "2023-05-29",
      rating: 5,
      text: "Excellent products under effective price. Every farmer must try Triveni chemicals and industries Ltd....",
      initials: "A",
      avatarColor: "from-indigo-600 to-purple-600",
    },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.25; }
          50% { transform: scale(1.1); opacity: 0.35; }
        }
        .animate-fade-up {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-glow {
          animation: pulseGlow 8s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 150ms; }
        .delay-200 { animation-delay: 300ms; }
        .delay-300 { animation-delay: 450ms; }
      `,
        }}
      />

      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-purple-300/30 blur-3xl pointer-events-none animate-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none animate-glow" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <span className="text-purple-700 text-sm font-bold tracking-wider uppercase inline-block mb-3 animate-fade-up">
          Our Testimonials
        </span>

        <h2 className="text-3xl sm:text-5xl font-black tracking-wide uppercase mb-4 animate-fade-up text-[#00b050]">
          What They're Talking About
        </h2>

        <div className="flex justify-center mb-12 animate-fade-up">
          <svg
            className="w-24 h-8 text-purple-700"
            viewBox="0 0 100 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 25 Q 35 15, 95 25" strokeLinecap="round" />
            <path
              d="M25 21 C 20 10, 40 10, 45 21"
              fill="currentColor"
              fillOpacity="0.2"
            />
            <path d="M25 21 C 20 10, 40 10, 45 21" />
            <path
              d="M50 21 C 45 10, 65 10, 70 21"
              fill="currentColor"
              fillOpacity="0.2"
            />
            <path d="M50 21 C 45 10, 65 10, 70 21" />
            <path
              d="M75 22 C 70 12, 85 12, 90 22"
              fill="currentColor"
              fillOpacity="0.2"
            />
            <path d="M75 22 C 70 12, 85 12, 90 22" />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {reviews.map((review, idx) => (
            <div
              key={review.id}
              className={`group relative overflow-hidden bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#022c22] p-7 rounded-2xl text-white border border-green-900/30 shadow-[0_10px_30px_rgba(112,85,250,0.04)] hover:shadow-[0_20px_40px_rgba(5,150,105,0.35)] transition-all duration-500 transform hover:-translate-y-3 flex flex-col justify-between min-h-[250px] animate-fade-up delay-${(idx + 1) * 100}`}
            >
              <img
                src={plant}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-75 contrast-125 brightness-50 pointer-events-none z-0 "
              />

              <div className="relative z-10 flex flex-col justify-between h-full flex-1">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.avatarColor} text-white flex items-center justify-center font-bold text-lg shadow-sm`}
                      >
                        {review.initials}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-base tracking-tight transition-colors">
                          {review.name}
                        </h4>
                        <p className="text-gray-300 text-xs mt-0.5">
                          {review.date}
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-1.5 rounded-lg border border-gray-100 shadow-sm transition-colors">
                      <GoogleIcon />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} filled={star <= review.rating} />
                      ))}
                    </div>
                    <VerifiedBadge />
                  </div>

                  <p className="text-gray-100 text-sm leading-relaxed font-normal">
                    "{review.text}"
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
