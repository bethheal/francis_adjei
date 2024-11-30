import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Home from './pages/heroSection/home';
import About from './pages/aboutSection/about';
import Contact from './pages/contactSection/contact';
import Services from './pages/servicesSection/services';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = ['hero', 'about', 'services', 'contact'];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div
          style={{
            backgroundColor: 'white',
          
            minHeight: '10vh',
            color: '#111827',
          }}
        >
          <Navbar activeSection={activeSection} />
          <div id="hero" className="section ">
            <Home />
          </div>
          <div id="about" className="section ">
            <About />
          </div>
          <div id="services" className="section ">
            <Services />
          </div>
          <div id="contact" className="section ">
            <Contact />
          </div>
          <Footer/>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
