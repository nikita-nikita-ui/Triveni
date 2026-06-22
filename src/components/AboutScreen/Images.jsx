import React from "react";

export default function ImagesSection() {
  // पौधों और पत्तों की बेहद आकर्षक और वाइब्रेंट इमेजेस (Plants & Leaves)
  const images = {
    macroLeaf:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop", // पानी की बूंदों के साथ वाइब्रेंट हरा पत्ता
    tropicalFoliage:
      "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1200&auto=format&fit=crop", // मॉन्स्टेरा के सुंदर और घने पत्ते
    sunlitForest:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop", // सूरज की किरणों से चमकते हुए हरे पत्ते
  };

  return (
    <section className="relative py-24 px-6 md:px-12 bg-slate-950 overflow-hidden flex items-center justify-center min-h-screen">
      {/* कस्टम की-फ्रेम्स और एडवांस्ड एनिमेशन्स */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes floatSlow {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-12px) rotate(0.8deg); }
            }
            @keyframes pulseGlow {
              0%, 100% { opacity: 0.35; transform: scale(1); }
              50% { opacity: 0.65; transform: scale(1.08); }
            }
            @keyframes revealIn {
              from {
                opacity: 0;
                transform: scale(0.96) translateY(50px);
                filter: blur(10px);
              }
              to {
                opacity: 1;
                transform: scale(1) translateY(0);
                filter: blur(0);
              }
            }
            .animate-reveal-card-1 {
              animation: revealIn 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .animate-reveal-card-2 {
              animation: revealIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .animate-reveal-card-3 {
              animation: revealIn 1.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .float-element-1 {
              animation: floatSlow 7s ease-in-out infinite;
            }
            .float-element-2 {
              animation: floatSlow 8s ease-in-out infinite;
              animation-delay: 1s;
            }
            .pulse-bg-glow {
              animation: pulseGlow 10s ease-in-out infinite;
            }
          `,
        }}
      />

      {/* आधुनिक बैकग्राउंड ग्रिड पैटर्न */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#022c22_1px,transparent_1px),linear-gradient(to_bottom,#022c22_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* एम्बिएंट नियॉन ग्लो (पृष्ठभूमि में सुंदर चमक) */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-emerald-500/10 blur-[130px] pulse-bg-glow pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-teal-500/10 blur-[110px] pulse-bg-glow pointer-events-none"
        style={{ animationDelay: "2.5s" }}
      />

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* बायां कॉलम: दो वर्टिकल कार्ड्स (पौधे और क्लोज़-अप पत्ते) */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-8 justify-between">
            {/* कार्ड 1: पानी की बूंदों वाला हरा पत्ता */}
            <div className="animate-reveal-card-1 float-element-1 group relative overflow-hidden rounded-[2.5rem] border border-emerald-500/15 bg-slate-900 shadow-2xl transition-all duration-700 hover:shadow-emerald-500/25 hover:border-emerald-500/40 flex-1 min-h-[280px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1"
                style={{ backgroundImage: `url(${images.macroLeaf})` }}
              />
              {/* कोमल डार्क विनेट इफ़ेक्ट */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-80" />
              {/* होवर करने पर ग्लोइंग बॉर्डर */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-transparent group-hover:border-emerald-400/20 transition-all duration-700 pointer-events-none" />
            </div>

            {/* कार्ड 2: शानदार मॉन्स्टेरा पत्ता */}
            <div className="animate-reveal-card-2 float-element-2 group relative overflow-hidden rounded-[2.5rem] border border-teal-500/15 bg-slate-900 shadow-2xl transition-all duration-700 hover:shadow-teal-500/25 hover:border-teal-500/40 flex-1 min-h-[280px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:-rotate-1"
                style={{ backgroundImage: `url(${images.tropicalFoliage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 rounded-[2.5rem] border border-transparent group-hover:border-teal-400/20 transition-all duration-700 pointer-events-none" />
            </div>
          </div>

          {/* दायां कॉलम: एक बड़ा वर्टिकल कार्ड (सूरज की किरणों वाला घना जंगल) */}
          <div className="col-span-12 md:col-span-7">
            <div className="animate-reveal-card-3 group relative h-full min-h-[480px] md:min-h-[600px] overflow-hidden rounded-[2.5rem] border border-emerald-500/15 bg-slate-900 shadow-2xl transition-all duration-700 hover:shadow-emerald-500/30 hover:border-emerald-500/40">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${images.sunlitForest})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-90" />
              <div className="absolute inset-0 rounded-[2.5rem] border border-transparent group-hover:border-emerald-400/20 transition-all duration-700 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
