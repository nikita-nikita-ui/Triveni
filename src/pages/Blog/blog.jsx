import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Bannersection from "../../components/BlogSection/Banner";
import ContactForm from "../../components/HomeSection/ContactForm";
import Footer from '../../components/Footer/Footer';

export default function Blog() {
  return (
    <>
    <Navbar />
    <Bannersection />
    <ContactForm />
    <Footer />

    </>
  )
}
