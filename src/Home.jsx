import { useState, useEffect } from 'react'
import Header from './Header'
import './App.css'
import ContactUs from './ContactUs'
import Content from './Content'
import Footer from './Footer'
import ContactForm from './ContactForm'

function Home() {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    const handleContact = () => {
      setIsContactFormOpen(true);
    };
  
    const closeContactForm = () => {
      setIsContactFormOpen(false);
    };
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsContactFormOpen(true);
      }, 10000);
  
      return () => clearTimeout(timer);
    }, []);

  return (
    <>
    <Header />
    <Content />
    <ContactUs />
    <Footer />
    
    <div className=' fixed right-10 bottom-10'>
    {!isContactFormOpen && (
          <button className=' text-base font-semibold border-2 border-rose-300 p-2 rounded-2xl bg-pink-600 text-white active:scale-90 transition-all' onClick={handleContact}>Contact us</button>
    )}
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
        </div>
    </>
  )
}

export default Home
