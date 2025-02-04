import React, { useEffect, useRef, useState } from "react";
import "../../mobile.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import mobilePic from "../../assets/images/mobile.svg";
import SocialButton from "./SocialButton";

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const container = useRef();

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 320 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.8,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1.7,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar flex items-center justify-end gap-4 pb-10 pt-3">
        
        {/* Menu button */}
        <button
          className="menu-open flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-mobile-100 font-bold text-accent-300"
          onClick={toggleMenu}
        >
          <span>{isMenuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      <div className="menu-overlay fixed inset-0 z-50 bg-opacity-90">
        {/* Image section with dark overlay */}
        <div className="absolute right-0 top-0">
          <div className="relative">
            <img src={mobilePic} alt="" />
            <div className="absolute inset-0 rounded-bl-full bg-black bg-opacity-50"></div>
          </div>
        </div>

        

        <div className="flex h-screen flex-col pt-36">
        <p className="mb-5 uppercase text-mobile-100">Navigation</p>
        <hr className="bg-accent-400" />
          <div className="menu-copy flex-1 mt-10">
            <div className="menu-link space-y-4">
              <div className="menu-link-item uppercase font-extrabold text-mobile-100">
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <a href="#" className="text-2xl">
                    home
                  </a>
                </div>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <a href="#about" className="text-2xl">
                    about
                  </a>
                </div>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <a href="#services" className="text-2xl">
                    service
                  </a>
                </div>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <a href="#works" className="text-2xl">
                    project
                  </a>
                </div>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <a href="#contact" className="text-2xl">
                    contact
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Socials Section Fixed at Bottom */}
          <div className="w-full border-t border-solid border-mobile-100 py-4">
            <div className="text-sm">
              
              {/* details section */}
              <div className="menu-col text-mobile-100">
                <p className="font-extrabold uppercase">Email Addresss</p>
                <p>eernesto211@gmail.com</p>
              </div>

              <div className="flex gap-3 mt-7">
              <SocialButton />
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
