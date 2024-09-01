import { useState } from 'react'
import './App.css'
import Hero from "./components/HeroSection/heroSection"
import Navbar from './components/Navbar/navbar'
import NavbarTwo from './components/NavbarTwo/navbarTwo'
import Product from './components/Product/product'
import Subscribe from './components/Subscibe/subscribe'
import OnlineOnly from './components/OnlineOnly/online'
import ImageGrid from './components/ImageGrid/imageGrid'
import SubFooter from './components/SubFooter/subFooter'
import Footer from './components/Footer/footer'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  }
  return (
    <>
      <NavbarTwo openNav={openNav} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar closeNav={closeNav} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <Product />
      <OnlineOnly/>
      <ImageGrid/>
      <Subscribe/>
      <SubFooter/>
      <Footer/>
    </>
  )
}

export default App
