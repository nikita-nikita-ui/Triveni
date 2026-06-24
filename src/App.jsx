import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/blog";
import Product from "./pages/Products/Product";
import Contact from "./pages/Contact/Contact";
import Fertilizers from "./pages/Fertilizers/Fertilizers";
import Insecticides from "./pages/Insecticides/Insecticides";
import Fungicides from "./pages/Fungicides/Fungicides";
import Herbicides from "./pages/Herbicides/Herbicides";
import PGR from "./pages/PGR/PGR";
import Biostimulants from "./pages/Biostimulants/Biostimulants";
import ImportedNutrient from "./pages/ImportedNutrient/ImportedNutrient";
import OrganicManure from "./pages/OrganicManure/OrganicManure";
import Sustainable from "./pages/sustainable/sustainable";
import ScrollToTopButton from "././components/ScrollToTopButton/ScrollToTopButton";
import BioFertilizers from "./pages/BioFertilizers/BioFertilizers";
import ImportedFertilizer from "./pages/Fertilizers/ImportedFertilizer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sustainable" element={<Sustainable />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/fertilizers" element={<Fertilizers />} />
        <Route path="/products/BioFertilizers" element={<BioFertilizers />} />
        <Route path="/products/insecticides" element={<Insecticides />} />
        <Route path="/products/fungicides" element={<Fungicides />} />
        <Route path="/products/herbicides" element={<Herbicides />} />
        <Route path="/products/pgr" element={<PGR />} />
        <Route path="/products/biostimulants" element={<Biostimulants />} />
        <Route path="/products/organic-manure" element={<OrganicManure />} />
        <Route
          path="/products/ImportedFertilizers"
          element={<ImportedFertilizer />}
        />

        <Route
          path="/products/imported-nutrient"
          element={<ImportedNutrient />}
        />
        <Route path="/products/:category" element={<Product />} />
      </Routes>
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;
