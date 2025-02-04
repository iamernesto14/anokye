import { Icon } from "@iconify/react";
import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function Contact() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const heading = useRef(null);
  const body = useRef(null);
  const contactSection = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: contactSection.current,
      start: "180px bottom",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 1.25,
          },
          0
        )
        .to(
          body.current,
          {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 1.25,
          },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [contactSection]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="contact"
      className="mt-[10%] mb-16 overflow-hidden"
      aria-label="contact me"
    >
      <Heading title="Contact" />
      <div
        ref={contactSection}
        className="mt-10 flex flex-col gap-20 md:grid md:grid-cols-1"
      >
        <div className="col-span-4">
          <div className="flex h-[650px] w-full flex-col items-center justify-between bg-black px-10 pb-5 pt-28 text-accent-100 md:h-[500px]">
            <div className="text-center">
              <p className="mb-7 text-lg">(Need an unfair advantage?)</p>
              <h3 className="text-7xl font-semibold">LET'S MAKE IT HAPPEN</h3>
              <button className="mt-7">
                <a className="rounded-full bg-accent-200 px-20 py-5 text-white hover:bg-accent-300" href="mailto:eernesto211@gmail.com">Let's Talk</a>
              </button>
            </div>

            <div className="text-base-small flex flex-col items-center">
              <span className="text-secondary-50 font-bold uppercase">
                For further inquiries
              </span>
              <a href="mailto:eernesto211@gmail.com">
                <span>⮡ eernesto211@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex w-[100%] flex-col gap-8 text-accent-300 md:flex-row">
          {/* Navigation Menu */}
          <div className="flex flex-row gap-8 text-accent-300 md:w-[100%]">
            <div className="flex-1 space-y-2">
              <h4 className="2xl:text-4x text-body-1 font-semibold">Menu</h4>
              <hr className="w-full bg-accent-200" />
              <div className="flex flex-col items-start justify-start space-y-1 text-body-2 2xl:text-3xl">
                <button
                  onClick={() => handleScroll("about")}
                  className="cursor-pointer transition duration-300 hover:text-yellow-500"
                >
                  About
                </button>
                <button
                  onClick={() => handleScroll("work")}
                  className="cursor-pointer transition duration-300 hover:text-yellow-500"
                >
                  Work
                </button>
                <button
                  onClick={() => handleScroll("service")}
                  className="cursor-pointer transition duration-300 hover:text-yellow-500"
                >
                  Service
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex-1 space-y-2">
              <h4 className="text-body-1 font-semibold 2xl:text-4xl">
                Socials
              </h4>
              <hr className="w-full bg-accent-200" />
              <div className="space-y-1 text-body-2 2xl:text-3xl">
                <a
                  href="https://github.com/iamernesto14"
                  className="group flex items-center space-x-2 hover:text-yellow-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="mdi:github" color="#666" />
                  <span>Github</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ernesto-anokye/"
                  className="group flex items-center space-x-2 hover:text-yellow-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="mdi:linkedin" color="#666" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://x.com/iamernesto14"
                  className="group flex items-center space-x-2 hover:text-yellow-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="mdi:twitter" color="#666" />
                  <span>X</span>
                </a>
              </div>
            </div>
          </div>
          {/* Resource section */}
          <div className="space-y-2">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">
              Resources
            </h4>
            <hr className="w-full bg-accent-200" />
            
            <div>
              <button className="cursor-pointer transition duration-300 hover:text-yellow-500">
                <a
                  href="https://iamernesto14.github.io/CodeCompass/"
                  target="_blank"
                >
                  <span className="text-xl">CodeCompass</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
