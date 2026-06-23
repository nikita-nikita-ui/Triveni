import React from 'react'
import Founder from "../../components/HomeSection/Founder";
import TriveniChemicals from "../../components/HomeSection/TriveniChemicals";
import Hero from "../../components/Navbar/Hero";
import Navbar from "../../components/Navbar/Navbar"
import Countup from '../../components/HomeSection/Countup';
import Articles from '../../components/HomeSection/Articles';
import QualityProduct from '../../components/HomeSection/QualityProducts';
import ContactForm from '../../components/HomeSection/ContactForm';

export default function Home() {
  return (
  <>
      <Navbar />
        <Hero />
        <TriveniChemicals />
        <Founder />
        <Countup />
        <Articles />
        <QualityProduct />
        <ContactForm />
  </>
  )
}
