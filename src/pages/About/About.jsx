import AboutHero from "../../components/AboutScreen/AboutHero";
import ImagesSection from "../../components/AboutScreen/Images";
import Abouthero from "../../components/AboutScreen/About_hero";
import DistributionNetwork from "../../components/AboutScreen/DistributionNetwork";
import Testimonials from "../../components/AboutScreen/Testimonials";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export default function About() {
  return (
    <>
      <Navbar />

      <AboutHero />
      <ImagesSection />
      <Abouthero />
      <DistributionNetwork />
      <Testimonials />
      <Footer />
    </>
  );
}
