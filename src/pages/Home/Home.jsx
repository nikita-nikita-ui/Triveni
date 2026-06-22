import React from 'react'
import Founder from "../../components/HomeSection/Founder";
import TriveniChemicals from "../../components/HomeSection/TriveniChemicals";
import Hero from "../../components/Navbar/Hero";
import Navbar from "../../components/Navbar/Navbar"

export default function Home() {
  return (
  <>
      <Navbar />
        <Hero />
        <TriveniChemicals />
        <Founder />
  </>
  )
}
