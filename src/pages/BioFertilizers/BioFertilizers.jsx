import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
const products = [
  {
    id: 1,
    name: "CYNOVITA",
    image:
      "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "GROWGOLD",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "HY-SOL",
    image:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "PARAG PHOSPHATE",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
  },
{
  id: 5,
  name: "PARAG POTASH",
  image:
    "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
},
{
  id: 6,
  name: "PARAG POTASH",
  image:
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
},
{
  id: 7,
  name: "Parag Power",
  image:
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
},
  {
    id: 8,
    name: "PARAG PROM",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
  },
];  
export default function BioFertilizers() {
  return (
<>
<Navbar />
{/* Background Banner Section */}
<div className="relative w-full min-h-[250px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[500px] overflow-hidden flex items-center justify-center">

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

  {/* Content */}
  <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">

    {/* Breadcrumb */}
    <div className="mb-4">
      <span className="inline-block text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-5 py-2 rounded-full bg-white/10 backdrop-blur-md">
        Triveni Chemicals
        <span className="mx-1 sm:mx-2">/</span>
        Products
        <span className="mx-1 sm:mx-2">/</span>
         Bio-Fertilizers
      </span>
    </div>

    {/* Title */}
    <h1 className="font-extrabold leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
      Shop
    </h1>

  </div>
</div>

 <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <div className="border rounded-lg bg-white p-4 h-64 flex items-center justify-center shadow-sm hover:shadow-md transition">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full object-contain"
              />
            </div>

            <h3 className="mt-4 text-lg font-medium text-blue-900 uppercase">
              {product.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
<Footer />
</>
  )
}
