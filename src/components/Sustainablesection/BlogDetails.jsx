import React from "react";
import { CalendarDays, User, Search } from "lucide-react";

export default function BlogDetails() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Left Content */}
          <div className="lg:col-span-2 animate-fadeIn">
            <div className="overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200"
                alt="Farm"
                className="w-full h-[450px] object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            {/* Meta */}
            <div className="flex items-center gap-6 mt-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} className="text-yellow-500" />
                January 23, 2023
              </div>

              <div className="flex items-center gap-2">
                <User size={18} className="text-yellow-500" />
                Admin
              </div>
            </div>

            {/* Content */}
            <div className="mt-8 space-y-6 text-gray-700 leading-9 text-lg">
              <p>
                Adopting methods that improve soil health for future generations
                and safeguard the environment in addition to increasing output is
                essential to promoting sustainable growth in agriculture.
              </p>

              <p>
                Organic and environmentally friendly inputs are essential for
                modern farming, which requires solutions that strike a balance
                between crop output and long-term sustainability.
              </p>

              <p>
                Farmers may eventually guarantee healthier crops and more fertile
                land by lowering reliance on dangerous pesticides and encouraging
                natural soil enrichment.
              </p>

              <p>
                As a respected pioneer in agricultural solutions, Triveni
                Chemicals is dedicated to providing farmers with sustainable
                goods and premium organic fertilizers.
              </p>

              <p>
                Their products are made to strengthen crop nutrition, increase
                microbial activity, and improve soil structure without
                endangering the environment.
              </p>

              <blockquote className="border-l-4 border-green-600 pl-5 italic text-green-700 bg-green-50 py-4 rounded-r-xl">
                "Healthy soil is the foundation of healthy food and a healthy
                future."
              </blockquote>

              <p>
                Selecting Triveni Chemicals is a step toward healthier crops,
                richer soil, and a more sustainable agricultural ecosystem.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 lg:sticky lg:top-24 h-fit">
            
            {/* Search */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-500">
              <h3 className="text-2xl font-bold mb-5">Search</h3>

              <div className="flex">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 border rounded-l-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />

                <button className="bg-green-900 text-white px-6 rounded-r-lg hover:bg-green-700 transition">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-500">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                Recent Posts
              </h3>

              <ul className="space-y-5">
                {[
                  "Organic Fertilizers Plants",
                  "Drive Sustainable Growth",
                  "Organic Fertilizers",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-green-600 transition duration-300 hover:translate-x-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-500">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                Categories
              </h3>

              <ul className="space-y-5">
                {[
                  { name: "Agriculture", count: 3 },
                  { name: "Farm", count: 3 },
                  { name: "Uncategorized", count: 3 },
                ].map((cat, index) => (
                  <li
                    key={index}
                    className="flex justify-between cursor-pointer hover:text-green-600 transition duration-300"
                  >
                    <span>{cat.name}</span>
                    <span>({cat.count})</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}