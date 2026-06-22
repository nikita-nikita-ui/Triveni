import React, { useEffect, useState } from "react";
import leaf1 from "../../Images/leaf1.png"; // bottom background image
import trivenidp from "../../Images/triveni-dp.jpg";
export default function Founder() {
  const text = "MESSAGE FROM OUR FOUNDER";
  const [displayed, setDisplayed] = useState("");

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-white py-20 px-4 md:px-20 overflow-hidden">
      {/* Bottom background image */}
      <img
        alt="background"
        className="absolute bottom-0 left-0 w-full opacity-20 pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto text-center">
            <p className="text-blue-700 font-medium tracking-wide">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-100 mb-3">
            Founder
          </span>
        </p>
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold !text-green-600 tracking-wide">
          {displayed}
          <span className="animate-pulse">|</span>
        </h2>

    

        <div className=" mx-auto my-4 flex justify-center">
          <img src={leaf1} />
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mt-6 animate-fadeIn">
          Every product we create is rooted in agronomic research and
          manufactured in our own facilities. We begin with the highest quality
          raw materials and process them using the most up-to-date scientific
          and technical methods. Innovation is at the heart of everything we do
          — enabling us to deliver cutting-edge agricultural solutions to our
          partners.
        </p>

        {/* Founder Card */}
        <div className="mt-10 flex items-center justify-center gap-4 px-6 py-3 rounded-full w-fit mx-auto animate-slideUp">
          <img
            src={trivenidp}
            alt="Founder"
            className="w-18 h-18 rounded-full object-cover border-2 !border-green-500"
          />

          <div className="text-left">
            <h4 className="!text-blue-800 font-semibold">Sh. Chander Goyal</h4>
            <p className="!text-gray-600 text-sm">Managing Director</p>
          </div>
        </div>
      </div>
    </section>
  );
}
