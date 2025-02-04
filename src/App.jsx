import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import NavBar from "./components/ui/NavBar";

import Hero from "./components/homepage/Hero";
import Role from "./components/homepage/Role";
import About from "./components/homepage/About";
import Services from "./components/homepage/Services";
import Works from "./components/homepage/Works";
import Contact from "./components/homepage/Contact";
import Footer from "./components/ui/Footer";
import MobileNav from "./components/ui/MobileNav";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRefs = useRef([]);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sectionHeadings = document.querySelectorAll(".section-heading");
    sectionHeadings.forEach((heading) => {
      const headings = heading.querySelectorAll(".heading");

      headings.forEach((individualHeading) => {
        ScrollTrigger.create({
          trigger: heading,
          start: "top 550px",
          end: "bottom 550px",
          animation: gsap.to(individualHeading, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 1,
          }),
          toggleActions: "play none none none",
        });
        ScrollTrigger.refresh();
      });
    });
  }, []);

  return (
    <div className="bg-secondary-100">
      <NavBar sectionRefs={sectionRefs.current} />
      <div className="md:hidden">
        <MobileNav />
      </div>
      {/* Hero section */}
      <Hero />
      {/* Hero section ends */}

      <main className="px-5 md:px-10 xl:px-20 2xl:px-28">
        {/* Role section */}
        <Role forwardedRef={(el) => (sectionRefs.current[0] = el)} />
        <About />
        <Services />
        <Works forwardedRef={(el) => (sectionRefs.current[1] = el)} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
