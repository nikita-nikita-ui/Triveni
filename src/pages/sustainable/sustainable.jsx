import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BlogDetails from '../../components/Sustainablesection/BlogDetails'
import Formdetails from '../../components/Sustainablesection/formdetails'

export default function Sustainable() {
  return (
<>
<Navbar />
      {/* Background Banner Section */}
      <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden flex items-center justify-center">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Text */}
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-2">
            <span className="text-sm md:text-lg backdrop-blur-md px-4 py-2 rounded-full bg-white/10">
              Triveni Chemicals <span className="mx-2">/</span>  Uncategorized <span className="mx-2">/</span> Drive sustainable growth
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold uppercase">Drive sustainable growth</h1>
        </div>
      </div>
      <BlogDetails />
      <Formdetails />
<Footer />
</>
  )
}
