import Navbar from "../../components/Navbar/Navbar";
import ProductUI from "../../components/ProductScreen/Product1";
import TypesProducts from "../../components/ProductScreen/TypesProducts";
import Footer from "../../components/Footer/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <ProductUI />
      <TypesProducts />
      <Footer />
    </>
  );
}
