// ✅ Local images import (adjust path if needed)
import plant1 from "../../assets/plant1.jpg";
import plant2 from "../../assets/plant2.jpg";
import plant3 from "../../assets/plant3.jpg";

export default function ImagesSection() {
  const images = {
    plant1,
    plant2,
    plant3,
  };

  return (
    <section className="relative py-24 px-6 md:px-12 bg-slate-950 overflow-hidden flex items-center justify-center min-h-screen">
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

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#022c22_1px,transparent_1px),linear-gradient(to_bottom,#022c22_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-emerald-500/10 blur-[130px] pulse-bg-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-teal-500/10 blur-[110px] pulse-bg-glow pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* LEFT COLUMN */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-8 justify-between">
            {/* Plant 1 */}
            <div className="animate-reveal-card-1 float-element-1 group relative overflow-hidden rounded-[2.5rem] border border-emerald-500/15 bg-slate-900 shadow-2xl flex-1 min-h-[280px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${images.plant1})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
            </div>

            {/* Plant 2 */}
            <div className="animate-reveal-card-2 float-element-2 group relative overflow-hidden rounded-[2.5rem] border border-teal-500/15 bg-slate-900 shadow-2xl flex-1 min-h-[280px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${images.plant2})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-12 md:col-span-7">
            <div className="animate-reveal-card-3 group relative h-full min-h-[480px] md:min-h-[600px] overflow-hidden rounded-[2.5rem] border border-emerald-500/15 bg-slate-900 shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${images.plant3})` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
